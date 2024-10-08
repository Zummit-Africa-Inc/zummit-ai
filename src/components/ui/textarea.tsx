import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: string
	label?: React.ReactNode
	labelClassName?: string
	wrapperClassName?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{ className, error, label, labelClassName, required, wrapperClassName, ...props },
		ref
	) => {
		return (
			<div className="flex w-full flex-col gap-3">
				{label && (
					<label
						id={props.id}
						htmlFor={props.name}
						className={cn("text-sm font-medium", labelClassName)}>
						{label} {required && <span className="text-red-700">*</span>}
					</label>
				)}
				<div className="flex min-h-[140px] rounded-md border border-neutral-300 bg-transparent px-3 py-2">
					<textarea
						className={cn(
							"flex h-full w-full resize-none bg-transparent text-sm outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50",
							className
						)}
						ref={ref}
						{...props}
					/>
				</div>
			</div>
		)
	}
)
Textarea.displayName = "Textarea"

export { Textarea }
