import { RiSearchLine } from "@remixicon/react"
import { gql, useQuery } from "@apollo/client"
import { paginate } from "@/utils/pagination"
import React from "react"

import { Appbar, Footer, Loading, Pagination, Seo } from "@/components/shared"
import { PostEdge, Publication } from "../../../generated/graphql"
import { Banner } from "@/components/shared"
import { Card } from "@/components/shared"

const LIMIT = 9

const query = gql`
	query FetchAllPosts($host: String!) {
		publication(host: $host) {
			posts(first: 0) {
				edges {
					node {
						id
						title
						slug
						subtitle
						tags {
							id
							name
						}
						coverImage {
							url
						}
						publishedAt
						views
						brief
					}
				}
			}
		}
	}
`

const filters = [
	"all",
	"machine learning",
	"artificial intelligence",
	"data science",
] as const
type Filter = (typeof filters)[number]

export const Blog = () => {
	const [filter, setFilter] = React.useState<Filter>("all")
	const [publication, setPublication] = React.useState<Publication>()
	const [page, setPage] = React.useState(1)

	const { data } = useQuery(query, {
		variables: { host: "datarango.hashnode.dev" },
	})
	React.useEffect(() => {
		if (data) {
			setPublication(data?.publication)
		}
	}, [data])

	if (!publication)
		return (
			<div className="grid h-screen w-screen place-items-center">
				<Loading />
			</div>
		)

	const paginated = publication?.posts?.edges
		? paginate(publication.posts?.edges, page, LIMIT)
		: []

	return (
		<>
			<Seo title="Blog" />
			<Appbar />
			<main className="w-full py-36">
				<section className="container mx-auto flex flex-col items-center gap-[20px] lg:gap-[71px] ">
					<div className="flex flex-col items-center gap-[6px] text-center">
						<p className="text-xl font-bold lg:text-[22px]">Our Blog</p>
						<h2 className="text-[20px] font-bold lg:text-[38px]">
							Stay Updated with the Latest in AI & Data Science
						</h2>
						<p className="text-sm lg:mt-5 lg:text-lg ">
							Our blog is a hub for the latest insights, tutorials, and thought leadership in AI,
							data science, and machine learning. Explore our regularly updated content to stay
							informed and inspired.
						</p>
					</div>
					<div className="flex w-full flex-col gap-6">
						<div className="flex w-full items-center justify-between">
							<div className=" hidden items-center gap-4 lg:flex">
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
							<div className="hidden lg:block">
								<button className="grid place-items-center rounded-full bg-white lg:size-10">
									<RiSearchLine className="lg:size-5" />
								</button>
							</div>
						</div>
						<div className="flex w-full flex-col gap-8">
							<div className="grid w-full grid-cols-1 gap-10 px-[15px] lg:grid-cols-2 lg:px-0">
								{paginated
									.map((post: PostEdge) => <Banner key={post.node.id} postEdge={post} />)
									.slice(0, 9)}
							</div>
							<div className="">
								<Pagination
									current={page}
									onPageChange={(page) => setPage(page)}
									pageSize={LIMIT}
									total={publication.posts?.edges?.length}
								/>
							</div>
						</div>
						<div className="mt-[20px] flex w-full flex-col gap-[31px] lg:mt-[60px]">
							<p className="px-[15px] font-medium lg:px-0 lg:text-xl">Featured this week</p>
							<div className="grid w-full grid-cols-1 gap-8 px-[16px] lg:grid-cols-3 lg:gap-12 lg:px-0">
								{paginated
									.map((post: PostEdge) => <Card key={post.node.id} postEdge={post} />)
									.slice(0, 3)}
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
