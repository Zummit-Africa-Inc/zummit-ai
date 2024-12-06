import React, { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Appbar, Footer, Seo } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { faqItems, testimonials, pricingPlans, valueProps, courseModules } from "./data"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { RiArrowDownSLine } from "@remixicon/react"

export const InstructorLed = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const containerRef = useRef<HTMLDivElement | null>(null)

	return (
		<>
			<Seo title="Instructor-Led Training" />
			<Appbar />
			<main className="w-full ">
				<div className="flex flex-col items-center overflow-hidden bg-slate-50 pl-2 pr-2 sm:p-0">
					<section className=" bg-white pt-24">
						<div className=" relative z-0 h-[900px] w-screen">
							<Image
								src="/stuff.svg"
								alt="AI Training Illustration"
								layout="fill"
								objectFit="cover"
								className="hidden lg:block"
							/>
							<Image
								src="/stuff2.svg"
								alt="AI Training Illustration"
								layout="fill"
								objectFit="cover"
								className="lg:hidden"
							/>
							<div className="absolute left-4 top-10 z-20 max-w-4xl md:top-24 lg:left-40">
								<span className="font-semibold uppercase tracking-wide text-pink-950">
									Instructor-Led Training
								</span>
								<h1 className="mt-0 text-4xl font-bold leading-[49px] md:mt-8 md:text-6xl lg:leading-[82px]">
									Kickstart Your Career and Master In-Demand{" "}
									<span className="italic text-fuchsia-950">AI & Data</span> Skills in Just 3
									Months!
								</h1>
								<p className="mt-4 max-w-[400px] text-lg  leading-relaxed  md:mt-8 md:max-w-3xl md:text-2xl">
									Designed for beginners, this course will help you master essential AI and Data
									Science skills and give you the confidence to launch your career in tech in 2025.
								</p>
								<Link href="#payment">
									<Button size="lg" className="mt-4 font-semibold md:mt-12">
										ENROLL NOW
									</Button>
								</Link>
							</div>
						</div>
					</section>
					<section className="w-screen bg-[#EDEDFA] py-20">
						<div className="mx-auto flex max-w-7xl flex-col px-8">
							<div className="mb-16 flex flex-col items-center justify-center text-center">
								<span className="font-semibold uppercase tracking-wide text-pink-950">value</span>
								<h2 className="mt-5 text-4xl font-bold md:text-5xl">Why Enroll With Us?</h2>
								<p className="mt-5 max-w-[600px] text-lg  md:text-xl">
									Affordable, flexible, and career-focused training that equips you with the skills
									employers are looking for.
								</p>
							</div>
							<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
								{valueProps.map((prop, index) => (
									<div
										key={index}
										className="my-auto flex min-w-[240px] flex-1 shrink basis-0 flex-col self-stretch">
										<Image
											loading="lazy"
											src={prop.icon}
											width={100}
											height={100}
											alt=""
											className="aspect-square w-9 object-contain"
											aria-hidden="true"
										/>
										<h3 className="mt-5 text-3xl font-semibold leading-none tracking-normal">
											{prop.title}
										</h3>
										<p className="mt-5 text-lg leading-9 tracking-tight">{prop.description}</p>
									</div>
								))}
							</div>
							<Link href="#payment" className="self-center">
								<Button size="lg" className="mt-12 w-48 self-center font-semibold ">
									ENROLL NOW
								</Button>
							</Link>
						</div>
					</section>
					<section className="w-screen bg-[#460D38] py-32 text-white">
						<div className="mx-auto max-w-7xl px-8">
							<div className="grid grid-cols-1 gap-16 md:grid-cols-2">
								<Image
									src="/course.svg"
									width={1000}
									height={700}
									alt="Course Preview"
									className="rounded-3xl"
								/>
								<div>
									<span className="md:text-md text-sm font-semibold uppercase tracking-wide">
										What{"'"}s included in the course
									</span>
									<h2 className="mt-4 text-4xl font-bold md:text-3xl lg:text-5xl">
										Course Overview
									</h2>
									<div className="mt-8">
										{courseModules.map((module, index) => (
											<Accordion
												key={index}
												sx={{
													fontFamily: "Inter, sans-serif",
													"& .MuiAccordionSummary-content": {
														fontFamily: "Inter, sans-serif",
													},
													"& .MuiAccordionDetails-root": {
														fontFamily: "Inter, sans-serif",
													},
												}}
												className=" border-t bg-[#460D38] text-white">
												<AccordionSummary
													expandIcon={<RiArrowDownSLine className="text-white" />}
													aria-controls="panel1-content"
													id="panel1-header"
													className="font-bold">
													{module.title}
												</AccordionSummary>
												{module.body && (
													<AccordionDetails className="tracking-tight">{module.body}</AccordionDetails>
												)}
												<AccordionDetails className=" text-sm tracking-normal">
													{module.list.map((item, index) => (
														<ul key={index}>
															<li>{item}</li>
														</ul>
													))}
												</AccordionDetails>
											</Accordion>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="flex w-screen flex-col items-center bg-[#EDEDFA] py-20">
						<div className="mx-auto flex max-w-7xl flex-col px-8">
							<div className="mb-10 flex flex-col items-center justify-center text-center">
								<span className="font-semibold uppercase tracking-wide text-pink-950">
									Testimonials
								</span>
								<h2 className="mt-5 text-4xl font-bold sm:text-5xl">Graduate Success Stories</h2>
								<p className="mt-5 max-w-[600px] text-xl">
									Join a Thriving Community of Successful Graduates!
								</p>
							</div>
						</div>
						<section className="mx-auto w-screen px-4 sm:max-w-7xl ">
							<div className="relative overflow-x-scroll">
								{/* Carousel Container */}
								<div
									ref={containerRef}
									className="flex overflow-x-scroll transition-transform duration-500 ease-in-out"
									style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
									{testimonials.map((testimonial) => (
										<div
											key={testimonial.id}
											className="w-full flex-none overflow-scroll px-2 sm:px-4 md:w-1/2 lg:w-1/4">
											<div className="h-[590px] overflow-y-scroll rounded-2xl bg-[#301030] p-6">
												<Image
													src={testimonial.image}
													layout="responsive"
													width={100}
													height={100}
													alt={testimonial.name}
													className="mb-6 h-48 w-full rounded-xl object-cover"
												/>
												<p className="mb-6 text-center leading-relaxed text-white">
													{testimonial.text}
												</p>
												<h3 className="mb-2 text-center text-xl font-bold text-white">
													{testimonial.name}
												</h3>
												<h3 className="text-center text-white">{testimonial.position}</h3>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>
						<Link href="#payment" className="self-center">
							<Button size="lg" className="mt-12 w-48 self-center font-semibold ">
								ENROLL NOW
							</Button>
						</Link>
					</section>
					<section className="flex w-screen flex-col items-center py-20" id="payment">
						<div className="mx-auto flex max-w-7xl flex-col px-8">
							<div className="mb-16 flex flex-col items-center justify-center text-center">
								<span className="font-semibold uppercase tracking-wide text-pink-950">
									JOIN US NOW
								</span>
								<h2 className="mt-5 text-4xl font-bold md:text-5xl">Flexible Payment Options</h2>
								<p className="mt-5 max-w-[600px] text-lg md:text-xl">
									Our Affordable Plans Puts Everyone Into Consideration
								</p>
							</div>
						</div>
						<section className="bg-slate-50 py-2">
							<div className="mx-auto max-w-7xl px-8">
								<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
									{pricingPlans.map((plan, index) => (
										<div
											key={index}
											className="my-auto flex w-[483px] min-w-[240px] flex-col items-center self-stretch rounded-3xl bg-[#EDEDFA] px-10 py-16 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full max-md:px-5">
											<div className="flex w-full flex-col text-black">
												<h3 className="text-3xl font-semibold leading-none tracking-normal">
													{plan.title}
												</h3>
												<p className="mt-8 text-xl leading-8 tracking-normal">{plan.description}</p>
											</div>
											<ul className="mt-6 flex w-full max-w-[393px] flex-col items-start self-center text-xl tracking-normal text-black max-md:mt-10">
												{plan.features.map((feature, index) => (
													<li key={index} className="mt-5 flex max-w-full gap-4">
														<Image
															src="/icons/check.svg"
															alt=""
															width={100}
															height={100}
															className="aspect-square w-[30px] shrink-0 object-contain"
															aria-hidden="true"
														/>
														<span className="my-auto flex-auto">{feature}</span>
													</li>
												))}
											</ul>
											<div className="mt-12 flex w-full flex-col rounded-xl border border-solid border-pink-950 pt-2.5 text-center font-semibold max-md:mt-10">
												{plan.originalPrice && (
													<div className="text-2xl leading-none tracking-normal text-black text-opacity-40 line-through sm:text-3xl">
														{plan.originalPrice}
													</div>
												)}
												<div className="mt-3 text-3xl leading-none tracking-normal text-black sm:text-4xl ">
													{plan.price}
												</div>
												<div className="mt-5 w-full flex-1 shrink gap-2.5 self-stretch rounded-bl-xl rounded-br-xl bg-[#460D38] py-1.5 text-xl tracking-normal text-white">
													NO HIDDEN FEES
												</div>
											</div>
											{plan.price === "₦60,000" ? (
												<Link href="/registration-one-time">
													<button className=" mt-12 gap-2.5 rounded-xl bg-[#460D38]  px-8 py-3  text-lg font-semibold uppercase text-white sm:px-10 sm:py-5">
														{plan.ctaText}
													</button>
												</Link>
											) : (
												<Link href="/login">
													<button className=" mt-12 gap-2.5 rounded-xl bg-[#460D38]  px-8 py-3  text-lg font-semibold uppercase text-white sm:px-10 sm:py-5">
														{plan.ctaText}
													</button>
												</Link>
											)}

											{plan.isPopular && (
												<span className="mt-1.5 text-center text-base font-medium italic leading-loose tracking-normal text-pink-950">
													Classes start January 2025
												</span>
											)}
											{plan.save && (
												<div className="absolute items-center">
													<Button
														size="lg"
														className="relative bottom-[90px] mx-auto items-center font-semibold text-white md:bottom-[90px]  ">
														SAVE 20%
													</Button>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</section>
					</section>
					<section className="flex w-screen flex-col items-center bg-[#EDEDFA] py-20">
						<div className="mx-auto flex max-w-7xl flex-col px-8">
							<div className="mb-10 flex flex-col items-center justify-center text-center">
								<span className="font-semibold uppercase tracking-wide text-pink-950">
									got questions?
								</span>
								<h2 className="mt-5 text-4xl font-bold sm:text-5xl">
									Frequently Asked Questions
								</h2>
							</div>
						</div>
						<div>
							{faqItems.map((items, index) => (
								<Accordion
									key={index}
									sx={{
										fontFamily: "Inter, sans-serif",
										"& .MuiAccordionSummary-content": {
											fontFamily: "Inter, sans-serif",
										},
										"& .MuiAccordionDetails-root": {
											fontFamily: "Inter, sans-serif",
										},
									}}
									className=" min-w-[300px] border-t bg-[#EDEDFA] lg:min-w-[700px] ">
									<AccordionSummary
										expandIcon={<RiArrowDownSLine className="" />}
										aria-controls="panel1-content"
										id="panel1-header"
										className="font-bold">
										{items.question}
									</AccordionSummary>
									<AccordionDetails className="max-w-[800px]">{items.answer}</AccordionDetails>
								</Accordion>
							))}
						</div>
					</section>

					<section className="flex w-screen flex-col items-center bg-[#460D38] py-32 text-center text-white">
						<div className="mx-auto max-w-5xl px-8">
							<h2 className="text-4xl font-bold">Ready to Begin Your AI and Data Career?</h2>
							<p className="mt-8 max-w-3xl text-xl">
								Join the January 2025 cohort and learn from expert instructors. Enroll now and
								unlock your career potential in AI and Data Science!
							</p>
							<Link href="#payment">
								<button className="hover:bg-gray-100 mt-12 rounded-xl bg-white px-8 py-3 text-xl font-semibold uppercase text-pink-950 sm:px-10 sm:py-5">
									Enroll Now
								</button>
							</Link>
							<p className="mt-4 text-sm italic tracking-wide">
								Secure Your Spot Before January 2025!
							</p>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	)
}
