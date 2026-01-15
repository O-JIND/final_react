import type React from "react"
import type { SectionKey } from "./types"
import { BookOpen, Users, MessageCircle, Award, Calendar, Briefcase, HelpCircle } from "lucide-react"

export type NavItem = {
    id: string
    label: string
    to: string
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

export const NAV_DROPDOWN: Record<SectionKey, NavItem[]> = {
    lectures: [
        { id: "lec-1", label: "영어", to: "/lectures/english", icon: BookOpen },
        { id: "lec-2", label: "일본어", to: "/lectures/japanese", icon: BookOpen },
        { id: "lec-3", label: "중국어", to: "/lectures/chinese", icon: BookOpen },
        { id: "lec-3", label: "독일어", to: "/lectures/germany", icon: BookOpen },
    ],
    community: [
        { id: "comm-forums", label: "포럼", to: "/community/forums", icon: MessageCircle },
        { id: "comm-groups", label: "그룹", to: "/community/groups", icon: Users },
    ],
    mentoring: [
        { id: "ment-find", label: "멘토 찾기", to: "/mentoring/find", icon: Users },
    ],
    certifications: [
        { id: "cert-list", label: "자격증 목록", to: "/certifications/list", icon: Award },
    ],
    events: [
        { id: "event-upcoming", label: "다가오는 이벤트", to: "/events/upcoming", icon: Calendar },
    ],
    careers: [
        { id: "careers-jobs", label: "채용 정보", to: "/careers/jobs", icon: Briefcase },
    ],
    support: [
        { id: "support-faq", label: "자주 묻는 질문", to: "/support/faq", icon: HelpCircle },
    ],
}