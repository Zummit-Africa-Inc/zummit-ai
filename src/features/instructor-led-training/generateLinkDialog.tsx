import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"

type PlanProps = {
	title: string
	price: string
}

const LinkDialog = ({
	showModal,
	setShowModal,
	planDetails,
}: {
	showModal: boolean
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
	planDetails: PlanProps
}) => {
	return (
		<Dialog open={showModal} onOpenChange={setShowModal}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{`Proceed to payment for ${planDetails.title}`}</DialogTitle>
					<DialogDescription className="mt-2">
						You need to generate a payment link to make payment for the course , click the
						button below to do so, you would be redirected.
					</DialogDescription>
				</DialogHeader>
				<Button>
					<Link href="#">Generate Payment Link</Link>
				</Button>
			</DialogContent>
		</Dialog>
	)
}

export default LinkDialog
