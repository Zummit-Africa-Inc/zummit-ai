import React from "react"
import Link from "next/link"
import Image from "next/image"
import { whyParticipateData, whatToExpectData } from "./data"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { RiArrowDownLine, RiCornerRightDownLine } from "@remixicon/react"

export const InstructorLed = () => {
	return (
		<>
			<Seo title="Instructor-Led Training" />
			<Appbar />
			<main className="w-full">
				<div className="flex flex-col items-center overflow-hidden bg-slate-50 pl-2 pr-2 sm:p-0">
					<section className="relative mt-36 flex w-full max-w-[1200px] flex-col items-center justify-center rounded-2xl px-0 py-6  text-white max-md:max-w-full sm:mt-40 sm:min-h-[651px] sm:px-20 sm:py-32">
						<Image
							src="/image1.png"
							alt="Hero background"
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							className=" rounded-2xl sm:max-h-full sm:pt-0"
						/>
						<div className="relative flex w-[908px] max-w-full flex-col max-md:mb-2.5">
							<div className="flex flex-col text-center max-md:max-w-full">
								<h1 className="max-w-[500px] self-center  px-3 text-3xl font-bold leading-[38px] tracking-tight sm:max-w-full sm:text-6xl sm:leading-[82px]">
									Ignite Your {<span className="text-pink-950">AI</span>} Genius: Zummit Africa &
									AAAI Hackathon
								</h1>
								<p className="mt-3 w-full max-w-full px-3 text-lg leading-7 tracking-wide">
									A Premier AI Event in Partnership with the Africa AI Conference
								</p>
							</div>
							<Link href="/" className="mt-8 self-center sm:mt-32  ">
								<Button size="lg" className="font-medium">
									Explore <RiArrowDownLine />
								</Button>
							</Link>
						</div>
					</section>
					<div className="bg-gray-50 mt-12 w-full max-w-[1200px] overflow-hidden rounded-2xl px-8 py-9 text-lg leading-7 tracking-wide text-black shadow-[0px_0px_35px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full max-md:px-5">
						Join the Zummit Africa & AAAI Hackathon, a premier AI event organized in partnership
						with the Africa AI Conference. Collaborate with like-minded individuals and showcase
						your AI skills to address Africa{"'"}s pressing challenges.
					</div>
					<div className="mt-12 flex w-[350px] max-w-full flex-col items-center justify-center overflow-hidden rounded-[1000px] bg-white px-12 py-2.5 text-xl font-medium leading-tight tracking-wide text-black max-md:mt-10 max-md:px-5 sm:text-2xl">
						<div className="flex items-center gap-3">
							<div className="my-auto ">Why Participate? </div>
							<div className="rounded-[1000px] bg-black p-2 text-white">
								<RiCornerRightDownLine />
							</div>
						</div>
					</div>
					<div className="mt-8 flex w-full max-w-[1200px] flex-col max-md:max-w-full">
						<div className="flex w-full flex-wrap items-center gap-10 max-md:max-w-full">
							{whyParticipateData.map((item, index) => (
								<div
									key={index}
									className="my-auto flex w-[451px] min-w-[240px] shrink grow self-stretch rounded-none max-md:max-w-full">
									<div className="z-0 my-auto -mr-8 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-pink-950 px-2 sm:h-16 sm:w-16 sm:px-4">
										<Image
											src={item.icon}
											alt=""
											width={32}
											height={32}
											className="object-contain"
										/>
									</div>
									<div className="bg-gray-50 flex w-fit shrink-0 grow basis-0 flex-col justify-center overflow-hidden rounded-2xl px-11 py-8 shadow-[0px_0px_35px_rgba(0,0,0,0.05)] max-md:max-w-full sm:px-16">
										<div className="flex flex-col px-2 max-md:max-w-full sm:px-0">
											<h3 className="text-2xl font-semibold leading-none text-pink-950 max-md:max-w-full">
												{item.title}
											</h3>
											<p className="mt-3 text-base font-medium leading-[25px] text-black max-md:max-w-full sm:leading-8">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="mt-12 flex w-[350px] max-w-full flex-col items-center justify-center overflow-hidden rounded-[1000px] bg-white px-12 py-2.5 text-xl font-medium leading-tight tracking-wide text-black max-md:mt-10 max-md:px-5 sm:text-2xl">
						<div className="flex items-center gap-3">
							<div className="my-auto ">What to Expect? </div>
							<div className="rounded-[1000px] bg-black p-2 text-white">
								<RiCornerRightDownLine />
							</div>
						</div>
					</div>
					<div className="mt-8 flex w-full max-w-[1200px] flex-col max-md:max-w-full">
						<div className="flex w-full flex-wrap items-center gap-10 max-md:max-w-full">
							{whatToExpectData.map((item, index) => (
								<div
									key={index}
									className=" flex w-[451px] min-w-[240px] shrink grow self-stretch rounded-none max-md:max-w-full">
									<div className="z-0 my-auto -mr-8 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-pink-950 px-2 sm:h-16 sm:w-16 sm:px-4">
										<Image
											src={item.icon}
											alt=""
											width={32}
											height={32}
											className="object-contain"
										/>
									</div>
									<div className="bg-gray-50 flex w-fit max-w-[555px] shrink-0 grow basis-0 flex-col justify-center overflow-hidden rounded-2xl px-11 py-8 shadow-[0px_0px_35px_rgba(0,0,0,0.05)] max-md:max-w-full sm:px-16">
										<div className="flex flex-col px-2 max-md:max-w-full sm:px-0">
											<h3 className="text-2xl font-semibold leading-none text-pink-950 max-md:max-w-full">
												{item.title}
											</h3>
											<p className="mt-3 text-base font-medium leading-[25px] text-black max-md:max-w-full sm:leading-8">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="bg-gray-50 mt-20 w-full max-w-[1200px] overflow-hidden rounded-2xl px-6 py-9 shadow-[0px_0px_35px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full max-md:pr-5">
						<div className="flex gap-5 max-md:flex-col">
							<div className="flex w-[79%] flex-col max-md:ml-0 max-md:w-full">
								<div className="flex grow flex-col text-center text-xl font-semibold leading-10 text-black max-md:mt-10 max-md:max-w-full sm:text-start sm:text-3xl">
									<div className="ml-3.5 mt-1 max-md:max-w-full">
										Dont miss this chance to be part of a groundbreaking AI event. Limited spots
										available!
									</div>
								</div>
							</div>
							<div className="ml-5 mt-1 flex w-[21%] flex-col max-md:ml-0 max-md:w-full">
								<Button size="lg" className=" py-10 text-2xl sm:p-0">
									Register now
								</Button>
							</div>
						</div>
					</div>
					<div className="relative mt-20 flex min-h-[648px] w-full flex-col items-center justify-start self-stretch rounded-none max-md:mt-10 max-md:max-w-full sm:justify-center">
						<h1 className="text-2xl font-bold text-[#460D38] sm:text-3xl">
							PARTNERS & SCHEDULE
						</h1>
						<Image
							src="/icons/schedule2.svg"
							alt="Zummit Schedule"
							layout="responsive"
							width={100}
							height={100}
							className="relative bottom-20 block sm:hidden"
						/>
						<Image
							src="/icons/schedule.svg"
							alt="Zummit Schedule"
							layout="responsive"
							width={100}
							height={100}
							className="hidden sm:block"
						/>
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
