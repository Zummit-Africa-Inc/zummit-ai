import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import axios from "axios"

import { useEventTracker, usePageTitle, usePageTracker, useScrollToTop } from "hooks"
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
					<h1 className="mb-6 mt-[10px] text-[32px] font-bold text-[#333]">
						Showcasing a collection <br /> of products
						<span className="text-secondary"> built by us.</span>
					</h1>
					<p className="w-full text-center font-work text-gray-400 md:w-[540px]">
						Here, you will find a diverse range of projects we have successfully
						delivered, spanning various industries and addressing unique challenges.
					</p>
					<div className="mt-[143px] mb-[99px] flex w-4/5 flex-col gap-[124px]">
						{renderData().map((item, index) => (
							<div
								key={index}
								className="flex w-full items-end gap-[95px] even:flex-row-reverse">
								<div className="rouded-[8px] h-[387px] w-[463px]">
									<img
										src={item.image}
										alt=""
										className="h-full w-full rounded-lg object-cover"
									/>
								</div>
								<div className="flex w-[463px] flex-col gap-6">
									<h3 className="text-2xl font-bold text-[#333]">{item.label}</h3>
									<div className="">
										<h5 className="text-[#333] font-bold uppercase">the problem</h5>
										<p className="text=lg text-gray-400">{item.problem}</p>
									</div>
									<div className="">
										<h5 className="text-[#333] font-bold uppercase">our solution</h5>
										<p className="text=lg text-gray-400">{item.problem}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<Pagination current={page} onPageChange={onPageChange} pageSize={3} total={portfolio.length} />
				</section>
				<section className="flex w-full flex-col items-center py-[99px]">
					<div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-300 py-10">
						<h2 className="text-[32px] font-bold text-secondary">
							Let's Connect{" "}
							<span className="text-primary">and Bring your ideas to life</span>
						</h2>
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

export default Portfolio
