import React from "react"

import { InstructorLedContent } from "./instructor-led-content"
import LinkDialog from "./generateLinkDialog"

type PlanProps = {
	title: string
	price: string
}

export default function InstructorLed() {
	const [planDetails, setPlanDetails] = React.useState<PlanProps>({ title: "", price: "" })
	const [showModal, setShowModal] = React.useState(false)

	return (
		<div>
			<LinkDialog
				showModal={showModal}
				setShowModal={setShowModal}
				planDetails={planDetails}
			/>
			<InstructorLedContent setShowModal={setShowModal} setPlanDetails={setPlanDetails} />
		</div>
	)
}
