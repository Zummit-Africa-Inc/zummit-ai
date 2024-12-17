import * as React from "react"
import { PolicySectionProps } from "./data"

export const PolicySection: React.FC<PolicySectionProps> = ({
	number,
	title,
	children,
}) => (
	<section className="mb-8 last:mb-0">
		<div className="flex items-center gap-7 self-start font-semibold leading-loose">
			<span className="my-auto self-stretch">{number}.</span>
			<h2 className="my-auto self-stretch">{title}</h2>
		</div>
		<div className="ml-11 mt-3 leading-7 max-md:max-w-full">{children}</div>
	</section>
)
