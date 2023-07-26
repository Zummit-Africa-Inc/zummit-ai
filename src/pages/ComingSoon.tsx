import { useMutation } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"
import { useFormik } from "formik"
import axios from "axios"

import { useEventTracker, usePageTitle, useScrollToTop, usePageTracker } from "hooks"
import { Button, Footer, Navbar, PaddedBlock, Timer } from "components"

const ComingSoon = () => {
	const location = useLocation()

	const registerEvent = useEventTracker("cta")
	usePageTitle(location.pathname)
	usePageTracker()
	useScrollToTop()

	useMutation({
		mutationFn: (email: string) => axios.post(`${import.meta.env.VITE_API_URL}/`, {email}),
		mutationKey: ["newsltter subscription"],
		onSuccess: ({data}) => console.log(data),
		onError: (error) => console.log(error)
	})

	const { handleChange, handleSubmit } = useFormik({
		initialValues: { email: "" },
		onSubmit: (data) => {
			console.log(data)
			registerEvent("form submission", "subscription")
		},
	})

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="pt-118px] flex w-full flex-col items-center pt-[118px] pb-[264px]">
					<h1 className="text-7xl font-bold text-ash-300">
						Coming <span className="text-secondary-200">Soon</span>
					</h1>
          <div className="my-[23px]">
            <Timer deadline="September, 01, 2023" />
          </div>
					<p className="font-work text-xl text-ash-200">
						Get notified when our {location.pathname.substring(1)} goes live.
					</p>
					<form
						onSubmit={handleSubmit}
						className="mt-[43px] flex w-[421px] items-center rounded-lg border border-[#949494] p-1 pl-5">
						<input
							type="email"
							id="email"
							onChange={handleChange}
							className="w-full"
							placeholder="Enter your email"
						/>
						<Button
							label="Subscribe"
							type="submit"
							className="bg-primary px-6 py-3 text-white"
						/>
					</form>
				</section>
				<section className="flex w-full flex-col items-center mb-[83px]">
					<div className="flex w-full flex-col items-center justify-center rounded-lg border border-ash-200 py-10">
						<h2 className="text-[32px] font-bold text-secondary-200">
							Let's Connect{" "}
							<span className="text-primary">and Bring your ideas to life</span>
						</h2>
						<p className="mb-[32px] mt-[15px] font-work text-ash-200">
							Click the button below to chat, book a meeting, or call our team
							directly.
						</p>
						<Button
							label="Talk to us"
							to="/contact-us"
							className="bg-primary text-white"
						/>
					</div>
				</section>
			</PaddedBlock>
			<Footer />
		</>
	)
}

export default ComingSoon
