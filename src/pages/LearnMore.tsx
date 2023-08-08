import { motion } from "framer-motion"
import { useState } from "react"

import {
	useEventTracker,
	usePageTitle,
	usePageTracker,
	useScrollToTop,
} from "hooks"
import { Button, Footer, Navbar, PaddedBlock, TabPanel } from "components"
import { APPROACH, SECTORS } from "constants"
import { learn_more } from "assets/images"

const LearnMore = () => {
	const registerEvent = useEventTracker("cta")
	const [tab, setTab] = useState(0)
	usePageTitle("Learn More")
	usePageTracker()
	useScrollToTop()

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col py-[99px]">
					<p className="text-center text-sm font-medium uppercase text-ash-200 md:text-left md:text-base">
						what sets us apart
					</p>
					<h1 className="mb-6 mt-[10px] text-center text-2xl font-bold text-ash-300 md:text-left md:text-[32px]">
						<span className="text-secondary-200">Discover the Difference: </span>Our
						Unique <br />
						Advantages and Unmatched Expertise
					</h1>
					<h5 className="w-full text-center font-work text-sm text-ash-200 md:w-1/2 md:text-left md:text-xl">
						At ZummitAfrica, we believe in the power of human-centered design,
						combining creativity and empathy to craft intuitive and visually stunning
						experiences.
					</h5>
					<div className="relative mb-[117px] mt-[126px] w-full rounded-lg">
						<img src={learn_more} alt="" className="w-full rounded-lg" />
						<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 px-[43px] py-[37px]">
							<p className="text-[32px] font-bold text-white">
								How we empower businesses <br />
								with our Unique approach:
							</p>
						</div>
					</div>
					<div className="grid w-full grid-cols-1 gap-x-0 gap-y-10 md:grid-cols-2 md:gap-x-[180px] md:gap-y-[120px]">
						{APPROACH.map((item, index) => (
							<div key={index} className="w-full md:w-[387px]">
								<div className="aspect-[1/1] w-10 rounded-lg bg-secondary-100 p-1">
									<img src={item.icon} alt="" className="h-full w-full" />
								</div>
								<p className="my-6 text-xl font-bold text-ash-300 md:text-2xl">
									{item.label}:
								</p>
								<p className="font-work text-sm font-light text-ash-200 md:text-base">
									{item.decription}
								</p>
							</div>
						))}
					</div>
				</section>
				<section className="flex w-full flex-col items-center py-[99px]">
					<h2 className="w-full text-center text-2xl font-bold text-ash-300 md:w-1/2 md:text-[32px]">
						Revolutionizing Solutions Across Diverse Sectors.
					</h2>
					<div className="mb-[72px] mt-[50px] flex items-center justify-center gap-[10px] rounded-[49px] bg-primary p-[10px]">
						{SECTORS.map((sector, index) => (
							<button
								key={index}
								onClick={() => {
									setTab(index)
									registerEvent("click", "sector tabs")
								}}
								className={`flex items-center justify-center rounded-[49px] px-8 py-[10px] capitalize ${
									tab === index
										? "bg-secondary-100 text-black"
										: "bg-white/[8%] text-white"
								}`}>
								{sector.label}
							</button>
						))}
					</div>
					{SECTORS.map((sector, index) => (
						<TabPanel key={index} tabIndex={tab} index={index}>
							<motion.div
								initial={{ opacity: 0, scale: 1.2 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									type: "tween",
									delay: 0.1,
									duration: 0.5,
									easings: ["easeIn", "easeOut"],
								}}
								className="grid w-full grid-cols-1 items-center gap-10 md:w-[931px] md:grid-cols-2 md:gap-[180px]">
								<div className="flex flex-col gap-6">
									<h5 className="text-xl font-bold text-ash-300 md:text-2xl">
										{sector.topic}
									</h5>
									<p className="text-base font-light text-ash-200 md:text-xl">
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
							</motion.div>
						</TabPanel>
					))}
				</section>
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

export default LearnMore
