import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        // Base styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        // Variants
        const variants = {
            default: "bg-orange-600 text-white hover:bg-orange-700 shadow-md transform hover:-translate-y-0.5 transition-all duration-200",
            secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-md",
            outline: "border border-slate-300 bg-white hover:bg-slate-100 hover:text-slate-900 border-2",
            ghost: "hover:bg-slate-100 hover:text-slate-900",
            link: "text-slate-900 underline-offset-4 hover:underline",
            destructive: "bg-red-600 text-white hover:bg-red-700",
        }

        // Sizes
        const sizes = {
            default: "h-11 px-6 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 rounded-md px-8 text-lg font-bold uppercase tracking-wide",
            icon: "h-10 w-10",
        }

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
