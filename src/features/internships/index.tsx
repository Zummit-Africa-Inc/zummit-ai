import { RiArrowRightLine } from "@remixicon/react"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"

export const Internships = () => {
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
								<Button className="w-fit" size="lg">
									Apply for an internship
									<RiArrowRightLine />
								</Button>
							</div>
							<div className="relative aspect-[1.6/1] w-full flex-1 rounded-[18px] border"></div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
