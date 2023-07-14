import { ChangeEventHandler, ComponentProps } from "react"

interface Props extends ComponentProps<"input"> {
	element: "input" | "textarea"
	error?: string
	label?: string
	onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const Input = (props: Props) => {
	if (props.element === "textarea") {
		return (
			<div className="flex w-full flex-col gap-[10px]">
				<label htmlFor={props.id} className="font-semibold text-[#333]">
					{props.label}
				</label>
				<textarea
					id={props.id}
					onChange={props.onChange}
					className="h-[100px] w-full resize-none rounded-lg border border-gray-400 px-5 py-[10px]"></textarea>
				{props.error && (
					<span className="text-xs text-red-500">{props.error}</span>
				)}
			</div>
		)
	}

	return (
		<div className="flex w-full flex-col gap-[10px]">
			<label htmlFor={props.id} className="font-semibold text-[#333]">
				{props.label}
			</label>
			<input
				className="w-full min-w-[285px] rounded-lg border border-gray-400 px-5 py-[10px]"
				{...props}
			/>
			{props.error && (
				<span className="text-xs text-red-500">{props.error}</span>
			)}
		</div>
	)
}

export default Input
