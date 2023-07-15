import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { Button, Footer, Navbar, PaddedBlock } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import { PORTFOLIO } from "constants"

const Portfolio = () => {
	usePageTitle("Portfolio")
	useScrollToTop()

	useQuery({
		queryFn: () => axios.get(""),
		queryKey: ["get portfolio"],
		onSuccess: ({ data }) => console.log(data),
		onError: (error) => console.log(error),
		enabled: false,
	})

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col items-center py-[99px]">
					<p className="mb-6 mt-[10px] text-[32px] font-bold text-[#333]">
						Showcasing a collection <br /> of products
						<span className="text-secondary"> built by us.</span>
					</p>
					<p className="w-full text-center font-work text-gray-400 md:w-[540px]">
						Here, you will find a diverse range of projects we have successfully
						delivered, spanning various industries and addressing unique challenges.
					</p>
					<div className="mt-[143px] flex w-full flex-col gap-[124px]">
						{PORTFOLIO.map((item, index) => (
							<div
								key={index}
								className="flex w-full items-center justify-between even:flex-row-reverse">
								<div className="rouded-[8px] h-[412px] w-[487px]">
									<img
										src={item.image}
										alt=""
										className="h-full w-full rounded-lg object-cover"
									/>
								</div>
								<div className="flex w-[387px] flex-col gap-6">
									<p className="text-2xl font-bold text-[#333]">{item.label}</p>
									<p className="text=lg text-gray-400">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="flex w-full flex-col items-center py-[99px]">
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

export default Portfolio
