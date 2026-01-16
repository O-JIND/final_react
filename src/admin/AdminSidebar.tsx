import { useMemo, useState } from "react"
import { NavLink } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import { ADMIN_SIDEBAR } from "@/admin/admin-constants"

export default function AdminSidebar() {
  const [q, setQ] = useState("")

  const items = useMemo(() => {
    const keyword = q.trim().toLowerCase()
    if (!keyword) return ADMIN_SIDEBAR
    return ADMIN_SIDEBAR.filter((it) => it.label.toLowerCase().includes(keyword))
  }, [q])

  return (
    <aside className="sticky top-24 self-start">
      <div className="rounded-xl border border-sidebar-border bg-sidebar text-sidebar-foreground shadow-sm">
        {/* Header */}
        <div className="px-3 py-3">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-sidebar-accent">
              <span className="text-xs font-semibold tracking-wide">ADM</span>
            </span>
            <div className="min-w-0">
              <div className="text-sm font-semibold leading-tight truncate">관리자</div>
              <div className="text-xs text-muted-foreground">Admin Console</div>
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
              items.map((item) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={item.id}
                    to={item.to}
                    end={item.to === "/admin"}
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
                        <Icon
                          className={cn(
                            "size-4 transition-colors",
                            isActive ? "text-sidebar-primary" : "text-muted-foreground",
                            "group-hover:text-sidebar-primary/80",
                          )}
                          aria-hidden
                        />
                        <span className="truncate">{item.label}</span>

                        {/* active indicator */}
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
                )
              })
            )}
          </nav>
        </ScrollArea>

        <Separator />

        {/* Footer */}
        <div className="px-3 py-2 text-xs text-muted-foreground">
          총 <span className="font-medium text-foreground">{items.length}</span>개
        </div>
      </div>
    </aside>
  )
}
