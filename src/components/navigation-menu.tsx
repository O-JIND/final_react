import { useState } from "react"
import { cn } from "@/lib/utils"

import type { SectionKey } from "@/components/constants/types"
import { TopSection } from "@/components/constants/types"


type Props = {
  active: SectionKey
  sections: TopSection[]
  onClick: (key: SectionKey) => void,
}


export default function NavigationMenu({ active, onClick, sections }: Props) {
  return (
    <nav className="sticky top-0 z-40 bg-card border-b border-border mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-2">
          {sections.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.key}
                onClick={() => {
                  onClick(item.key)
                }}
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
      </div>
    </nav>
  )
}
