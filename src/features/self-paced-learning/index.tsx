import { RiArrowRightLine } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"

export const SelfPaced = () => {
	return (
		<>
			<Seo title="Self-paced Learning" />
			<Appbar />
			<main className="w-full px-4 lg:px-0">
				<section className="container mx-auto grid w-full place-items-center px-4 py-16 pt-28 lg:px-0 lg:py-40">
					<div className="image-bg flex h-full w-full flex-col items-center justify-center lg:gap-[45px]">
						<h1 className="w-full text-center text-3xl font-bold leading-[44px] lg:w-[908px] lg:text-[56px] lg:leading-[82px]">
							Learn at Your Own Pace with{" "}
							<span className="font-bold text-primary-purple">Datarango</span>
						</h1>
						<div className="flex w-full flex-col-reverse items-center gap-6 lg:flex-row lg:gap-[58px]">
							<div className="flex flex-1 flex-col items-center gap-5 lg:items-start lg:gap-[58px]">
								<div className="flex w-full flex-col gap-3 text-center lg:gap-9 lg:text-left">
									<p className="text-sm lg:text-base">
										DataRango is our innovative app designed to teach AI, data science, and machine
										learning through interactive, self-paced courses. Solve real-world problems,
										test your knowledge with trivia questions, and climb the ranks in a gamified
										learning environment.
									</p>
									<p className="text-sm lg:text-base">
										Whether you&apos;re a beginner or an experienced professional, DataRango offers
										a personalized learning journey to help you master the skills that matter in
										today&apos;s tech landscape.
									</p>
								</div>
								<Link href="https://datarango.com">
									<Button className="z-10 w-fit" size="lg">
										Start Learning <RiArrowRightLine />
									</Button>
								</Link>
							</div>
							<div className="relative flex aspect-[1.4/1] w-full flex-1 flex-col">
								<Image
									src="/assets/images/self-paced.svg"
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
							<p className="text-xl font-semibold lg:max-w-[882px] lg:text-4xl">
								Partner with us to organize Hackathon and discover top talent in AI and Data
								Science
							</p>
						</div>
						<Link href="/contact">
							<Button size="lg">Join us</Button>
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
