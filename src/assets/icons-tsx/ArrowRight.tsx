import { ComponentProps } from "react"

type Props = ComponentProps<"svg">

const ArrowRight = (props: Props) => {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			className={props.className}
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_693_185)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13.8536 6.64646C14.0488 6.84172 14.0488 7.15831 13.8536 7.35357L10.3536 10.8536C10.2106 10.9966 9.9955 11.0393 9.80866 10.962C9.62182 10.8846 9.5 10.7022 9.5 10.5L9.5 8.00001L1 8.00001C0.447715 8.00001 0 7.5523 0 7.00001C0 6.44773 0.447715 6.00001 1 6.00001L9.5 6.00001V3.50001C9.5 3.29778 9.62182 3.11547 9.80866 3.03807C9.9955 2.96068 10.2106 3.00346 10.3536 3.14646L13.8536 6.64646Z"
					fill={props.fill || "#081F4A"}
				/>
			</g>
			<defs>
				<clipPath id="clip0_693_185">
					<rect
						width="14"
						height="14"
						fill="white"
						transform="matrix(0 1 -1 0 14 0)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default ArrowRight
