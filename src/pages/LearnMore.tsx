// import { animated, useSpring } from "react-spring"
import { useState } from "react"

import { Button, Footer, Navbar, PaddedBlock, TabPanel } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import { APPROACH, SECTORS } from "constants"
import { learn_more } from "assets/images"

const LearnMore = () => {
	const [tab, setTab] = useState(0)
	usePageTitle("Learn More")
	useScrollToTop()

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col py-[99px]">
					<p className="font-medium uppercase text-gray-400">what sets us apart</p>
					<p className="mb-6 mt-[10px] text-[32px] font-bold text-[#333]">
						<span className="text-secondary">Discover the Difference: </span>Our
						Unique <br />
						Advantages and Unmatched Expertise
					</p>
					<p className="w-1/2 font-work text-xl text-gray-300">
						At ZummitAfrica, we believe in the power of human-centered design,
						combining creativity and empathy to craft intuitive and visually stunning
						experiences.
					</p>
					<div className="relative mb-[117px] mt-[126px] w-full rounded-lg">
						<img src={learn_more} alt="" className="w-full rounded-lg" />
						<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/30 px-[43px] py-[37px] rounded-lg">
							<p className="text-[32px] font-bold text-white">
								How we empower businesses <br />
								with our Unique approach:
							</p>
						</div>
					</div>
					<div className="grid w-full grid-cols-2 gap-x-[180px] gap-y-[120px]">
						{APPROACH.map((item, index) => (
							<div key={index} className="w-[387px]">
								<div className="aspect-[1/1] w-10 rounded-lg bg-secondary p-1">
									<img src={item.icon} alt="" className="h-full w-full" />
								</div>
								<p className="my-6 text-2xl font-bold text-[#333]">{item.label}:</p>
								<p className="font-work font-light text-gray-400">{item.decription}</p>
							</div>
						))}
					</div>
				</section>
				<section className="flex w-full flex-col items-center py-[99px]">
					<p className="w-1/2 text-center text-[32px] font-bold text-[#333]">
						Revolutionizing Solutions Across Diverse Sectors.
					</p>
					<div className="mb-[72px] mt-[50px] flex items-center justify-center gap-[10px] rounded-[49px] bg-primary p-[10px]">
						{SECTORS.map((sector, index) => (
							<button
								key={index}
								onClick={() => setTab(index)}
								className={`flex items-center justify-center rounded-[49px] px-8 py-[10px] capitalize ${
									tab === index ? "bg-secondary text-black" : "bg-white/[8%] text-white"
								}`}>
								{sector.label}
							</button>
						))}
					</div>
					{SECTORS.map((sector, index) => (
						<TabPanel key={index} tabIndex={tab} index={index}>
							<div className="grid w-full grid-cols-2 items-center gap-[180px] md:w-[931px]">
								<div className="flex flex-col gap-6">
									<p className="text-2xl font-bold text-[#333]">{sector.topic}</p>
									<p className="text-xl font-light text-gray-400">
										{sector.description}
									</p>
								</div>
								<div className="aspect-[1/1] w-full rounded-lg">
									<img
										src={sector.image}
										alt={sector.label}
										title={`image depicting the use of ai in ${sector.label} sector`}
										className="h-full w-full rounded-lg object-cover"
									/>
								</div>
							</div>
						</TabPanel>
					))}
				</section>
				<section className={`flex w-full flex-col items-center py-[99px]`}>
					<div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-300 py-10">
						<p className="text-[32px] font-bold text-secondary">
							Let's Connect{" "}
							<span className="text-primary">and Bring your ideas to life</span>
						</p>
						<p className="mb-[32px] mt-[15px] font-work text-gray-400">
							Click the button below to chat, book a meeting, or call our team
							directly.
						</p>
						<Button
							label="Talk to us"
							to="/contact-us"
							className="bg-primary text-white"
						/>
					</div>
				</section>
			</PaddedBlock>
			<Footer />
		</>
	)
}

export default LearnMore
