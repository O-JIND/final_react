import Header from "@/components/header"
import NavigationMenu from "@/components/navigation-menu"
import { Outlet, useMatches, useNavigate } from "react-router-dom"
import Footer from "@/components/footer"
import { RouteHandle, SectionKey, SIDEBAR, TOP_SECTIONS } from "@/components/constants/types"
import MySidebar from "./my-sidebar"

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

//  TOP_SECTIONS은 상위 메뉴 섹션들을 정의 / 사이드바를 따로 만들어 관리
// 사이드바는 따로 MySidebar 컴포넌트로 관리
export default function MyPageStructure() {
    const matches = useMatches()
    const navigate = useNavigate()
    const activeSection = pickHandle(matches, (h) => h.section, "lectures" as SectionKey)

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

            <div className="flex-1">
                <div className="mx-auto w-full max-w-7xl px-4">
                    <div className="flex gap-6 py-6">
                        <div className="w-64 shrink-0">
                            <MySidebar />
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