import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import axios from "axios"

import {
	useEventTracker,
	usePageTitle,
	usePageTracker,
	useScrollToTop,
} from "hooks"
import { Button, Footer, Navbar, PaddedBlock, Pagination } from "components"
import { PORTFOLIO } from "constants"

const Portfolio = () => {
	const [portfolio, setPortfolio] = useState(PORTFOLIO)
	const registerEvent = useEventTracker("cta")
	const [page, setPage] = useState(1)
	usePageTitle("Portfolio")
	usePageTracker()
	useScrollToTop()

	const renderData = () => {
		const startIndex = (page - 1) * 6
		const endIndex = startIndex + 6
		const currentPage = portfolio.slice(startIndex, endIndex)
		return currentPage
	}

	const onPageChange = (value: number) => setPage(value)

	useQuery({
		queryFn: () => axios.get(""),
		queryKey: ["get portfolio"],
		onSuccess: ({ data }) => {
			console.log(data)
			setPortfolio(data)
		},
		onError: (error) => console.log(error),
		enabled: false,
	})

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col items-center py-[99px]">
					<h1 className="mb-6 mt-[10px] text-2xl font-bold text-ash-300 md:text-[32px]">
						Showcasing a collection <br /> of products
						<span className="text-secondary-200"> built by us.</span>
					</h1>
					<p className="w-full text-center font-work text-ash-200 md:w-[540px]">
						Here, you will find a diverse range of projects we have successfully
						delivered, spanning various industries and addressing unique challenges.
					</p>
					<div className="mb-[99px] mt-[143px] flex w-full flex-col gap-16 md:w-4/5 md:gap-[124px]">
						{renderData().map((item, index) => (
							<div
								key={index}
								className="flex w-full flex-col items-center gap-5 md:flex-row md:items-end md:gap-[95px] md:even:flex-row-reverse">
								<div className="rouded-[8px] aspect-[1.2/1] w-full md:w-[463px]">
									<img
										src={item.image}
										alt=""
										className="h-full w-full rounded-lg object-cover"
									/>
								</div>
								<div className="flex w-full flex-col gap-6 md:w-[463px]">
									<h3 className="text-xl font-bold text-ash-300 md:text-2xl">
										{item.label}
									</h3>
									<div className="">
										<h5 className="text-base font-bold uppercase text-ash-300 md:text-lg">
											the problem
										</h5>
										<p className="text-sm text-ash-200 md:text-base">{item.problem}</p>
									</div>
									<div className="">
										<h5 className="text-base font-bold uppercase text-ash-300 md:text-lg">
											our solution
										</h5>
										<p className="text-sm text-ash-200 md:text-base">{item.problem}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<Pagination
						current={page}
						onPageChange={onPageChange}
						pageSize={3}
						total={portfolio.length}
					/>
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

export default Portfolio
