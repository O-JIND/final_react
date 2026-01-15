// components/dropdown.tsx
import { useCallback, useEffect, useRef, useState } from "react"
import type { PointerEventHandler } from "react"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"

import type { SectionKey, TopSection } from "@/components/constants/types"
import type { NavItem } from "@/components/constants/nav-dropdown"
import { NAV_DROPDOWN_UI } from "@/components/constants/nav-dropdown"

// ✅ 훅(드롭다운 제어 로직)
export function useMegaDropdownController(initialKey: SectionKey = "lectures") {
    const [open, setOpen] = useState(false)
    const [hoverKey, setHoverKey] = useState<SectionKey>(initialKey)
    const timerRef = useRef<number | null>(null)

    const clearTimer = useCallback(() => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current)
            timerRef.current = null
        }
    }, [])

    const openNow = useCallback(
        (key?: SectionKey) => {
            clearTimer()
            if (key) setHoverKey(key)
            setOpen(true)
        },
        [clearTimer],
    )

    const closeLater = useCallback(() => {
        clearTimer()
        timerRef.current = window.setTimeout(() => setOpen(false), NAV_DROPDOWN_UI.closeDelayMs)
    }, [clearTimer])

    const closeNow = useCallback(() => {
        clearTimer()
        setOpen(false)
    }, [clearTimer])

    useEffect(() => () => clearTimer(), [clearTimer])

    const onBarEnter: PointerEventHandler = (e) => {
        if (e.pointerType !== "mouse") return
        openNow()
    }

    const onBarLeave: PointerEventHandler = (e) => {
        if (e.pointerType !== "mouse") return
        closeLater()
    }

    return {
        open,
        hoverKey,
        setHoverKey,
        openNow,
        closeLater,
        closeNow,
        onBarEnter,
        onBarLeave,
        onPanelEnter: () => openNow(),
        onPanelLeave: () => closeLater(),
        onRequestClose: () => closeNow(),
    }
}

// ✅ 패널(올메뉴 메가드롭다운 UI)
type MegaDropdownPanelProps = {
    open: boolean
    sections: TopSection[]
    hoverKey: SectionKey
    setHoverKey: (key: SectionKey) => void
    itemsBySection: Record<SectionKey, NavItem[]>
    onRequestClose: () => void
    onPanelEnter: () => void
    onPanelLeave: () => void
}

export default function MegaDropdownPanel({
    open,
    sections,
    hoverKey,
    setHoverKey,
    itemsBySection,
    onRequestClose,
    onPanelEnter,
    onPanelLeave,
}: MegaDropdownPanelProps) {
    const panelRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!open) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onRequestClose()
        }
        const onMouseDown = (e: MouseEvent) => {
            const el = panelRef.current
            if (!el) return
            if (!el.contains(e.target as Node)) onRequestClose()
        }

        window.addEventListener("keydown", onKeyDown)
        window.addEventListener("mousedown", onMouseDown)
        return () => {
            window.removeEventListener("keydown", onKeyDown)
            window.removeEventListener("mousedown", onMouseDown)
        }
    }, [open, onRequestClose])

    if (!open) return null

    return (
        <div
            ref={panelRef}
            className={cn(
                "absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50",
                "w-[900px] max-w-[calc(100vw-2rem)]",
                "rounded-xl border bg-card shadow-md p-4",
            )}
            onPointerEnter={onPanelEnter}
            onPointerLeave={onPanelLeave}
        >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {sections.map((sec) => {
                    const items = itemsBySection[sec.key] ?? []
                    return (
                        <div
                            key={sec.key}
                            onMouseEnter={() => setHoverKey(sec.key)}
                            className={cn("rounded-lg p-2", hoverKey === sec.key && "bg-secondary/40")}
                        >
                            <div className="mb-2 text-sm font-semibold">{sec.label}</div>

                            <div className="space-y-1">
                                {items.map((it) => {
                                    const Icon = it.icon
                                    return (
                                        <NavLink
                                            key={it.id}
                                            to={it.to}
                                            className={({ isActive }) =>
                                                cn(
                                                    NAV_DROPDOWN_UI.itemBaseClass,
                                                    NAV_DROPDOWN_UI.itemHoverClass,
                                                    isActive
                                                        ? NAV_DROPDOWN_UI.itemActiveClass
                                                        : NAV_DROPDOWN_UI.itemInactiveClass,
                                                )
                                            }
                                            onClick={onRequestClose}
                                        >
                                            {Icon ? <Icon className="h-4 w-4" /> : null}
                                            <span>{it.label}</span>
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
