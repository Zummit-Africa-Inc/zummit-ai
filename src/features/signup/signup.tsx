import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "sonner"
import Link from "next/link"
import React from "react"

import { CreateUser, CreateUserPayload } from "@/queries/auth"
import { Appbar, Footer, Seo } from "@/components/shared"
import { useAuthContext } from "@/context/AuthContext"
import { HttpError } from "@/types"
import { countries } from "./data"

export const Signup: React.FC = () => {
	const { loginUser } = useAuthContext()
	const router = useRouter()

	const [values, setValues] = React.useState<CreateUserPayload>({
		country: "",
		email: "",
		full_name: "",
		gender: "",
		password: "",
		phone_number: "",
	})

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: CreateUserPayload) => CreateUser(payload),
		onSuccess: (data) => {
			loginUser(data.data)
			toast.success("Account created successfully")
			router.push("/instructor-led-training#payment")
		},
		onError: ({ response }: HttpError) => {
			const { message } = response.data
			toast.error(message ?? "Unable to create account")
		},
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		Object.entries(values).forEach(([key, value]) => {
			if (!value) {
				toast.error(`Please fill in ${key}`)
				return
			}
		})
		mutateAsync(values)
	}

	return (
		<>
			<Seo title="Support Zummit Africa" />
			<Appbar />
			<main>
				<div className="mx-auto mb-20 mt-40 max-w-xl p-6">
					<h1 className="mb-8 text-center text-3xl font-normal">
						Complete this form to proceed to your first payment
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
								value={values.full_name}
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
								value={values.email}
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
								value={values.password}
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
								value={values.phone_number}
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
								value={values.gender}
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
								value={values.country}
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
							disabled={isPending}
							className={`w-full rounded-lg bg-[#460D38] py-3 text-white transition-colors duration-200 hover:bg-pink-950 disabled:cursor-not-allowed disabled:opacity-75`}>
							{isPending ? "Please wait..." : "Register"}
						</button>
					</form>

					<Link href="/login" className="mt-2 flex cursor-pointer justify-center underline">
						<p>Login here if you already registered</p>
					</Link>
				</div>
			</main>
			<Footer />
		</>
	)
}
