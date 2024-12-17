import { HttpResponse } from "@/types"
import { axios } from "@/lib"

interface PaymentPayload {
	link: string
	reference: string
	txn_log: {
		_id: string
		amount: number
		createdAt: Date | string
		currency: string
		id: string
		narration: string
		narration_id: string
		reference: string
		status: string
		type: string
		updatedAt: Date | string
		user: string
	}
}

interface SubscriptionPlanPayload {
	_id: string
	amount: number
	createdAt: Date | string
	description: string
	id: string
	name: string
	updatedAt: Date | string
}

const GeneratePaymentLink = async (
	amount: number,
	narration: string,
	narration_id?: string
) => {
	return axios
		.post<
			HttpResponse<PaymentPayload>
		>("/transaction/gen-payment-link", { amount, narration, narration_id })
		.then((res) => res.data)
}

const GetSubscriptionPlans = async () => {
	return axios
		.get<HttpResponse<SubscriptionPlanPayload[]>>("/user/get-plans")
		.then((res) => res.data)
}

export { GeneratePaymentLink, GetSubscriptionPlans }
