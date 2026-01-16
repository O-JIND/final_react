import Header from "@/components/header"
import Footer from "@/components/footer"
import { Link, Outlet, useMatches } from "react-router-dom"
import { RouteHandle } from "@/components/constants/types"
import AdminSidebar from "@/admin/AdminSidebar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

// Generic handle picker (same behavior as App.tsx)
function pickHandle<T>(
  matches: ReturnType<typeof useMatches>,
  getter: (h: RouteHandle) => T | undefined,
  fallback: T,
): T {
  for (let i = matches.length - 1; i >= 0; i--) {
    const h = (matches[i].handle ?? {}) as RouteHandle
    const v = getter(h)
    if (v !== undefined) return v
  }
  return fallback
}

export default function AdminLayout() {
  const matches = useMatches()
  const title = pickHandle(matches, (h) => h.title, "관리자")

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Admin top bar */}
      <div className="sticky top-0 z-40 bg-card border-b border-border mt-16">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className={cn("flex items-center justify-between gap-3 py-3")}>
            <div className="min-w-0">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/admin">Admin</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="truncate">{title || "대시보드"}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="mt-1 text-sm text-muted-foreground">
                시스템/콘텐츠/사용자 관리
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button variant="secondary" size="sm">새 공지</Button>
              <Button size="sm">저장</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4">
        <Separator />
      </div>

      {/* Body */}
      <div className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex gap-6 py-6">
            <div className="w-72 shrink-0">
              <AdminSidebar />
            </div>
            <main className="flex-1 min-w-0">
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
