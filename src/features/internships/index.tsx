import { RiArrowRightLine } from "@remixicon/react"
import { toast } from "sonner"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Internships = () => {
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
			<Seo title="internships" />
			<Appbar />
			<main className="w-full">
				<section className="container mx-auto grid w-full place-items-center px-4 py-28 lg:px-0 lg:py-40">
					<div className="flex h-full w-full flex-col items-center justify-center lg:gap-[45px]">
						<h1 className="w-full text-center text-3xl font-bold leading-[44px] lg:w-[908px] lg:text-[56px] lg:leading-[82px]">
							Build Your Future with Zummit{" "}
							<span className="font-bold text-primary-purple">Internships</span>
						</h1>
						<div className="flex w-full flex-col-reverse items-center gap-6 lg:flex-row lg:gap-[58px]">
							<div className="flex flex-1 flex-col items-center gap-5 lg:items-start lg:gap-[58px]">
								<div className="flex w-full flex-col gap-3 text-center lg:gap-9 lg:text-left">
									<p className="text-sm lg:text-base">
										Our internship programs are designed for students and early-career professionals
										who want to gain practical experience in AI, data science, and machine learning.
										Work on real projects, build a portfolio of capstone work, and get the support
										you need to succeed in the competitive tech industry.
									</p>
									<p className="text-sm lg:text-base">
										Whether you&apos;re looking to land your first job or start a tech venture, our
										internships provide the hands-on experience you need to stand out.
									</p>
								</div>
								<Link href="/contact">
									<Button className="w-fit" size="lg">
										Apply for an internship
										<RiArrowRightLine />
									</Button>
								</Link>
							</div>
							<div className="relative aspect-[1.6/1] w-full flex-1 rounded-[18px]">
								<Image
									src="/assets/images/internship.svg"
									alt="hero"
									fill
									sizes="(max-width: 1024px)100%"
									className="object-contain"
								/>
							</div>
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
