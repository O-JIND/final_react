// src/components/theme-provider.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "dark" | "light" | "system"
type ResolvedTheme = "dark" | "light"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function isTheme(v: unknown): v is Theme {
  return v === "dark" || v === "light" || v === "system"
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem(storageKey)
    return isTheme(saved) ? saved : defaultTheme
  })

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved === "dark" || saved === "light") return saved
    return getSystemTheme()
  })

  useEffect(() => {
    const root = window.document.documentElement
    const apply = (t: Theme) => {
      const next: ResolvedTheme = t === "system" ? getSystemTheme() : t
      root.classList.remove("light", "dark")
      root.classList.add(next)
      setResolvedTheme(next)
    }

    apply(theme)

    // system 따라가는 상태면, OS 테마 바뀔 때도 반영
    if (theme !== "system") return

    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => apply("system")

    // 구형/신형 브라우저 대응
    if (mql.addEventListener) mql.addEventListener("change", onChange)
    else mql.addListener(onChange)

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange)
      else mql.removeListener(onChange)
    }
  }, [theme, storageKey])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (next: Theme) => {
        localStorage.setItem(storageKey, next)
        setThemeState(next)
      },
    }),
    [theme, resolvedTheme, storageKey]
  )

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeProviderContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
