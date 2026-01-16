"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Search, User, Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import i18n from "i18next"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import ModeToggle from "@/components/theme-module"
import { useNavigate } from "react-router-dom"
import LanguageSwitcher from "@/components/language-switcher"

export default function Header() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const nav = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-card border-b border-border transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground" onClick={() => nav("/")}>Node</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("search.placeholder")}
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <LanguageSwitcher />

            {isLoggedIn ? (
              <Button variant="ghost" size="sm" className="gap-2" onClick={() => nav("/my-page")}>
                <User className="w-4 h-4" />
                {t("My Page")}
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(true)}>
                  {t("Login")}
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {t("Sign Up")}
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-10 bg-secondary" />
            </div>
            <div className="flex flex-col gap-2">
              <LanguageSwitcher />
              {isLoggedIn ? (
                <Button variant="ghost" className="justify-start gap-2">
                  <User className="w-4 h-4" />
                  My Page
                </Button>
              ) : (
                <>
                  <Button variant="ghost" className="justify-start" onClick={() => setIsLoggedIn(true)}>
                    Login
                  </Button>
                  <Button className="bg-primary text-primary-foreground">Sign Up</Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
