import { useState, ChangeEvent, FormEvent } from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { countries } from "./data"

interface FormData {
	fullName: string
	email: string
	phoneNumber: string
	sex: string
	country: string
}

export const Registration: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		email: "",
		phoneNumber: "",
		sex: "",
		country: "",
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		console.log(formData)
	}

	return (
		<>
			<Seo title="Support Zummit Africa" />
			<Appbar />
			<main>
				<div className="mx-auto mb-20 mt-40 max-w-xl p-6">
					<h1 className="mb-8 text-center text-3xl font-normal">
						Complete this form to proceed to your one-time-payment
					</h1>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<label htmlFor="fullName" className="text-gray-900 block text-sm font-medium">
								Full Name
							</label>
							<input
								type="text"
								id="fullName"
								name="fullName"
								value={formData.fullName}
								onChange={handleChange}
								placeholder="Enter Full Name"
								className="border-gray-300 w-full rounded-lg border px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#460D38]"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="email" className="text-gray-900 block text-sm font-medium">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Enter Email Address"
								className="border-gray-300 w-full rounded-lg border px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#460D38]"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="phoneNumber" className="text-gray-900 block text-sm font-medium">
								Phone Number
							</label>
							<input
								type="tel"
								id="phoneNumber"
								name="phoneNumber"
								value={formData.phoneNumber}
								onChange={handleChange}
								placeholder="Enter Phone Number"
								className="border-gray-300 w-full rounded-lg border px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#460D38]"
								required
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="sex" className="text-gray-900 block text-sm font-medium">
								Sex
							</label>
							<select
								id="sex"
								name="sex"
								value={formData.sex}
								onChange={handleChange}
								className="border-gray-300 w-full rounded-lg border px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#460D38]"
								required>
								<option value="">Select</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>

						<div className="space-y-2">
							<label htmlFor="country" className="text-gray-900 block text-sm font-medium">
								Country
							</label>
							<select
								id="country"
								name="country"
								value={formData.country}
								onChange={handleChange}
								className="border-gray-300 w-full rounded-lg border px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#460D38]"
								required>
								<option value="">Select</option>
								{countries.map((country) => (
									<option key={country} value={country}>
										{country}
									</option>
								))}
							</select>
						</div>

						<button
							type="submit"
							className="w-full rounded-lg bg-[#460D38] py-3 text-white transition-colors duration-200 hover:bg-pink-950">
							Submit
						</button>
					</form>
				</div>
			</main>
			<Footer />
		</>
	)
}
