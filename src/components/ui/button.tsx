import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors outline-none disabled:pointer-events-none disabled:opacity-75",
	{
		variants: {
			variant: {
				default: "bg-primary-purple text-white hover:bg-primary-purple/90",
				destructive: "bg-red-500 text-white hover:bg-red-500/90",
				outline: "border border-primary-purple bg-white hover:bg-white/90",
				secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80",
				ghost: "bg-transparent text-primary-purple",
				link: "text-neutral-900 underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-2 lg:px-4 py-2",
				sm: "h-7 lg:h-9 rounded-md px-1 lg:px-3",
				lg: "h-11 lg:h-[60px] rounded-md py-3 lg:py-5 px-8 lg:px-12 text-base lg:text-lg",
				icon: "h-10 w-10 rounded-full",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }
