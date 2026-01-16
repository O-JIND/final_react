import Header from "@/components/header"
import NavigationMenu from "@/components/navigation-menu"
import { Outlet, useMatches, useNavigate } from "react-router-dom"
import Footer from "./components/footer"
import { RouteHandle, SectionKey, SIDEBAR } from "./components/constants/types"
import Sidebar from "./components/sidbar"
import { TOP_SECTIONS } from "./components/constants/types"

//  Generic T --> 나중에 Type 지정 
function pickHandle<T>(
  matches: ReturnType<typeof useMatches>,
  getter: (h: RouteHandle) => T | undefined,
  fallback: T
): T {
  for (let i = matches.length - 1; i >= 0; i--) {
    const h = (matches[i].handle ?? {}) as RouteHandle
    const v = getter(h)
    if (v !== undefined) return v
  }
  return fallback
}


export default function App() {
  const matches = useMatches()
  const navigate = useNavigate()
  const activeSection = pickHandle(matches, (h) => h.section, "lectures" as SectionKey)
  const showSidebar = pickHandle(matches, (h) => h.sidebar, true)
  const title = pickHandle(matches, (h) => h.title, "")

  const onClickTopTab = (key: SectionKey) => {
    // 탭 클릭 시 해당 섹션 대표 페이지로 이동 
    const first = SIDEBAR[key]?.[0]
    if (first) navigate(first.to)
  }


  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <NavigationMenu active={activeSection} onClick={onClickTopTab} sections={TOP_SECTIONS} />
      <hr />

      {/* 본문이 남는 높이를 먹어서 footer를 아래로 밀어줌 */}
      <div className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex gap-6 py-6">
            {showSidebar ? (
              <div className="w-64 shrink-0">
                <Sidebar section={activeSection} />
              </div>
            ) : null}

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
