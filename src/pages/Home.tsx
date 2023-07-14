import { animated, useInView } from "react-spring"
import React, { useState } from "react"
import { Link } from "react-router-dom"

import {
	adornment,
	down,
	left,
	right,
	startup_1,
	startup_2,
	startup_3,
	top,
	what,
} from "assets/images"
import {
	OPERATIONS,
	PORTFOLIO,
	PROCESS,
	PROCESS2,
	STACKS,
	TESTIMONIALS,
} from "constants"
import { Button, ChatBot, ChatButton, Footer, Navbar } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import { ArrowRight } from "assets/icons-tsx"

const Home = () => {
	const [isBotShown, setIsBotShown] = useState(false)
	usePageTitle("Home")
	useScrollToTop()

	const [ref, springs] = useInView(() => ({
		from: {
			opacity: 0,
			transform: "scale(0.5) rotate(180deg)"
		},
		to: {
			opacity: 1,
			transform: "scale(1) rotate(0)"
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
			<section className="grid w-full grid-cols-2 items-center gap-[122px] px-2 py-[99px] md:px-[120px]">
				<div className="w-full">
					<p className="text-[44px] font-bold text-[#333]">
						Custom-Built <span className="text-secondary">Solutions</span> and{" "}
						<span className="text-secondary">AI Integration</span> for Business
						Transformation and Success.
					</p>
					<p className="my-8 text-[#616161]">
						Zummit Africa specializes in creating tailored solutions to transform
						businesses by leveraging AI and delivering tailored products to reach
						their full potential.
					</p>
					<Button
						label="Contact Us"
						to="/contact-us"
						className="bg-primary text-white"
					/>
				</div>
				<div className="grid w-full grid-cols-3 gap-5">
					<div className="flex w-full flex-col justify-between gap-4">
						<img src={startup_1} alt="people in a creative meeting" className="" />
						<img src={adornment} alt="yellow pattern adornment" />
					</div>
					<div className="flex w-full flex-col justify-between gap-4">
						<img src={startup_2} alt="hands high fiving" className="" />
					</div>
					<div className="flex w-full flex-col justify-between gap-4">
						<img src={adornment} alt="yellow pattern adornment" />
						<img src={startup_3} alt="people in a creative meeting" className="" />
					</div>
				</div>
			</section>
			<hr className="h-[1px] w-full border border-gray-300" />
			<section className="grid w-full grid-cols-2 gap-[110px] px-2 py-[99px] md:px-[120px] bg-ellipse bg-top">
				<div className="relative w-[487px]">
					<img src={what} alt="" className="w-full" />
					<div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end bg-black/20 p-10 text-white">
						<p className="font-semibold uppercase">what we do</p>
						<p className="w-3/4 text-[32px] font-bold">
							Building software products quickly and efficiently.
						</p>
					</div>
				</div>
				<div className="grid w-full grid-cols-2 items-center gap-x-[41px] gap-y-[50px]">
					{OPERATIONS.map((item, index) => (
						<div key={index} className="flex w-[227px] flex-col">
							<img src={item.image} alt={item.label} className="w-[30px]" />
							<p className="my-5 text-2xl font-bold text-[#333]">{item.label}</p>
							<p className="font-light text-gray-400">{item.description}</p>
						</div>
					))}
				</div>
			</section>
			<hr className="h-[1px] w-full border border-gray-300" />
			<section className="flex w-full flex-col items-center px-2 py-[99px] md:px-[120px]">
				<p className="mb-2 font-medium uppercase text-gray-400">
					what sets us apart
				</p>
				<p className="texx-[#333] text-[32px] font-bold">
					AI is our <span className="text-secondary">superpower</span>.
				</p>
				<div className="my-20 flex h-[471.78px] w-full items-center gap-x-24">
					<div className="flex h-full w-1/4 flex-col justify-between">
						{PROCESS2.slice(0, 2).map(({ description, label }, index) => (
							<div key={index} className="flex flex-col gap-5">
								<p className="text-[#333} text-2xl font-bold">{label}</p>
								<p className="text-gray-400">{description}</p>
							</div>
						))}
					</div>
					<animated.div ref={ref} style={springs} className="grid-container h-full w-2/4">
						<div className="top">
							<img
								src={top}
								alt=""
								className="h-full w-full rounded-[8px] object-cover"
							/>
						</div>
						<div className="right">
							<img
								src={right}
								alt=""
								className="h-full w-full rounded-[8px] object-cover"
							/>
						</div>
						<div className="down">
							<img
								src={down}
								alt=""
								className="h-full w-full rounded-[8px] object-cover"
							/>
						</div>
						<div className="left">
							<img
								src={left}
								alt=""
								className="h-full w-full rounded-[8px] object-cover"
							/>
						</div>
					</animated.div>
					<div className="flex h-full w-1/4 flex-col justify-between">
						{PROCESS2.slice(2, 4).map(({ description, label }, index) => (
							<div key={index} className="flex flex-col gap-5">
								<p className="text-[#333} text-2xl font-bold">{label}</p>
								<p className="text-gray-400">{description}</p>
							</div>
						))}
					</div>
				</div>
				<Link to="/learn-more" className="flex items-center gap-2 font-bold text-primary">
					Learn More <ArrowRight />
				</Link>
			</section>
			<hr className="h-[1px] w-full border border-gray-300" />
			<section className="flex w-full flex-col px-2 py-[99px] md:px-[120px]">
				<p className="mb-2 font-medium uppercase text-gray-400">our process</p>
				<p className="texx-[#333] text-[32px] font-bold">
					Streamlined steps from <br />
					<span className="text-secondary">Concept to Completion.</span>
				</p>
				<div className="mt-[74px] grid w-full grid-cols-3 items-start gap-10">
					{PROCESS.map((process, index) => (
						<div key={index} className="flex w-full flex-col">
							<p className="text-xl font-bold text-[#333]">{process.label}</p>
							<img
								src={process.image}
								alt={process.label}
								className="my-5 h-[230px] w-full rounded-[8px] object-cover"
							/>
							<p className="text-gray-400">{process.description}</p>
						</div>
					))}
				</div>
			</section>
			<section className="flex w-full flex-col items-center px-2 py-[99px] md:px-[120px]">
				<p className="font-medium uppercase text-gray-400">our projects</p>
				<p className="texx-[#333] mb-4 mt-2 text-[32px] font-bold">
					Client Portfolio: <span className="text-secondary">Custom Products</span>
				</p>
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
								className="aspect-[1/1] w-full rounded-[8px] border object-cover"
							/>
							<p className="mb-2 mt-5 text-2xl font-bold text-[#333]">{item.label}</p>
							<p className="font-work font-light text-gray-400">{item.description}</p>
						</div>
					))}
				</div>
				<Link to="/portfolio" className="flex items-center gap-2 font-bold text-primary">
					View More Projects <ArrowRight />
				</Link>
			</section>
			<hr className="h-[1px] w-full border border-gray-300" />
			<section className="flex w-full flex-col px-2 py-[99px] md:px-[120px]">
				<p className="mb-2 font-medium uppercase text-gray-400">
					client success stories
				</p>
				<p className="texx-[#333] text-[32px] font-bold">
					Hear what our{" "}
					<span className="text-secondary">
						{" "}
						satisfied <br />
						customers{" "}
					</span>{" "}
					have to say
				</p>
				<div className="mt-[74px] grid w-full grid-cols-3 items-start gap-10">
					{TESTIMONIALS.map((testimonial, index) => (
						<div
							key={index}
							className="w-full rounded-[8px] border border-gray-300 bg-gray-50 p-6">
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
			<section className="flex w-full flex-col px-2 py-[99px] md:px-[120px]">
				<p className="mb-2 font-medium uppercase text-gray-300">our tech stack</p>
				<p className="texx-[#333] text-[32px] font-bold">
					Expertise <span className="text-secondary">Across Disciplines</span>:{" "}
					<br />
					Our Comprehensive Departments
				</p>
				<div className="mt-[50px] grid w-full grid-cols-3 items-center gap-5">
					{STACKS.map((stack, index) => (
						<animated.div
							key={index}
							className="w-[full relative aspect-[2/1] cursor-pointer rounded-[8px] bg-black/20 duration-300">
							<img
								src={stack.image}
								alt={stack.label}
								className="h-full w-full rounded-[8px] object-cover"
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
			<section className={`flex w-full flex-col items-center px-2 py-[99px] md:px-[120px] bg-ellipse bg-top`}>
				<div className="flex w-full flex-col items-center justify-center rounded-[8px] border border-gray-300 py-10">
					<p className="text-[32px] font-bold text-secondary">
						Let's Connect{" "}
						<span className="text-primary">and Bring your ideas to life</span>
					</p>
					<p className="mb-[32px] mt-[15px] font-work text-gray-400">
						Click the button below to chat, book a meeting, or call our team directly.
					</p>
					<Button
						label="Talk to us"
						to="/contact-us"
						className="bg-primary text-white"
					/>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Home
