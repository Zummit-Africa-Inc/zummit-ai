import { useMutation } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"
import { useFormik } from "formik"
import axios from "axios"

import {
	useEventTracker,
	usePageTitle,
	useScrollToTop,
	usePageTracker,
} from "hooks"
import { Button, Footer, Navbar, PaddedBlock, Timer } from "components"

const ComingSoon = () => {
	const location = useLocation()

	const registerEvent = useEventTracker("cta")
	usePageTitle(location.pathname)
	usePageTracker()
	useScrollToTop()

	useMutation({
		mutationFn: (email: string) =>
			axios.post(`${import.meta.env.VITE_API_URL}/`, { email }),
		mutationKey: ["newsltter subscription"],
		onSuccess: ({ data }) => console.log(data),
		onError: (error) => console.log(error),
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
				<section className="pt-118px] flex w-full flex-col items-center pb-28 pt-28 md:pb-[264px] md:pt-[118px]">
					<h1 className="text-4xl font-bold text-ash-300 md:text-7xl">
						Coming <span className="text-secondary-200">Soon</span>
					</h1>
					<div className="my-[23px]">
						<Timer deadline="September, 01, 2023" />
					</div>
					<p className="font-work text-base text-ash-200 md:text-xl">
						Get notified when our {location.pathname.substring(1)} goes live.
					</p>
					<form
						onSubmit={handleSubmit}
						className="mt-[43px] flex w-full items-center rounded-lg border border-[#949494] p-1 pl-5 md:w-[421px]">
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
				<section className="flex w-full flex-col items-center py-[99px]">
					<div className="flex w-full flex-col items-center justify-center rounded-lg border border-ash-200 py-10">
						<h3 className="text-center text-2xl font-bold text-secondary-200 md:text-[32px]">
							Let's Connect{" "}
							<span className="text-primary">and Bring your ideas to life</span>
						</h3>
						<p className="mb-[32px] mt-[15px] text-center font-work text-sm text-ash-200 md:text-base">
							Click the button below to chat, book a meeting, or call our team
							directly.
						</p>
						<Button
							label="Talk to us"
							to="/contact-us"
							onClick={() => registerEvent("click", "contact us")}
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
