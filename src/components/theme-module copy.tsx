// src/components/ModeToggle.tsx
import { useTheme } from "./theme-provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex gap-2 p-4">
            {/* 현재 어떤 모드인지 확인하며 버튼 클릭 시 변경 */}
            <button
                onClick={() => setTheme("light")}
                className={`px-3 py-1 border rounded ${theme === 'light' ? 'bg-blue-500 text-white' : ''}`}
            >
                라이트
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`px-3 py-1 border rounded ${theme === 'dark' ? 'bg-blue-500 text-white' : ''}`}
            >
                다크
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`px-3 py-1 border rounded ${theme === 'system' ? 'bg-blue-500 text-white' : ''}`}
            >
                브라우저 설정
            </button>
        </div>
    )
}