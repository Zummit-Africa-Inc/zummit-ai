import { useState, ChangeEvent, FormEvent, useContext } from "react"
import { Appbar, Footer, Seo } from "@/components/shared"
import { toast } from "sonner"
import Link from "next/link"
import { AuthContext } from "@/context/AuthContext"

interface FormData {
	email: string
	password: string
}
export const Login = () => {
	const [loading, setLoading] = useState(false)
	const { loginUser } = useContext(AuthContext)

	const [formData, setFormData] = useState<FormData>({
		email: "",
		password: "",
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setLoading(true)
		e.preventDefault()
		try {
			const results = await loginUser({ email: "test34@gmail.com", password: "qwertyuio" })
			console.log(results)
			setLoading(false)
			toast(results?.data.message, {
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
				position: "top-right",
			})
		} catch (error: any) {
			console.log(error)
			toast.error("unable to login user", {
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
				position: "top-right",
			})
		} finally {
			setLoading(false)
			setFormData({
				email: "",
				password: "",
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
						Login in to access the training or proceed to payment
					</h1>

					<form onSubmit={handleSubmit} className="space-y-6">
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

						<button
							type="submit"
							disabled={loading}
							className={`w-full rounded-lg bg-[#460D38] py-3 text-white transition-colors duration-200 hover:bg-pink-950 disabled:cursor-not-allowed disabled:opacity-75`}>
							{loading ? "Please wait..." : "Login"}
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
