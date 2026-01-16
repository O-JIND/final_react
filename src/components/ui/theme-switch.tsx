import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    checked?: boolean
    defaultChecked?: boolean
    onCheckedChange?: (checked: boolean) => void
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
    (
        {
            className,
            checked,
            defaultChecked = false,
            disabled,
            onCheckedChange,
            onClick,
            ...props
        },
        ref
    ) => {
        const isControlled = checked !== undefined
        const [internal, setInternal] = React.useState(defaultChecked)

        const current = isControlled ? checked : internal
        const state = current ? "checked" : "unchecked"

        const toggle = () => {
            if (disabled) return
            const next = !current
            if (!isControlled) setInternal(next)
            onCheckedChange?.(next)
        }

        return (
            <button
                ref={ref}
                type="button"
                role="switch"
                aria-checked={current}
                data-state={state}
                disabled={disabled}
                className={cn(
                    "inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
                    className
                )}
                onClick={(e) => {
                    onClick?.(e)
                    toggle()
                }}
                {...props}
            >
                <span
                    data-state={state}
                    className={cn(
                        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow transition-transform",
                        "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                    )}
                />
            </button>
        )
    }
)

Switch.displayName = "Switch"
