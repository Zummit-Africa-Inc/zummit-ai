import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
	label?: React.ReactNode
	labelClassName?: string
	wrapperClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, error, label, labelClassName, required, type, wrapperClassName, ...props },
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
				<div
					className={cn(
						"flex h-[52px] w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2",
						wrapperClassName
					)}>
					<input
						type={type}
						className={cn(
							"flex h-full w-full bg-transparent  text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 ",
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
Input.displayName = "Input"

export { Input }
