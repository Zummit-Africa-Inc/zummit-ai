import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "sonner"
import Link from "next/link"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { useAuthContext } from "@/context/AuthContext"
import { CreateAdmin, LoginAdmin } from "@/queries/auth"
import { HttpError } from "@/types"

export const AdminAuth = ({ type }: { type: string }) => {
	const [values, setValues] = React.useState({
		full_name: "",
		email_or_phone_number: "",
		password: "",
		type: type,
	})

	const { loginAdmin } = useAuthContext()
	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleAuthRequest = async (payload: typeof values) => {
		const { full_name, email_or_phone_number, password, type } = payload

		const signupPayload = {
			full_name: full_name,
			email: email_or_phone_number,
			password: password,
		}

		if (type === "login") {
			return LoginAdmin(full_name, email_or_phone_number, password)
		}

		if (type === "signup") {
			return CreateAdmin(signupPayload)
		}

		throw new Error("Invalid type: Must be either 'login' or 'signup'")
	}

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: typeof values) => handleAuthRequest(payload),
		mutationKey: ["signup"],
		onSuccess: (data) => {
			const successMessage = type === "signup" ? "Signup successful" : "Login successful"
			loginAdmin(data.data)
			console.log(data.data)
			toast.success(successMessage)
			router.push("/admin/users")
		},
		onError: ({ response }: HttpError) => {
			const { message } = response.data
			toast.error(message ?? "Unable to create admin", {
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
				position: "top-right",
			})
		},
	})

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!values.email_or_phone_number || !values.password || !values.full_name) {
			toast.error("Please fill in all fields")
			return
		}
		mutateAsync(values)
	}

	return (
		<>
			<Seo title="Support Zummit Africa" />
			<Appbar />
			<main>
				<div className="mx-auto mb-20 mt-40 max-w-xl p-6">
					<h1 className="mb-8 text-center text-3xl font-normal">
						{type === "login" ? "Login in to access admin" : "Create an admin account"}
					</h1>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<label htmlFor="full_name" className="text-gray-900 block text-sm font-medium">
								Full name
							</label>
							<input
								name="full_name"
								value={values.full_name}
								onChange={handleChange}
								placeholder="Enter full name"
								className="border-gray-300 w-full rounded-lg border px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#460D38]"
								required
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="email" className="text-gray-900 block text-sm font-medium">
								Email Address
							</label>
							<input
								name="email_or_phone_number"
								value={values.email_or_phone_number}
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
								name="password"
								value={values.password}
								onChange={handleChange}
								placeholder="Enter Password"
								className="border-gray-300 w-full rounded-lg border px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#460D38]"
								required
							/>
						</div>

						<button
							type="submit"
							disabled={isPending}
							className={`w-full rounded-lg bg-[#460D38] py-3 text-white transition-colors duration-200 hover:bg-pink-950 disabled:cursor-not-allowed disabled:opacity-75`}>
							{isPending ? "Loading..." : type === "login" ? "Login" : "Sign up"}{" "}
						</button>
					</form>

					<Link
						href={type === "login" ? "/admin/signup" : "/admin"}
						className="mt-2 flex cursor-pointer justify-center underline">
						<p>
							{type === "login"
								? "Register here if you don't have an account"
								: "Login here if you have an account"}
						</p>
					</Link>
				</div>
			</main>
			<Footer />
		</>
	)
}
