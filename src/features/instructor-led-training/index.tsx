import React, { useContext, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { InstructorLedContent } from "./instructor-led-content"
import LinkDialog from "./generateLinkDialog"

type PlanProps = {
	title: string
	price: string
}

export default function InstructorLed() {
	// const {  } = useContext(AuthContext)

	const [showModal, setShowModal] = useState(false)
	const [planDetails, setPlanDetails] = useState<PlanProps>({ title: "", price: "" })

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
