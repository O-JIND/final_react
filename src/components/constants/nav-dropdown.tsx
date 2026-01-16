import type React from "react"
import { SIDEBAR } from "./types"
import type { SectionKey, MenuItem } from "./types"
import type { LucideIcon } from "lucide-react"
import { BookOpen, Users, MessageCircle, Award, Calendar, Briefcase, HelpCircle } from "lucide-react"

export type NavItem = MenuItem & {
    icon?: React.ComponentType<{ className?: string }>
}

export const NAV_DROPDOWN_UI = {
    closeDelayMs: 150,
    menuClass:
        "absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-md border bg-card shadow-md z-50 p-1",
    itemBaseClass: "flex items-center gap-2 rounded-sm px-3 py-2 text-sm",
    itemHoverClass: "hover:bg-secondary hover:text-foreground",
    itemActiveClass: "bg-secondary font-medium",
    itemInactiveClass: "text-muted-foreground",
} as const

const SECTION_ICON: Record<SectionKey, LucideIcon> = {
    lectures: BookOpen,
    community: MessageCircle,
    mentoring: Users,
    certifications: Award,
    events: Calendar,
    careers: Briefcase,
    support: HelpCircle,
}

export const NAV_DROPDOWN: Record<SectionKey, NavItem[]> = (
    Object.keys(SIDEBAR) as SectionKey[]
).reduce((acc, key) => {
    acc[key] = SIDEBAR[key].map((item) => ({
        ...item,
        icon: SECTION_ICON[key],
    }))
    return acc
}, {} as Record<SectionKey, NavItem[]>)
