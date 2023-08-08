import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { OPERATIONS, PORTFOLIO, PROCESS, PROCESS2, STACKS } from "constants"
import {
	Button,
	ChatBot,
	ChatButton,
	Footer,
	Navbar,
	PaddedBlock,
} from "components"
import {
	useEventTracker,
	usePageTitle,
	usePageTracker,
	useScrollToTop,
} from "hooks"
import { down, left, right, top } from "assets/images"
import { ArrowRight } from "assets/icons-tsx"

const Home = () => {
	const [isBotShown, setIsBotShown] = useState(false)
	const registerEvent = useEventTracker("cta")
	usePageTitle("Home")
	usePageTracker()
	useScrollToTop()

	return (
		<>
			{isBotShown ? (
				<ChatBot close={() => setIsBotShown(false)} />
			) : (
				<ChatButton open={() => setIsBotShown(true)} />
			)}
			<Navbar />
			<PaddedBlock>
				<section className="grid w-full grid-cols-1 items-center gap-[122px] py-12 md:grid-cols-2 md:py-[99px]">
					<div className="w-full">
						<h1 className="text-[26px] font-bold text-ash-300 md:text-[44px]">
							Custom-Built <span className="text-secondary-200">Solutions</span> and{" "}
							<span className="text-secondary-200">AI Integration</span> for Business
							Transformation and Success.
						</h1>
						<p className="my-8 text-sm text-[#616161] md:text-base">
							Zummit Africa specializes in creating tailored solutions to transform
							businesses by leveraging AI and delivering tailored products to reach
							their full potential.
						</p>
						<Button
							label="Contact Us"
							to="/contact-us"
							onClick={() => registerEvent("click", "contact us")}
							className="bg-primary text-white"
						/>
					</div>
					<div className="grid h-[295px] w-full grid-cols-3 gap-5 md:h-auto">
						<div className="flex w-full flex-col justify-between gap-4">
							<div className="relative h-full w-full rounded-lg bg-black/20 bg-startup-1 bg-blend-multiply md:h-[375px] md:w-[166px]">
								<div className="absolute left-1/2 top-[252px] flex -translate-x-1/2 items-center gap-2">
									{[...Array(4)].map((_, index) => (
										<div
											key={index}
											className="h-[10px] w-[10px] rounded-full bg-secondary-100/[0.32]"></div>
									))}
								</div>
							</div>
							<div className="hidden h-[54px] w-full rounded-lg bg-adornment md:block md:w-[166px]"></div>
						</div>
						<div className="flex w-full flex-col justify-between gap-4 rounded-lg bg-startup-2 bg-cover"></div>
						<div className="flex w-full flex-col justify-between gap-4">
							<div className="hidden h-[54px] w-full flex-wrap justify-between gap-1 overflow-hidden rounded-lg bg-adornment md:flex md:w-[166px]">
								{[...Array(10)].map((_, index) => (
									<p
										key={index}
										className="w-fit text-xs uppercase text-secondary-200/[0.5]">
										ai powered
									</p>
								))}
							</div>
							<div className="h-full w-full rounded-lg bg-black/20 bg-startup-3 bg-blend-multiply md:h-[375px] md:w-[166px]"></div>
						</div>
					</div>
				</section>
			</PaddedBlock>
			<hr className="h-[1px] w-full border border-ash-100" />
			<PaddedBlock>
				<section className="grid w-full grid-cols-1 gap-[110px] py-12 md:grid-cols-2 md:py-[99px]">
					<div className="flex h-[411px] w-[320px] flex-col justify-end rounded-md bg-black/20 bg-what p-[22px] text-white md:h-[572px] md:w-[487px] md:p-10">
						<p className="text-sm font-semibold uppercase md:text-base">what we do</p>
						<h2 className="text-2xl font-bold md:text-[32px]">
							Building software products quickly and efficiently.
						</h2>
					</div>
					<div className="grid w-full grid-cols-1 items-center gap-x-[41px] gap-y-[50px] md:grid-cols-2">
						{OPERATIONS.map((item, index) => (
							<div
								key={index}
								className="flex w-full flex-col px-6 md:w-[227px] md:px-0">
								<img src={item.image} alt={item.label} className="w-[30px]" />
								<h4 className="my-5 text-xl font-bold text-ash-300 md:text-2xl">
									{item.label}
								</h4>
								<p className="text-sm font-light text-ash-200 md:text-base">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</section>
			</PaddedBlock>
			<hr className="h-[1px] w-full border border-ash-100" />
			<PaddedBlock>
				<section className="flex w-full flex-col items-center py-[99px]">
					<p className="mb-2 text-center text-sm font-medium uppercase text-ash-200 md:text-left md:text-base">
						what sets us apart
					</p>
					<h2 className="text-center text-2xl font-bold text-ash-300 md:text-left md:text-[32px]">
						AI is our <span className="text-secondary-200">superpower</span>.
					</h2>
					<div className="my-20 flex h-auto w-full flex-col items-center gap-16 md:h-[471.78px] md:flex-row md:gap-x-24">
						<div className="flex h-full w-full flex-col justify-between gap-10 md:w-1/4 md:gap-0">
							{PROCESS2.slice(0, 2).map(({ description, label }, index) => (
								<div key={index} className="flex flex-col gap-5">
									<h4 className="text-xl font-bold text-[#333] md:text-2xl">{label}</h4>
									<p className="text-ash-200">{description}</p>
								</div>
							))}
						</div>
						<motion.div
							initial={{ rotate: 180, scale: 0.5 }}
							whileInView={{ rotate: 0, scale: 1 }}
							transition={{
								type: "spring",
								delay: 0.1,
								duration: 1,
								bounce: 0.25,
								stiffness: 150,
							}}
							className="grid-container h-full w-full md:w-2/4">
							<div className="top">
								<img src={top} alt="" />
							</div>
							<div className="right">
								<img src={right} alt="" />
							</div>
							<div className="down">
								<img src={down} alt="" />
							</div>
							<div className="left">
								<img src={left} alt="" />
							</div>
						</motion.div>
						<div className="flex h-full w-full flex-col justify-between gap-10 md:w-1/4 md:gap-0">
							{PROCESS2.slice(2, 4).map(({ description, label }, index) => (
								<div key={index} className="flex flex-col gap-5">
									<h4 className="text-xl font-bold text-[#333] md:text-2xl">{label}</h4>
									<p className="text-ash-200">{description}</p>
								</div>
							))}
						</div>
					</div>
					<Link
						to="/learn-more"
						onClick={() => registerEvent("click", "learn more")}
						className="flex items-center gap-2 font-bold text-primary">
						Learn More <ArrowRight />
					</Link>
				</section>
			</PaddedBlock>
			<hr className="h-[1px] w-full border border-ash-100" />
			<PaddedBlock>
				<section className="flex w-full flex-col py-[99px]">
					<p className="mb-2 text-center text-sm font-medium uppercase text-ash-200 md:text-left md:text-base">
						our process
					</p>
					<h2 className="text-center text-2xl font-bold text-ash-300 md:text-left md:text-[32px]">
						Streamlined steps from <br />
						<span className="text-secondary-200">Concept to Completion.</span>
					</h2>
					<div className="mt-[74px] grid w-full grid-cols-1 items-start gap-10 sm:grid-cols-3">
						{PROCESS.map((process, index) => (
							<div key={index} className="flex w-full flex-col">
								<h4 className="text-xl font-bold text-ash-300">{process.label}</h4>
								<div className="my-5 h-[230px] w-full cursor-pointer overflow-hidden rounded-lg">
									<img
										src={process.image}
										alt={process.label}
										className="h-full w-full transform rounded-lg object-cover transition-all duration-500 ease-in-out hover:scale-[1.2]"
									/>
								</div>
								<p className="text-sm text-ash-200 md:text-base">
									{process.description}
								</p>
							</div>
						))}
					</div>
				</section>
				<section className="flex w-full flex-col items-center py-[99px]">
					<p className="text-center text-sm font-medium uppercase text-ash-200 md:text-left md:text-base">
						our projects
					</p>
					<h2 className="mb-4 mt-2 text-center text-2xl font-bold text-ash-300 md:text-left md:text-[32px]">
						Client Portfolio:{" "}
						<span className="text-secondary-200">Custom Products</span>
					</h2>
					<p className="w-full text-center font-work font-light text-ash-200 md:w-2/5">
						Each project is a testament to our expertise in addressing unique
						challenges and delivering tailored solutions.
					</p>
					<div className="my-[64px] grid w-full grid-cols-1 items-start gap-10 sm:grid-cols-3 md:gap-5">
						{PORTFOLIO.map((item, index) => (
							<div key={index} className="flex w-full flex-col">
								<img
									src={item.image}
									alt={item.label}
									className="aspect-[1/1] w-full rounded-lg border object-cover"
								/>
								<p className="mb-2 mt-5 text-xl font-bold text-ash-300 md:text-2xl">
									{item.label}
								</p>
								<p className="text-sm font-light text-ash-200 first-letter:font-work md:text-base">
									{item.description}
								</p>
							</div>
						))}
					</div>
					<Link
						to="/portfolio"
						onClick={() => registerEvent("click", "portfolio")}
						className="flex items-center gap-2 font-bold text-primary">
						View More Projects <ArrowRight />
					</Link>
				</section>
			</PaddedBlock>
			<hr className="h-[1px] w-full border border-ash-100" />
			<PaddedBlock>
				<section className="flex w-full flex-col py-[99px]">
					<p className="mb-2 text-center text-sm font-medium uppercase text-ash-200 md:text-left md:text-base">
						our tech stack
					</p>
					<h2 className="text-center text-2xl font-bold text-ash-300 md:text-left md:text-[32px]">
						Expertise <span className="text-secondary-200">Across Disciplines</span>:{" "}
						<br />
						Our Comprehensive Departments
					</h2>
					<div className="mt-[50px] grid w-full grid-cols-1 items-center gap-5 overflow-hidden sm:grid-cols-2 md:grid-cols-3">
						{STACKS.map((stack, index) => (
							<motion.div
								key={index}
								initial={{ x: 100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									type: "spring",
									delay: 0.1 * index,
									duration: 1,
									bounce: 0.25,
									stiffness: 200,
								}}
								className="relative aspect-[2/1] w-full cursor-pointer rounded-lg bg-black/20 duration-300">
								<img
									src={stack.image}
									alt={stack.label}
									className="h-full w-full rounded-lg object-cover"
								/>
								<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
									<p className="font-work text-xl font-bold uppercase text-white md:text-2xl">
										{stack.label}
									</p>
									<div className="flex flex-wrap items-center justify-center px-4">
										{stack.description.map((item, index) => (
											<React.Fragment key={index}>
												<p className="font-work text-sm font-light text-white md:text-base">
													{item}
												</p>
												{index !== stack.description.length - 1 && (
													<span className="mx-2 text-white">•</span>
												)}
											</React.Fragment>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>
			</PaddedBlock>
			<hr className="h-[1px] w-full border border-ash-100" />
			<PaddedBlock>
				<section className="flex w-full flex-col items-center py-[99px]">
					<div className="flex w-full flex-col items-center justify-center rounded-lg border border-ash-200 py-10">
						<h3 className="text-center text-2xl font-bold text-secondary-200 md:text-[32px]">
							Let's Connect{" "}
							<span className="text-primary">and Bring your ideas to life</span>
						</h3>
						<p className="mb-[32px] mt-[15px] text-center font-work text-sm text-ash-200 md:text-base">
							Click the button below to chat, book a meeting, or call our team
							directly.
						</p>
						<Button
							label="Talk to us"
							to="/contact-us"
							onClick={() => registerEvent("click", "contact us")}
							className="bg-primary text-white"
						/>
					</div>
				</section>
			</PaddedBlock>
			<Footer />
		</>
	)
}

export default Home
