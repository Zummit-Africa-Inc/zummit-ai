import { NextApiRequest, NextApiResponse } from "next/types"

import { DataResponse } from "@labs/utils/types/utility"
import { Form } from "@/models/Form"
import { dbConnect } from "@/lib"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<DataResponse>
) {
	try {
		await dbConnect()

		let response: DataResponse
		if (req.method === "POST") {
			const form = await Form.create({
				...req.body,
			})
			if (!form) {
				response = {
					error: true,
					message: "Form not created",
				}
				return res.status(400).json(response)
			}
			response = {
				error: false,
				message: "Application submitted",
			}
			return res.status(201).json(response)
		} else if (req.method === "GET") {
			const forms = await Form.find({})
			response = {
				error: false,
				message: "all forms retrieved",
				data: forms,
			}
			return res.status(200).json(response)
		} else {
			response = {
				error: true,
				message: "Method not allowed",
			}
			return res.status(405).json(response)
		}
	} catch (error: any) {
		const response: DataResponse = {
			error: true,
			message: error.message || "Internal server error",
		}
		return res.status(500).json(response)
	}
}
