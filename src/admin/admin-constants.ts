import type React from "react"
import { BarChart3, BookOpen, FileText, Settings, Shield, Users } from "lucide-react"

export type AdminMenuItem = {
  id: string
  label: string
  to: string
  icon: React.ComponentType<{ className?: string }>
}

/**
 * Admin sidebar items.
 *
 * Keep routes under `/admin` so NavLink active state works predictably.
 */
export const ADMIN_SIDEBAR: AdminMenuItem[] = [
  { id: "admin-dashboard", label: "대시보드", to: "/admin", icon: BarChart3 },
  { id: "admin-users", label: "사용자", to: "/admin/users", icon: Users },
  { id: "admin-courses", label: "강의 관리", to: "/admin/courses", icon: BookOpen },
  { id: "admin-content", label: "콘텐츠", to: "/admin/content", icon: FileText },
  { id: "admin-settings", label: "설정", to: "/admin/settings", icon: Settings },
  { id: "admin-audit", label: "감사 로그", to: "/admin/audit", icon: Shield },
]
