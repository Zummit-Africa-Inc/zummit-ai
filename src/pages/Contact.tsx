import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"

import { Button, Footer, Input, Navbar, Spinner } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import { customre_care} from "assets/images"
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
  usePageTitle("Contact Us")
  useScrollToTop()

  const {isLoading} = useMutation({})

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: contactFormSchema,
		onSubmit: (data) => console.log(data),
	})

	return (
		<>
			<Navbar />
			<section className="flex w-full flex-col px-2 py-[99px] md:px-[120px]">
				<p className="font-medium uppercase text-gray-400">get in touch with us</p>
				<p className="mb-6 mt-[10px] text-[32px] font-bold text-[#333]">
					Leo nec mauris{" "}
					<span className="text-secondary">
						aenean sed <br /> sit posuere
					</span>
					volutpat nisl.
				</p>
				<p className="w-1/2 font-work text-xl text-gray-300">
					Send in your inquiries and feedback and be sure we will respond as soon as
					possible.
				</p>
				<div className="mt-[98px] flex h-[551px] w-full items-center gap-[137px]">
					<div className="grid h-full w-[466px] place-items-center rounded-[11px] bg-[#FBC93D]">
						<img src={customre_care} alt="" className="h-[450px] w-[347px]" />
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
						<div className="h-[72px] w-[302px] rounded-[3px] border border-gray-400 bg-gray-100"></div>
						<Button
							label={isLoading ? <Spinner /> : "Send Message"}
							type="submit"
							className="h-[42px] w-[152px] bg-primary text-white"
              disabled={isLoading}
						/>
					</form>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Contact
