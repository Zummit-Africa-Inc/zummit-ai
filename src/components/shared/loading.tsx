import { cva, VariantProps } from "class-variance-authority"
import { RiLoaderLine } from "@remixicon/react"
import React from "react"

import { cn } from "@/lib/utils"

interface Props extends VariantProps<typeof loaderVariants> {
	className?: string
}

const loaderVariants = cva("animate-spin", {
	variants: {
		variant: {
			primary: "fill-brand-primary-dark",
			secondary: "fill-brand-secondary",
			white: "fill-white",
		},
		size: {
			sm: "size-10",
			md: "size-20",
			lg: "size-32",
			xl: "size-40",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
})

export const Loading = ({ className, size, variant }: Props) => {
	return (
		<div
			aria-label="loading"
			role="spinbutton"
			className="grid h-full w-full place-items-center">
			<RiLoaderLine className={cn(loaderVariants({ size, variant, className }))} />
		</div>
	)
}
