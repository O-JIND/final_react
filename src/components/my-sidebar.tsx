import { useMemo, useState } from "react"
import { NavLink } from "react-router-dom"
import { User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import { MYSIDEBAR } from "./constants/types"

export default function MySidebar() {
    const [q, setQ] = useState("")

    const items = useMemo(() => {
        const keyword = q.trim().toLowerCase()
        if (!keyword) return MYSIDEBAR
        return MYSIDEBAR.filter((it) => it.label.toLowerCase().includes(keyword))
    }, [q])

    return (
        <aside className="sticky top-24 self-start">
            <div className="rounded-xl border border-sidebar-border bg-sidebar text-sidebar-foreground shadow-sm">
                {/* Header */}
                <div className="px-3 py-3">
                    <div className="flex items-center gap-2">
                        <span className="grid size-8 place-items-center rounded-lg bg-sidebar-accent">
                            <User className="size-4" />
                        </span>
                        <div className="min-w-0">
                            <div className="text-sm font-semibold leading-tight truncate">My Page</div>
                            <div className="text-xs text-muted-foreground">설정</div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <Input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="메뉴 검색"
                            className="h-9 bg-secondary"
                        />
                    </div>
                </div>

                <Separator />

                {/* Nav */}
                <ScrollArea className="h-[calc(100vh-14rem)] px-2 py-2">
                    <nav className="space-y-1">
                        {items.length === 0 ? (
                            <div className="px-2 py-3 text-sm text-muted-foreground">검색 결과가 없어요.</div>
                        ) : (
                            items.map((item) => (
                                <NavLink
                                    key={item.id}
                                    to={item.to}
                                    end={item.to === "/my-page"}
                                    className={({ isActive }) =>
                                        cn(
                                            "group relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                                            "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                            isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
                                        )
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span
                                                className={cn(
                                                    "h-2 w-2 rounded-full transition-colors",
                                                    isActive ? "bg-sidebar-primary" : "bg-muted-foreground/40",
                                                    "group-hover:bg-sidebar-primary/70",
                                                )}
                                                aria-hidden
                                            />
                                            <span className="truncate">{item.label}</span>
                                            <span
                                                className={cn(
                                                    "absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full bg-sidebar-primary transition-opacity",
                                                    isActive ? "opacity-100" : "opacity-0",
                                                )}
                                                aria-hidden
                                            />
                                        </>
                                    )}
                                </NavLink>
                            ))
                        )}
                    </nav>
                </ScrollArea>

                <Separator />

                {/* Footer */}

            </div>
        </aside>
    )
}
