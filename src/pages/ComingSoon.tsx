import { useFormik } from "formik"

import { Button, Footer, Navbar, PaddedBlock, Timer } from "components"
import { usePageTitle, useScrollToTop } from "hooks"

const ComingSoon = () => {
	usePageTitle("Internship")
	useScrollToTop()

	const { handleChange, handleSubmit } = useFormik({
		initialValues: { email: "" },
		onSubmit: (data) => console.log(data),
	})

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="pt-118px] flex w-full flex-col items-center pt-[118px] pb-[264px]">
					<p className="text-7xl font-bold text-[#333]">
						Coming <span className="text-secondary">Soon</span>
					</p>
          <div className="my-[23px]">
            <Timer deadline="September, 01, 2023" />
          </div>
					<p className="font-work text-xl text-gray-400">
						Get notified when our blog goes live.
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
					<div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-300 py-10">
						<p className="text-[32px] font-bold text-secondary">
							Let's Connect{" "}
							<span className="text-primary">and Bring your ideas to life</span>
						</p>
						<p className="mb-[32px] mt-[15px] font-work text-gray-400">
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
