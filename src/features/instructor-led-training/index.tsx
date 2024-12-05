import React, { useContext, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { InstructorLedContent } from "./instructor-led-content"
import LinkModal from "./generate-payment-modal"

type PlanProps = {
	planId: number
	planName: string
	planPrice: string
}

export default function InstructorLed() {
	// const {  } = useContext(AuthContext)

	const [showModal, setShowModal] = useState(false)
	const [planDetails, setPlanDetails] = useState<PlanProps[]>([
		{
			planId: 1,
			planName: "One-Time Payment",
			planPrice: "120",
		},
		{
			planId: 2,
			planName: "3-Months Payment",
			planPrice: "50",
		},
	])

	return (
		<>
			{showModal && <LinkModal planDetails={planDetails} />}
			<InstructorLedContent
				showModal={showModal}
				setShowModal={setShowModal}
				planDetails={planDetails}
			/>
		</>
	)
}
