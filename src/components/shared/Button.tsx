import { ComponentProps, MouseEventHandler, ReactNode } from "react"
import { Link } from "react-router-dom"

interface Props extends ComponentProps<"button"> {
	label: string | ReactNode
	href?: string
	onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
	to?: string
	variant?: "solid" | "hollow"
}

const Button = (props: Props) => {
	if (props.href) {
		return (
			<a
				href={props.href}
				onClick={props.onClick}
				className={`px-8 py-[14px] ${props.className}`}>
				{props.label}
			</a>
		)
	}

	if (props.to) {
		return (
			<Link
				to={props.to}
				onClick={props.onClick}
				className={`px-8 py-[14px] ${props.className}`}>
				{props.label}
			</Link>
		)
	}

	return (
		<button
			onClick={props.onClick}
			className={`px-8 py-[14px] ${props.className}`}
			{...props}>
			{props.label}
		</button>
	)
}

export default Button
