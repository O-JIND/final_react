import { cn } from "@/lib/utils"
import type { SectionKey, TopSection } from "@/components/constants/types"
import { NAV_DROPDOWN } from "@/components/constants/nav-dropdown"
import MegaDropdownPanel from "@/components/dropdown" // ✅ 패널 컴포넌트 경로로 맞추기
import { useMegaDropdownController } from "@/components/dropdown" // ✅ 방금 만든 훅

type Props = {
  active: SectionKey
  sections: TopSection[]
  onClick: (key: SectionKey) => void
}

export default function NavigationMenu({ active, onClick, sections }: Props) {
  const {
    open,
    hoverKey,
    setHoverKey,
    openNow,
    onBarEnter,
    onBarLeave,
    onPanelEnter,
    onPanelLeave,
    onRequestClose,
  } = useMegaDropdownController("lectures")

  return (
    <nav className="sticky top-0 z-40 bg-card border-b border-border mt-16">
      <div className="relative container mx-auto px-4">
        <div
          className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-2"
          onPointerEnter={onBarEnter}
          onPointerLeave={onBarLeave}
        >
          {sections.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.key}
                type="button"
                onPointerEnter={() => openNow(item.key)}
                onClick={() => onClick(item.key)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                  active === item.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            )
          })}
        </div>

        <MegaDropdownPanel
          open={open}
          sections={sections}
          hoverKey={hoverKey}
          setHoverKey={setHoverKey}
          itemsBySection={NAV_DROPDOWN}
          onRequestClose={onRequestClose}
          onPanelEnter={onPanelEnter}
          onPanelLeave={onPanelLeave}
        />
      </div>
    </nav>
  )
}
