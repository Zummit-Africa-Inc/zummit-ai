import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { toast } from "sonner"
import Link from "next/link"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { useAuthContext } from "@/context/AuthContext"
import { LoginUser } from "@/queries/auth"
import { HttpError } from "@/types"

export const Login = () => {
	const [values, setValues] = React.useState({ email_or_phone_number: "", password: "" })
	const { loginUser } = useAuthContext()
	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: typeof values) =>
			LoginUser(payload.email_or_phone_number, payload.password),
		mutationKey: ["login"],
		onSuccess: (data) => {
			loginUser(data.data)
			toast.success("Login Successful")
			router.push("/instructor-led-training#payment")
		},
		onError: ({ response }: HttpError) => {
			const { message } = response.data
			toast.error(message ?? "Unable to login user", {
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
		if (!values.email_or_phone_number || !values.password) {
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
						Login in to access the training or proceed to payment
					</h1>

					<form onSubmit={handleSubmit} className="space-y-6">
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
							{isPending ? "Please wait..." : "Login"}
						</button>
					</form>

					<Link href="/signup" className="mt-2 flex cursor-pointer justify-center underline">
						<p>Register here if you don{"'"}t have an account</p>
					</Link>
				</div>
			</main>
			<Footer />
		</>
	)
}
