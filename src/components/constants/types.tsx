import { Award, BookOpen, Briefcase, Calendar, HelpCircle, MessageCircle, Users } from "lucide-react"
import type React from "react"

export type SectionKey =
    | "lectures"
    | "community"
    | "mentoring"
    | "certifications"
    | "events"
    | "careers"
    | "support"

export type MenuItem = {
    id: string
    label: string
    to: string
}

// 사용자 권한
export type Role = "user" | "admin" | "tutor" | "unknown"

// 라우트 핸들러 타입 정의
export type RouteHandle = {
    section?: SectionKey
    sidebar?: boolean
    title?: string
}
// 네비게이션 바 상단 섹션 타입 정의
export type TopSection = {
    key: SectionKey
    labelKey: string
    icon: React.ComponentType<{ className?: string }>
}

// Nav bar 상단 섹션들
export const TOP_SECTIONS: TopSection[] = [
    { key: "lectures", labelKey: "lectures", icon: BookOpen },
    { key: "community", labelKey: "community", icon: Users },
    { key: "mentoring", labelKey: "mentoring", icon: MessageCircle },
    { key: "certifications", labelKey: "certifications", icon: Award },
    { key: "events", labelKey: "events", icon: Calendar },
    { key: "careers", labelKey: "careers", icon: Briefcase },
    { key: "support", labelKey: "support", icon: HelpCircle },
]



// Recored는 key-value 쌍을 정의하는 타입스크립트 유틸리티 타입. 
export const SIDEBAR: Record<SectionKey, MenuItem[]> = {
    lectures: [
        { id: "all-lectures", label: "All Lectures", to: "/lectures" },
        { id: "my-lectures", label: "내 강의", to: "/lectures/my" },
        { id: "sdsd-lectures11", label: "sdsd", to: "/lectures/my11" },
        { id: "aaa-lectures11", label: "aaa", to: "/lectures/aaa" },
    ],
    community: [
        { id: "forumsh", label: "Forumsg", to: "/community" },
        { id: "forums", label: "Forums", to: "/community/forums" },

    ],
    mentoring: [
        { id: "find-mentor", label: "Find a Mentor", to: "/mentoring" },
    ],
    certifications: [
        { id: "all-certifications", label: "All Certifications", to: "/certifications" },
    ],
    events: [
        { id: "upcoming-events", label: "Upcoming Events", to: "/events" },
    ],
    careers: [
        { id: "job-board", label: "Job Board", to: "/careers" },
    ],
    support: [
        { id: "help-center", label: "Help Center", to: "/support" },
    ],
}





export const MYSIDEBAR: MenuItem[] = [
    { id: "profile", label: "Profile", to: "/my-page" },
    { id: "settings", label: "Settings", to: "/my-page/settings" },
    { id: "notifications", label: "Notifications", to: "/my-page/notifications" },


]

