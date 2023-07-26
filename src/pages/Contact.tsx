import { useMutation } from "@tanstack/react-query"
// import ReCAPTCHA from "react-google-recaptcha"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useFormik } from "formik"
import axios from "axios"

import {
	useEventTracker,
	usePageTitle,
	usePageTracker,
	useScrollToTop,
} from "hooks"
import { Button, Footer, Input, Navbar, PaddedBlock, Spinner } from "components"
import { customre_care } from "assets/images"
import { ContactFormDto } from "interfaces"
import { contactFormSchema } from "utils"

const initialValues: ContactFormDto = {
	email: "",
	fullName: "",
	message: "",
	phone: "",
	subject: "",
}

const Contact = () => {
	const registerEvent = useEventTracker("cta")
	const navigate = useNavigate()
	usePageTitle("Contact Us")
	usePageTracker()
	useScrollToTop()

	const { isLoading, mutateAsync } = useMutation({
		mutationFn: (payload: ContactFormDto) => {
			return axios.post(`${import.meta.env.VITE_API_URL}/contact`, payload)
		},
		mutationKey: ["submit contact form"],
		onSuccess: ({ data }) => {
			toast.success(data.message)
			navigate("/")
		},
		onError: (error) => console.log(error),
	})

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: contactFormSchema,
		onSubmit: (data) => {
			mutateAsync(data)
			registerEvent("form submission", "contact form")
		},
	})

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col py-[99px]">
					<p className="font-medium uppercase text-ash-200">get in touch with us</p>
					<h1 className="mb-6 mt-[10px] text-[32px] font-bold text-ash-300">
						Let&apos;s Create{" "}
						<span className="text-secondary-200">
							Extraordinary <br /> Solutions{" "}
						</span>{" "}
						together.
					</h1>
					<h5 className="w-1/2 font-work text-xl text-ash-200">
						Send in your inquiries and feedback and be sure we will respond as soon as
						possible.
					</h5>
					<div className="mt-[98px] flex h-[551px] w-full items-center gap-[137px]">
						<div className="grid h-full w-[466px] place-items-center rounded-[11px] bg-[#FBC93D]">
							<img
								src={customre_care}
								alt="customer care agent"
								className="h-[450px] w-[347px]"
							/>
						</div>
						<form onSubmit={handleSubmit} className="flex h-full flex-col gap-5">
							<div className="flex items-center gap-[21px]">
								<Input
									element="input"
									label="Full Name"
									id="fullName"
									type="text"
									onChange={handleChange}
									error={errors.fullName}
								/>
								<Input
									element="input"
									label="Email"
									id="email"
									type="email"
									onChange={handleChange}
									error={errors.email}
								/>
							</div>
							<div className="flex items-center gap-[21px]">
								<Input
									element="input"
									label="Phone"
									id="phone"
									type="text"
									onChange={handleChange}
									error={errors.phone}
								/>
								<Input
									element="input"
									label="Subject"
									id="subject"
									type="text"
									onChange={handleChange}
									error={errors.subject}
								/>
							</div>
							<Input
								element="textarea"
								label="Message"
								id="message"
								onChange={handleChange}
								error={errors.message}
							/>
							{/* <ReCAPTCHA sitekey="" onChange={(e) => console.log(e)} /> */}
							<Button
								label={isLoading ? <Spinner /> : "Send Message"}
								type="submit"
								className="h-[42px] w-[152px] bg-primary text-white"
								disabled={isLoading}
							/>
						</form>
					</div>
				</section>
			</PaddedBlock>
			<Footer />
		</>
	)
}

export default Contact
