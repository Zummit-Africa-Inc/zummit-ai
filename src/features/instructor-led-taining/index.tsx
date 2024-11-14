import React from "react"
import Link from "next/link"
import Image from "next/image"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { RiArrowDownLine } from "@remixicon/react"

export const InstructorLed = () => {
	return (
		<>
			<Seo title="Instructor-Led Training" />
			<Appbar />
			<main className="w-full">
				<div className="flex flex-col items-center overflow-hidden bg-slate-50 pl-2 pr-2 sm:p-0">
					<section className="relative mt-36 flex w-full max-w-[1200px] flex-col items-center justify-center rounded-2xl px-0 py-6  text-white max-md:max-w-full sm:mt-40 sm:min-h-[651px] sm:px-20 sm:py-32">
						<Image
							src="/image2.svg"
							alt="Hero background"
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							className=" rounded-2xl sm:max-h-full sm:pt-0"
						/>
						<div className="relative flex w-[908px] max-w-full flex-col max-md:mb-2.5">
							<div className="flex flex-col text-center max-md:max-w-full">
								<h1 className="max-w-[500px] self-center  px-3 text-3xl font-bold leading-[38px] tracking-tight sm:max-w-full sm:text-6xl sm:leading-[82px]">
									Instructor-Led Training
								</h1>
								<p className="mt-3 w-full max-w-full px-3 text-lg leading-7 tracking-wide">
									In the age of information, knowledge is power. AI and data skills are your keys.
									Don{"'"}t be left behind. Dive into the world of AI and data today
								</p>
							</div>
							<Link href="/" className="mt-8 self-center sm:mt-32  ">
								<Button size="lg" className="font-medium">
									Read more <RiArrowDownLine />
								</Button>
							</Link>
						</div>
					</section>
					<div className="relative mt-20 flex min-h-[648px] w-full flex-col items-center justify-start self-stretch rounded-none max-md:mt-10 max-md:max-w-full sm:justify-center">
						{/* This is where you are to work */}
						{/* This is where you are to work */}
						{/* This is where you are to work */}
						{/* This is where you are to work */}
					</div>
					<div className="mt-0 flex w-full flex-col items-center justify-center self-stretch overflow-hidden bg-neutral-900 px-20 py-14 max-md:max-w-full max-md:px-5 sm:mt-16">
						<div className="flex w-full max-w-[1200px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-50 px-20 py-12 max-md:max-w-full max-md:px-5">
							<div className="flex w-[722px] max-w-full flex-col items-center">
								<div className="flex max-w-full flex-wrap items-center justify-center gap-10 text-center text-green-950">
									<div className="flex w-fit shrink-0 grow basis-0 flex-col items-center max-md:max-w-full">
										<h2 className="text-2xl font-semibold max-md:max-w-full sm:text-4xl">
											Stay Ahead with the Latest in EdTech
										</h2>
										<p className="text-md mt-4 font-light max-md:max-w-full sm:text-lg">
											Get the latest in Artificial Intelligence, Machine Learning and Data Science
											trends and tips delivered monthly; straight to your inbox.
										</p>
									</div>
								</div>
								<div className="mt-2 flex w-[813px] max-w-full flex-wrap items-start gap-10 self-end">
									<div className="flex flex-auto flex-wrap items-end justify-center gap-8 self-start max-md:max-w-full">
										<div className="flex w-[482px] min-w-[240px] flex-col text-sm font-medium text-black max-md:max-w-full">
											<label htmlFor="email" className="hidden max-md:max-w-full sm:block">
												Email Address
											</label>
											<input
												type="email"
												id="email"
												placeholder="Enter your email"
												className="mt-2.5 flex min-h-[60px] w-full rounded-xl border border-solid border-black border-opacity-20 bg-zinc-300 bg-opacity-10 px-5 outline-none max-md:max-w-full"
											/>
										</div>
										<Button size="lg" className="py-8">
											Subscribe
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
