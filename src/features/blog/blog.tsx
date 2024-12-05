import { RiSearchLine } from "@remixicon/react"
import React from "react"

import { Appbar, Footer, Pagination, Seo } from "@/components/shared"
import ReadMore from "./readmorebutton"

const LIMIT = 4
const filters = [
	"all",
	"machine learning",
	"artificial intelligence",
	"data science",
] as const
type Filter = (typeof filters)[number]

export const Blog = () => {
	const [filter, setFilter] = React.useState<Filter>("all")
	const [page, setPage] = React.useState(1)

	return (
		<>
			<Seo title="Blog" />
			<Appbar />
			<main className="w-full py-36">
				<section className="container mx-auto flex flex-col items-center gap-[71px]">
					<div className="flex flex-col items-center gap-[6px] text-center">
						<p className="font-bold lg:text-[22px]">Our Blog</p>
						<h2 className="font-bold lg:text-[38px]">
							Stay Updated with the Latest in AI & Data Science
						</h2>
						<p className="lg:mt-5 lg:text-lg">
							Our blog is a hub for the latest insights, tutorials, and thought leadership in AI,
							data science, and machine learning. Explore our regularly updated content to stay
							informed and inspired.
						</p>
					</div>
					<div className="flex w-full flex-col gap-6">
						<div className="flex w-full items-center justify-between">
							<div className="flex items-center gap-4">
								<p className="font-medium lg:text-xl">Categories</p>
								<div className="flex items-center gap-3">
									{filters.map((item, index) => (
										<button
											key={index}
											onClick={() => setFilter(item)}
											className={`rounded-full border px-4 py-2 capitalize transition-all duration-500 ${item === filter ? "bg-neutral-400" : ""}`}>
											{item}
										</button>
									))}
								</div>
							</div>
							<div className="">
								<button className="grid place-items-center rounded-full bg-white lg:size-10">
									<RiSearchLine className="lg:size-5" />
								</button>
							</div>
						</div>
						<div className="flex w-full flex-col gap-8">
							<div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
								{[...Array(4)].map((_, index) => (
									<div key={index} className="w-full rounded-xl border lg:h-[357px]"></div>
								))}
							</div>
							<div className="">
								<Pagination current={page} onPageChange={setPage} pageSize={LIMIT} total={35} />
							</div>
						</div>
						<div className="flex w-full flex-col gap-[31px] lg:mt-[60px]">
							<p className="font-medium lg:text-xl">Featured this week</p>
							<div className="grid w-full grid-cols-3 gap-12">
								{[...Array(3)].map((_, index) => (
									<div key={index + 1} className="flex w-full flex-col gap-5">
										<div className="relative aspect-[1.6/1] w-full rounded-2xl border"></div>
										<div className="flex w-full flex-col gap-5">
											<div className="flex w-full flex-col">
												<p className="font-bold lg:text-xl">
													Choosing the Right Data Science course as a beginner
												</p>
												<div className="flex items-center gap-[18px]"></div>
											</div>
											<p className="text-sm text-neutral-500 lg:text-base">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam beatae
												autem dolorum, ut in ipsum illum inventore. Animi, doloremque? Officia
												veritatis dicta est tempora ratione provident, reprehenderit maxime ut!
											</p>
											<ReadMore id={index + 1} />
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
