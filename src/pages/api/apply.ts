import { NextApiRequest, NextApiResponse } from "next/types"

import { DataResponse } from "@labs/utils/types/utility"
import { prisma } from "@/lib"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<DataResponse>
) {
	try {
		let response: DataResponse
		if (req.method !== "POST") {
			response = {
				error: true,
				message: "Method not allowed",
			}
			return res.status(405).json(response)
		}
		const form = await prisma.form.create({
			data: { ...req.body },
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
	} catch (error: any) {
		const response: DataResponse = {
			error: true,
			message: error.message || "Internal server error",
		}
		return res.status(500).json(response)
	}
}
