import React, { useState } from "react"
import { Link } from "react-router-dom"

import { adornment, down, left, right, startup_1, startup_2, startup_3, top, what } from "assets/images"
import { OPERATIONS, PORTFOLIO, PROCESS, PROCESS2, STACKS, TESTIMONIALS } from "constants"
import { Button, ChatBot, Footer, Navbar } from "components"
import { chat_bubble } from "assets/icons"
import { usePageTitle } from "hooks"

const Home = () => {
	const [isBotShown, setIsBotShown] = useState(false)
	usePageTitle("Home")

	return (
		<>
		{isBotShown && <ChatBot close={() => setIsBotShown(false)} />}
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
						<img src={startup_2} alt="hands high fiving" className=""/>
					</div>
					<div className="flex w-full flex-col justify-between gap-4">
						<img src={adornment} alt="yellow pattern adornment" />
						<img src={startup_3} alt="people in a creative meeting" className=""/>
					</div>
				</div>
			</section>
			<section className="relative h-[2px] w-full bg-gray-300">
				<button
					onClick={() => setIsBotShown(current => !current)}
					className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-[26px] bg-secondary px-8 py-4 md:right-[120px]">
					<img src={chat_bubble} alt="" />
					<span className="text-sm font-semibold text-primary">
						Chat with Our Bot
					</span>
				</button>
			</section>
			<section className="grid w-full grid-cols-2 gap-[110px] px-2 py-[99px] md:px-[120px]">
        <div className="w-4/5 relative">
          <img src={what} alt="" className="w-full" />
					<div className="w-full h-full flex flex-col justify-end bg-black/20 text-white absolute top-0 left-0 p-10">
						<p className="font-semibold uppercase">what we do</p>
						<p className="w-2/3 text-[32px] font-bold">Building software products quickly and efficiently.</p>
					</div>
        </div>
        <div className="w-full grid grid-cols-2 items-center gap-x-[41px] gap-y-[50px]">
          {OPERATIONS.map((item, index) => (
            <div key={index} className="w-[227px] flex flex-col">
              <img src={item.image} alt={item.label} className="w-[30px]" />
              <p className="text-2xl text-[#333] font-bold my-5">{item.label}</p>
              <p className="text-gray-400 font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
			<hr className="w-full h-[1px] border border-gray-300" />
			<section className="flex flex-col w-full items-center px-2 py-[99px] md:px-[120px]">
				<p className="text-gray-400 font-medium uppercase mb-2">what sets us apart</p>
				<p className="text-[32px] texx-[#333] font-bold">
					AI is our <span className="text-secondary">superpower</span>.
				</p>
				<div className="w-full h-[471.78px] flex items-center gap-x-24 my-20">
					<div className="w-1/4 h-full flex flex-col justify-between">
						{PROCESS2.slice(0, 2).map(({description, label}, index) => (
							<div key={index} className="flex flex-col gap-5">
								<p className="text-2xl text-[#333} font-bold">{label}</p>
								<p className="text-gray-400">{description}</p>
							</div>
						))}
					</div>
					<div className="w-2/4 h-full grid-container">
						<div className="top">
							<img src={top} alt="" className="w-full h-full object-cover rounded-[8px]" />
						</div>
						<div className="right">
							<img src={right} alt="" className="w-full h-full object-cover rounded-[8px]" />
						</div>
						<div className="down">
							<img src={down} alt="" className="w-full h-full object-cover rounded-[8px]" />
						</div>
						<div className="left">
							<img src={left} alt="" className="w-full h-full object-cover rounded-[8px]" />
						</div>
					</div>
					<div className="w-1/4 h-full flex flex-col justify-between">
						{PROCESS2.slice(2, 4).map(({description, label}, index) => (
							<div key={index} className="flex flex-col gap-5">
								<p className="text-2xl text-[#333} font-bold">{label}</p>
								<p className="text-gray-400">{description}</p>
							</div>
						))}
					</div>
				</div>
				<Link to="/learn-more" className="text-primary font-bold">
					Learn More &rarr;
				</Link>
			</section>
			<hr className="w-full h-[1px] border border-gray-300" />
			<section className="flex flex-col w-full px-2 py-[99px] md:px-[120px]">
				<p className="text-gray-400 font-medium uppercase mb-2">our process</p>
				<p className="text-[32px] texx-[#333] font-bold">
					Streamlined steps from <br />
					<span className="text-secondary">Concept to Completion.</span>
				</p>
				<div className="w-full grid grid-cols-3 items-start gap-10 mt-[74px]">
					{PROCESS.map((process, index) => (
						<div key={index} className="w-full flex flex-col">
							<p className="text-xl text-[#333] font-bold">{process.label}</p>
							<img src={process.image} alt={process.label} className="w-full h-[230px] object-cover rounded-[8px] my-5" />
							<p className="text-gray-400">{process.description}</p>
						</div>
					))}
				</div>
			</section>
			<section className="flex flex-col w-full items-center px-2 py-[99px] md:px-[120px]">
				<p className="text-gray-400 font-medium uppercase">our projects</p>
				<p className="text-[32px] texx-[#333] font-bold mt-2 mb-4">
					Client Portfolio: <span className="text-secondary">Custom Products</span>
				</p>
				<p className="text-gray-400 font-light font-work text-center w-2/5">
					Each project is a testament to our expertise in addressing unique challenges and delivering tailored solutions.
				</p>
				<div className="w-full grid grid-cols-3 items-start gap-5 my-[64px]">
					{PORTFOLIO.map((item, index) => (
						<div key={index} className="w-full flex flex-col">
							<img src={item.image} alt={item.label} className="w-full aspect-[1/1] object-cover rounded-[8px] border" />
							<p className="text-2xl text-[#333] font-bold mt-5 mb-2">{item.label}</p>
							<p className="text-gray-400 font-work font-light">{item.description}</p>
						</div>
					))}
				</div>
				<Link to="/portfolio" className="text-primary font-bold">
					View More Projects &rarr;
				</Link>
			</section>
			<hr className="w-full h-[1px] border border-gray-300" />
			<section className="flex flex-col w-full px-2 py-[99px] md:px-[120px]">
				<p className="text-gray-400 font-medium uppercase mb-2">
					client success stories
				</p>
				<p className="text-[32px] texx-[#333] font-bold">
					Hear what our <span className="text-secondary"> satisfied <br />
					customers </span> have to say
				</p>
				<div className="w-full grid grid-cols-3 items-start gap-10 mt-[74px]">
					{TESTIMONIALS.map((testimonial, index) => (
						<div key={index} className="w-full bg-gray-50 border border-gray-300 rounded-[8px] p-6">
							<p className="text-sm text-[#333]">{testimonial.testimony}</p>
							<div className="flex items-center gap-2 mt-6">
								<img src={testimonial.image} alt={testimonial.name} className="w-[48px] aspect-[1/1] rounded-sm" />
								<div className="flex flex-col">
									<p className="text-[#333] font-semibold">{testimonial.name}</p>
									<p className="text-sm text-gray-400">{testimonial.label}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<hr className="w-full h-[1px] border border-gray-300" />
			<section className="flex flex-col w-full px-2 py-[99px] md:px-[120px]">
				<p className="text-gray-300 font-medium uppercase mb-2">our tech stack</p>
				<p className="text-[32px] texx-[#333] font-bold">
					Expertise <span className="text-secondary">Across Disciplines</span>: <br />
					Our Comprehensive Departments
				</p>
				<div className="w-full grid grid-cols-3 items-center gap-5 mt-[50px]">
					{STACKS.map((stack, index) => (
						<div key={index} className="w-[full aspect-[2/1] bg-black/20 rounded-[8px] relative cursor-pointer hover:scale-[1.02] duration-300">
							<img src={stack.image} alt={stack.label} className="w-full h-full object-cover rounded-[8px]" />
							<div className="w-full h-full flex flex-col items-center justify-center absolute top-0 left-0">
								<p className="text-2xl text-white font-work font-bold uppercase">{stack.label}</p>
								<div className="flex flex-wrap items-center justify-center px-4">
									{stack.description.map((item, index) => (
										<React.Fragment key={index}>
										<p className="text-white font-work font-light">{item}</p>
										{index !== stack.description.length - 1 && <span className="mx-2 text-white">•</span>}
										</React.Fragment>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<hr className="w-full h-[1px] border border-gray-300" />
			<section className="flex flex-col w-full items-center px-2 py-[99px] md:px-[120px]">
				<div className="w-full flex flex-col items-center justify-center py-10 border border-gray-300 rounded-[8px]">
					<p className="text-[32px] text-secondary font-bold">
						Let's Connect <span className="text-primary">and Bring your ideas to life</span>
					</p>
					<p className="text-gray-400 font-work mt-[15px] mb-[32px]">
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
