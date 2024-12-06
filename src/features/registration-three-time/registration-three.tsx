import { useState, ChangeEvent, FormEvent } from "react"

import { Appbar, Footer, Seo } from "@/components/shared"

import { countries } from "./data"
import axios from "axios"
import { toast } from "sonner"

interface FormData {
	full_name: string
	email: string
	password: string
	phone_number: string
	gender: string
	country: string
}

export const Registration3: React.FC = () => {
	const [loading, setLoading] = useState(false)

	const [formData, setFormData] = useState<FormData>({
		full_name: "",
		email: "",
		password: "",
		phone_number: "",
		gender: "",
		country: "",
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const createUser = async () => {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
		try {
			const results = await axios.post(`${baseUrl}/user/signup`, formData, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			})
			return results
		} catch (error: any) {
			console.log(error.message)
		}
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setLoading(true)
		e.preventDefault()
		try {
			const results = await createUser()
			setLoading(false)

			toast(results?.data.message, {
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
				position: "top-right",
			})
		} catch (error: any) {
			console.log(error.message)
			toast.error("unable to create user", {
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
				position: "top-right",
			})
		} finally {
			setLoading(false)
			setFormData({
				full_name: "",
				email: "",
				password: "",
				phone_number: "",
				gender: "",
				country: "",
			})
		}
	}

	return (
		<>
			<Seo title="Support Zummit Africa" />
			<Appbar />
			<main>
				<div className="mx-auto mb-20 mt-40 max-w-xl p-6">
					<h1 className="mb-8 text-center text-3xl font-normal">
						Complete this form to proceed to your first month payment
					</h1>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<label htmlFor="fullName" className="text-gray-900 block text-sm font-medium">
								Full Name
							</label>
							<input
								type="text"
								id="fullName"
								name="full_name"
								value={formData.full_name}
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
							<label htmlFor="password" className="text-gray-900 block text-sm font-medium">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="Enter Password"
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
								name="phone_number"
								value={formData.phone_number}
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
								name="gender"
								value={formData.gender}
								onChange={handleChange}
								className="border-gray-300 w-full rounded-lg border px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#460D38]"
								required>
								<option value="">Select</option>
								<option value="MALE">Male</option>
								<option value="FEMALE">Female</option>
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
							disabled={loading}
							className={`w-full rounded-lg bg-[#460D38] py-3 text-white transition-colors duration-200 hover:bg-pink-950 disabled:cursor-not-allowed disabled:opacity-75`}>
							{loading ? "Please wait..." : "Register"}
						</button>
					</form>

					<a href="/login" className="mt-2 flex cursor-pointer justify-center underline">
						<p>Login here if you already registered</p>
					</a>
				</div>
			</main>
			<Footer />
		</>
	)
}
