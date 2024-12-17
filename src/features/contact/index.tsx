import { useFormik } from "formik"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { contacts } from "./data"

const initialValues = {
	name: "",
	email: "",
	message: "",
}

export const Contact = () => {
	const { handleSubmit, handleChange } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log(values)
		},
	})
	return (
		<>
			<Seo title="Contact Us" />
			<Appbar />
			<main className="w-full px-4 py-36 lg:px-0">
				<section className="container mx-auto flex flex-col items-center gap-9 rounded-2xl bg-white px-4 py-4 shadow-xl lg:flex-row lg:gap-20 lg:px-16 lg:py-14">
					<div className="flex w-full flex-col gap-12 lg:w-[574px]">
						<div className="flex w-full flex-col gap-6">
							<p className="text-xl font-semibold lg:text-[44px]">Let&apos;s have a chat</p>
							<p className="text-xs lg:text-lg">
								Do you have an idea, or you want to make an inquiry or you just want to
								collaborate with us? Feel free to reach out, we are happy to hear from you.
							</p>
						</div>
						<div className="flex w-full flex-col gap-9">
							{contacts.map((contact, index) => (
								<div key={index} className="flex flex-col gap-3">
									<p className="text-base font-semibold lg:text-xl">{contact.label}</p>
									<div className="flex flex-col gap-2">
										{contact.links.map((link, index) => (
											<a
												key={index}
												href={link.href}
												target="_blank"
												className="text-primary link text-sm lg:text-lg">
												{link.name}
											</a>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-full lg:w-[418px]">
						<form onSubmit={handleSubmit} className="flex w-full flex-col gap-9">
							<div className="flex w-full flex-col gap-6">
								<Input label="Name" name="name" onChange={handleChange} required />
								<Input label="Email" name="email" onChange={handleChange} required />
								<Textarea label="Message" name="message" onChange={handleChange} required />
							</div>
							<Button type="submit" size="lg">
								Submit
							</Button>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
