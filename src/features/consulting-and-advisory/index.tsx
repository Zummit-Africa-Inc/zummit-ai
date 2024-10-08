import { RiArrowRightLine } from "@remixicon/react"
import Image from "next/image"
import { toast } from "sonner"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { gen_ai_strategies } from "./data"

export const Consulting = () => {
	const [email, setEmail] = React.useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!email) {
			toast.error("Please enter your email address")
			return
		}
	}

	return (
		<>
			<Seo title="Consulting & Advisory Services" />
			<Appbar />
			<main className="w-full">
				<section className="container mx-auto grid w-full place-items-center px-4 py-28 lg:px-0 lg:py-40">
					<div className="flex h-full w-full flex-col items-center justify-center lg:gap-[45px]">
						<h1 className="w-full text-center text-3xl font-bold leading-[44px] lg:w-[908px] lg:text-[56px] lg:leading-[82px]">
							Tailored <span className="font-bold text-primary-purple">AI</span> &{" "}
							<span className="font-bold text-primary-purple">Data</span> Solutions for Your
							Business
						</h1>
						<div className="flex w-full flex-col-reverse items-center gap-6 lg:flex-row lg:gap-[58px]">
							<div className="flex flex-1 flex-col items-center gap-5 lg:items-start lg:gap-[58px]">
								<div className="flex w-full flex-col gap-3 text-center lg:gap-9 lg:text-left">
									<p className="text-sm lg:text-base">
										Zummit Africa offers expert consulting and advisory services for companies
										looking to leverage AI, data science, and machine learning to solve complex
										challenges. Our team of experienced professionals works closely with you to
										develop custom solutions that drive innovation and growth.
									</p>
									<p className="text-sm lg:text-base">
										Whether you need help with data strategy, model development, or AI
										implementation, we&apos;re here to guide you every step of the way
									</p>
								</div>
								<Button className="w-fit" size="lg">
									Start Learning
									<RiArrowRightLine />
								</Button>
							</div>
							<div className="relative aspect-[1.6/1] w-full flex-1 rounded-[18px] border"></div>
						</div>
						<div className="container mx-auto flex items-center justify-center pt-[50px] lg:py-0">
							<div className="w-full rounded-[18px] bg-white px-5 py-4 shadow-lg lg:px-[37px] lg:py-8">
								<p className="text-center text-sm lg:text-base">
									Generative AI (GenAI) is suddenly on everyone&apos;s radar, but some
									organizations already have extensive experience and success in deploying AI
									techniques across multiple business units and processes. Gartner research shows
									these mature AI organizations represent just 10% of those currently experimenting
									with AI, but would-be GenAI adopters can learn a lot from them.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="container mx-auto flex flex-col items-center gap-[60px] px-4 pb-20 lg:gap-[110px] lg:px-0 lg:pb-[120px]">
					<div className="flex flex-col items-center gap-4 lg:w-[731px] lg:gap-12">
						<p className="font-semibold lg:text-[28px]">4 Pillars of Generative AI Strategy</p>
						<div className="flex w-full items-center justify-between">
							{gen_ai_strategies.map((item, index) => (
								<div key={index} className="flex w-fit flex-col items-center gap-3 lg:gap-4">
									<div className="grid size-12 place-items-center rounded-full bg-white lg:size-[74px]">
										<div className="relative size-6 lg:size-9">
											<Image src={item.image} alt={item.label} fill sizes="(max-width:1024px)100%" />
										</div>
									</div>
									<p className="text-center text-sm capitalize lg:text-2xl">{item.label}</p>
								</div>
							))}
						</div>
					</div>
					<div className="flex w-full flex-col items-center gap-5 lg:gap-8">
						<div className="grid h-[45px] w-[214px] place-items-center rounded-[18px] bg-white shadow-lg lg:h-[60px] lg:w-[334px]">
							<p className="font-medium lg:text-[22px]">Data Strategy</p>
						</div>
						<div className="w-full rounded-[18px] bg-white px-5 py-4 shadow-lg lg:px-[37px] lg:py-8">
							<p className="text-center text-sm lg:text-base">
								In practice, a data strategy is a structured plan that outlines how an
								organization will collect, manage, analyze, and leverage data to achieve its
								objectives. In a data strategy, one would expect to find processes, technologies,
								policies, ethics, and governance frameworks aimed at maximizing the value of data
								assets while ensuring data security and quality. Developing and implementing a
								data strategy often requires change management, and is typically a process that
								takes time to create meaningful results. In this guide, we will focus on how an
								organization begins this process, who is involved, and how to engage stakeholders.
							</p>
						</div>
					</div>
				</section>
				<section className="w-full bg-neutral-900 p-6 lg:py-[56px]">
					<div className="container mx-auto flex flex-col items-center gap-5 rounded-[18px] bg-white py-[22px] lg:gap-[50px] lg:py-[50px]">
						<div className="flex flex-col items-center gap-3 text-center">
							<p className="text-xl font-medium lg:text-4xl">
								Stay Ahead with the Latest in EdTech
							</p>
							<p className="text-sm lg:w-[700px] lg:text-lg">
								Get the latest in Artificial Intelligence, Machine Learning and Data Science
								trends and tips delivered monthly; straight to your inbox.
							</p>
						</div>
						<form onSubmit={handleSubmit} className="flex flex-col gap-8 lg:flex-row">
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email address"
								className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none transition-all duration-500 focus:border-neutral-900 lg:w-[482px]"
							/>
							<Button size="lg">Subscribe</Button>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
