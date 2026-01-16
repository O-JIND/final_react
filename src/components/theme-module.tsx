// src/components/theme-toggle.tsx
import { Switch } from "@/components/ui/theme-switch"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function ModeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const isDark = resolvedTheme === "dark"

    return (
        <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <Switch
                checked={isDark}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
            <Moon className="h-4 w-4" />
        </div>
    )
}
