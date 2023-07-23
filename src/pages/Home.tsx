import { animated, useInView } from "react-spring"
import React, { useState } from "react"
import { Link } from "react-router-dom"

import {
	OPERATIONS,
	PORTFOLIO,
	PROCESS,
	PROCESS2,
	STACKS,
	TESTIMONIALS,
} from "constants"
import {
	Button,
	ChatBot,
	ChatButton,
	Footer,
	Navbar,
	PaddedBlock,
} from "components"
import { useEventTracker, usePageTitle, usePageTracker, useScrollToTop } from "hooks"
import { down, left, right, top } from "assets/images"
import { ArrowRight } from "assets/icons-tsx"

const Home = () => {
	const registerEvent = useEventTracker("cta")
	const [isBotShown, setIsBotShown] = useState(false)
	usePageTitle("Home")
	usePageTracker()
	useScrollToTop()

	const [ref, springs] = useInView(() => ({
		from: {
			opacity: 0,
			transform: "scale(0.5) rotate(180deg)",
		},
		to: {
			opacity: 1,
			transform: "scale(1) rotate(0)",
		},
		delay: 300,
	}))

	return (
		<>
			{isBotShown ? (
				<ChatBot close={() => setIsBotShown(false)} />
			) : (
				<ChatButton open={() => setIsBotShown(true)} />
			)}
			<Navbar />
			<PaddedBlock>
				<section className="grid w-full grid-cols-2 items-center gap-[122px] py-[99px]">
					<div className="w-full">
						<h1 className="text-[44px] font-bold text-[#333]">
							Custom-Built <span className="text-secondary">Solutions</span> and{" "}
							<span className="text-secondary">AI Integration</span> for Business
							Transformation and Success.
						</h1>
						<p className="my-8 text-[#616161]">
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
					<div className="grid w-full grid-cols-3 gap-5">
						<div className="flex w-full flex-col justify-between gap-4">
							<div className="relative h-[375px] w-[166px] rounded-lg bg-black/20 bg-startup-1 bg-blend-multiply">
								<div className="absolute left-1/2 top-[252px] flex -translate-x-1/2 items-center gap-2">
									{[...Array(4)].map((_, index) => (
										<div
											key={index}
											className="h-[10px] w-[10px] rounded-full bg-secondary/[0.32]"></div>
									))}
								</div>
							</div>
							<div className="h-[54px] w-[166px] rounded-lg bg-adornment"></div>
						</div>
						<div className="flex w-full flex-col justify-between gap-4 rounded-lg bg-startup-2"></div>
						<div className="flex w-full flex-col justify-between gap-4">
							<div className="flex h-[54px] w-[166px] flex-wrap items-center justify-center gap-2 overflow-hidden rounded-lg bg-adornment">
								{[...Array(10)].map((_, index) => (
									<p key={index} className="text-xs uppercase text-secondary/[0.5]">
										ai powered
									</p>
								))}
							</div>
							<div className="h-[375px] w-[166px] rounded-lg bg-black/20 bg-startup-3 bg-blend-multiply"></div>
						</div>
					</div>
				</section>
				<hr className="h-[1px] w-full border border-gray-300" />
				<section className="grid w-full grid-cols-2 gap-[110px] py-[99px]">
					<div className="flex h-[572px] w-[487px] flex-col justify-end bg-black/20 bg-what p-10 text-white">
						<p className="font-semibold uppercase">what we do</p>
						<h2 className="text-[32px] font-bold">
							Building software products quickly and efficiently.
						</h2>
					</div>
					<div className="grid w-full grid-cols-2 items-center gap-x-[41px] gap-y-[50px]">
						{OPERATIONS.map((item, index) => (
							<div key={index} className="flex w-[227px] flex-col">
								<img src={item.image} alt={item.label} className="w-[30px]" />
								<h4 className="my-5 text-2xl font-bold text-[#333]">{item.label}</h4>
								<p className="font-light text-gray-400">{item.description}</p>
							</div>
						))}
					</div>
				</section>
				<hr className="h-[1px] w-full border border-gray-300" />
				<section className="flex w-full flex-col items-center py-[99px]">
					<p className="mb-2 font-medium uppercase text-gray-400">
						what sets us apart
					</p>
					<h2 className="texx-[#333] text-[32px] font-bold">
						AI is our <span className="text-secondary">superpower</span>.
					</h2>
					<div className="my-20 flex h-[471.78px] w-full items-center gap-x-24">
						<div className="flex h-full w-1/4 flex-col justify-between">
							{PROCESS2.slice(0, 2).map(({ description, label }, index) => (
								<div key={index} className="flex flex-col gap-5">
									<h4 className="text-[#333} text-2xl font-bold">{label}</h4>
									<p className="text-gray-400">{description}</p>
								</div>
							))}
						</div>
						<animated.div
							ref={ref}
							style={springs}
							className="grid-container h-full w-2/4">
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
						</animated.div>
						<div className="flex h-full w-1/4 flex-col justify-between">
							{PROCESS2.slice(2, 4).map(({ description, label }, index) => (
								<div key={index} className="flex flex-col gap-5">
									<h4 className="text-[#333} text-2xl font-bold">{label}</h4>
									<p className="text-gray-400">{description}</p>
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
				<hr className="h-[1px] w-full border border-gray-300" />
				<section className="flex w-full flex-col py-[99px]">
					<p className="mb-2 font-medium uppercase text-gray-400">our process</p>
					<h2 className="texx-[#333] text-[32px] font-bold">
						Streamlined steps from <br />
						<span className="text-secondary">Concept to Completion.</span>
					</h2>
					<div className="mt-[74px] grid w-full grid-cols-3 items-start gap-10">
						{PROCESS.map((process, index) => (
							<div key={index} className="flex w-full flex-col">
								<h4 className="text-xl font-bold text-[#333]">{process.label}</h4>
								<img
									src={process.image}
									alt={process.label}
									className="my-5 h-[230px] w-full rounded-lg object-cover"
								/>
								<p className="text-gray-400">{process.description}</p>
							</div>
						))}
					</div>
				</section>
				<section className="flex w-full flex-col items-center py-[99px]">
					<p className="font-medium uppercase text-gray-400">our projects</p>
					<h2 className="texx-[#333] mb-4 mt-2 text-[32px] font-bold">
						Client Portfolio: <span className="text-secondary">Custom Products</span>
					</h2>
					<p className="w-2/5 text-center font-work font-light text-gray-400">
						Each project is a testament to our expertise in addressing unique
						challenges and delivering tailored solutions.
					</p>
					<div className="my-[64px] grid w-full grid-cols-3 items-start gap-5">
						{PORTFOLIO.map((item, index) => (
							<div key={index} className="flex w-full flex-col">
								<img
									src={item.image}
									alt={item.label}
									className="aspect-[1/1] w-full rounded-lg border object-cover"
								/>
								<p className="mb-2 mt-5 text-2xl font-bold text-[#333]">{item.label}</p>
								<p className="font-work font-light text-gray-400">{item.description}</p>
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
				<hr className="h-[1px] w-full border border-gray-300" />
				<section className="flex w-full flex-col py-[99px]">
					<p className="mb-2 font-medium uppercase text-gray-400">
						client success stories
					</p>
					<h2 className="texx-[#333] text-[32px] font-bold">
						Hear what our{" "}
						<span className="text-secondary">
							{" "}
							satisfied <br />
							customers{" "}
						</span>{" "}
						have to say
					</h2>
					<div className="mt-[74px] grid w-full grid-cols-3 items-start gap-10">
						{TESTIMONIALS.map((testimonial, index) => (
							<div
								key={index}
								className="w-full rounded-lg border border-gray-300 bg-gray-50 p-6">
								<p className="text-sm text-[#333]">{testimonial.testimony}</p>
								<div className="mt-6 flex items-center gap-2">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="aspect-[1/1] w-[48px] rounded-sm"
									/>
									<div className="flex flex-col">
										<p className="font-semibold text-[#333]">{testimonial.name}</p>
										<p className="text-sm text-gray-400">{testimonial.label}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
				<hr className="h-[1px] w-full border border-gray-300" />
				<section className="flex w-full flex-col py-[99px]">
					<p className="mb-2 font-medium uppercase text-gray-300">our tech stack</p>
					<h2 className="texx-[#333] text-[32px] font-bold">
						Expertise <span className="text-secondary">Across Disciplines</span>:{" "}
						<br />
						Our Comprehensive Departments
					</h2>
					<div className="mt-[50px] grid w-full grid-cols-3 items-center gap-5">
						{STACKS.map((stack, index) => (
							<animated.div
								key={index}
								className="w-[full relative aspect-[2/1] cursor-pointer rounded-lg bg-black/20 duration-300">
								<img
									src={stack.image}
									alt={stack.label}
									className="h-full w-full rounded-lg object-cover"
								/>
								<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
									<p className="font-work text-2xl font-bold uppercase text-white">
										{stack.label}
									</p>
									<div className="flex flex-wrap items-center justify-center px-4">
										{stack.description.map((item, index) => (
											<React.Fragment key={index}>
												<p className="font-work font-light text-white">{item}</p>
												{index !== stack.description.length - 1 && (
													<span className="mx-2 text-white">•</span>
												)}
											</React.Fragment>
										))}
									</div>
								</div>
							</animated.div>
						))}
					</div>
				</section>
				<hr className="h-[1px] w-full border border-gray-300" />
				<section className="flex w-full flex-col items-center py-[99px]">
					<div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-300 py-10">
						<h3 className="text-[32px] font-bold text-secondary">
							Let's Connect{" "}
							<span className="text-primary">and Bring your ideas to life</span>
						</h3>
						<p className="mb-[32px] mt-[15px] font-work text-gray-400">
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
