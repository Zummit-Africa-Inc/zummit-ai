import React, { useContext, useState } from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AuthContext } from "@/context/AuthContext"
import { toast } from "sonner"
import { useRouter } from "next/router"

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
	const [loading, setLoading] = useState(false)
	const { generatePaymentLink } = useContext(AuthContext)
	const router = useRouter()

	const handleClick = async () => {
		const { title, price } = planDetails
		const convertedPrice = Number(price.replace(/[^\d.-]/g, "")) // Remove non-numeric characters
		try {
			setLoading(true)
			const result = await generatePaymentLink({ title, convertedPrice })
			if (result?.code === 200) {
				const redirectLink = result.data.link
				setLoading(false)
				router.push(redirectLink)
			}
		} catch (error: any) {
			console.log(error)
			toast.error("unable to generate link", {
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
				position: "top-right",
			})
		}
	}
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
				<Button onClick={handleClick} disabled={loading}>
					{loading ? "Wait a moment ..." : "Generate Payment Link"}
				</Button>
			</DialogContent>
		</Dialog>
	)
}

export default LinkDialog
