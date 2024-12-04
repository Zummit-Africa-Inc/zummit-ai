import { RiArrowRightLine } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { about, content, counts } from "./data"
import { Button } from "@/components/ui/button"

export const Home = () => {
	return (
		<>
			<Seo
				title="Empowering Africa through AI"
				description="Discover the power of Zummit - your gateway to a transformative learning experience."
			/>
			<Appbar />
			<main className="w-screen">
				<div className="grid h-screen w-full bg-lines bg-center bg-no-repeat">
					<div className="container mx-auto flex h-full flex-col items-center justify-center gap-3 text-center">
						<h1 className="w-full text-3xl font-bold leading-[44px] lg:w-[908px] lg:text-[56px] lg:leading-[82px]">
							Empowering the Next Generation of <span className="text-primary-purple">AI</span> &{" "}
							<span className="text-primary-purple">Data Science</span> Leaders
						</h1>
						<p className="w-full text-sm text-neutral-500 lg:w-[757px] lg:text-xl">
							At Zummit Africa, we provide cutting-edge education, innovative solutions, and
							hands-on experience in AI, data science, and machine learning.
						</p>
						<Link href="/instructor-led-training" className="mt-[89px]">
							<Button size="lg">Explore Our Programs</Button>
						</Link>
					</div>
				</div>
				<section className="w-full bg-neutral-900 px-4 lg:px-0">
					<div className="container mx-auto flex flex-col items-center gap-[46px] pb-32 pt-10 lg:gap-[85px] lg:pb-40 lg:pt-20">
						<div className="flex flex-col items-center text-center">
							<p className="font-semibold text-white lg:text-2xl">ABOUT US</p>
							<p className="text-neutral-400 lg:text-4xl">
								Innovative Solution for Digital Skills
							</p>
						</div>
						<div className="flex w-full flex-col gap-9 lg:gap-[56px]">
							{about.map((item, index) => (
								<div
									key={index}
									className="flex w-full flex-col items-center gap-6 even:flex-col-reverse lg:flex-row lg:gap-[76px] lg:even:flex-row-reverse">
									<div className="flex w-full flex-1 flex-col items-center gap-4 lg:items-start lg:gap-[30px]">
										<p
											className="text-white lg:text-lg"
											dangerouslySetInnerHTML={{ __html: item.content }}></p>
										{item.url !== "" && (
											<Link href={item.url}>
												<Button size="lg">Learn more</Button>
											</Link>
										)}
									</div>
									<div className="relative aspect-[2.2/1] w-full flex-1 rounded-[20px]">
										<Image
											src={item.image}
											alt="Zummit CSR"
											fill
											sizes="()"
											className="rounded-[20px] object-cover"
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="lg;gap-[72px] container mx-auto flex flex-col items-center gap-[33px] py-20 lg:gap-[71px] lg:py-[53px]">
					<p className="text-lg font-semibold lg:text-[38px]">Our Services and Offerings</p>
					<div className="flex w-full flex-wrap items-center justify-center gap-6 lg:gap-9">
						{content.map(({ description, icon: Icon, label, url }, index) => (
							<div
								key={index}
								className="flex w-full max-w-[90%] flex-col flex-wrap justify-between gap-4 rounded-2xl bg-[#f9fafb] px-6 py-8 lg:min-h-[392px] lg:w-[376px] lg:px-[30px] lg:py-[50px]">
								<Icon className="size-[32px] lg:size-[54px]" />
								<p className="text-lg font-semibold lg:text-[26px]">{label}</p>
								<p className="text-xs lg:text-base">{description}</p>
								<Link href={url} className="w-full">
									<Button className="h-12 w-full gap-3 lg:h-[62px]">
										Learn more
										<RiArrowRightLine />
									</Button>
								</Link>
							</div>
						))}
					</div>
				</section>
				<section className="lg;gap-[72px] container mx-auto flex flex-col items-center gap-[33px] px-4 py-20 lg:gap-[71px] lg:px-0 lg:py-[53px]">
					<p className="text-lg font-semibold lg:text-[38px]">
						Some Milestones of Zummit Africa
					</p>
					<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">
						{counts.map((item, index) => (
							<div
								key={index}
								style={{ background: item.color }}
								className="flex w-full items-center justify-start   gap-4  rounded-2xl border border-neutral-900 p-[8px]">
								{item.icon && (
									<div className="flex size-7 items-center justify-center rounded-2xl  border bg-black lg:size-12">
										<Image src={item.icon} alt="" width={0} height={0} className=" w-[40px] p-1" />
									</div>
								)}
								{item.icon2 && (
									<div className="flex size-7 items-center justify-center  rounded-2xl   lg:size-14">
										<Image src={item.icon2} alt="" width={0} height={0} className=" w-[40px]" />
									</div>
								)}
								<div className="flex flex-col">
									<p className="text-[10px] text-neutral-500 lg:text-sm">{item.label}</p>
									<p className="text-xl font-bold lg:text-xl">
										{item.value}
										{item.metric}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="w-full bg-neutral-900 p-6 lg:py-[56px]">
					<div className="container mx-auto flex flex-col items-center gap-5 rounded-[18px] bg-white py-[22px] lg:gap-[50px] lg:py-[50px]">
						<div className="flex flex-col items-center gap-3 text-center">
							<p className="text-xl font-medium lg:text-4xl">Why join us at Zummit Africa</p>
							<p className="text-sm lg:text-lg">
								We have the best Machine Learning engineers and Data Scientists supporting our
								training program.
							</p>
						</div>
						<Link href="/instructor-led-training">
							<Button size="lg">Join us</Button>
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
