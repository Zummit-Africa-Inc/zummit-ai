import mongoose from "mongoose"

export interface FormProps extends mongoose.Document {
	id: mongoose.ObjectId | string
	name: string
	email: string
	country: string
	previous_experience: string
	interest: string
	message: string
}

const form = new mongoose.Schema<FormProps>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		country: { type: String },
		previous_experience: { type: String },
		interest: { type: String },
		message: { type: String },
	},
	{ timestamps: true }
)

export const Form = mongoose.models.Form || mongoose.model<FormProps>("Form", form)
