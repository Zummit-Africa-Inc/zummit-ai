import { gql, useQuery } from "@apollo/client"
import { toast } from "sonner"
import React from "react"
import { Appbar, Footer, Loading, Seo } from "@/components/shared"
import { Publication } from "../../../../generated/graphql"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/router"
import { sanitizeHtml } from "@/utils/strings"

const query = gql`
	query FetchPost($slug: String!) {
		publication(host: "datarango.hashnode.dev") {
			post(slug: $slug) {
				id
				title
				slug
				subtitle
				tags {
					id
					name
				}
				url
				coverImage {
					url
				}
				readTimeInMinutes
				publishedAt
				content {
					markdown
					html
				}
				views
			}
		}
	}
`

const formatDate = (date: Date | string) => {
	return new Intl.DateTimeFormat("en-NG", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	}).format(new Date(date))
}

export const BlogPost = () => {
	const [email, setEmail] = React.useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!email) {
			toast.error("Please enter your email address")
			return
		}
	}

	const router = useRouter()
	const { slug } = router.query

	const [publication, setPublication] = React.useState<Publication>()

	const { data } = useQuery(query, { variables: { slug } })
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

	return (
		<>
			<Seo title={``} />
			<Appbar />
			<main className=" container mt-40 w-full max-w-[1200px]">
				<section className="container w-full max-w-[1200px]">
					<Image
						src={String(publication.post?.coverImage?.url)}
						alt="blog post image"
						width={1200}
						height={500}
						className=" rounded-2xl"
					/>
				</section>
				<section className="mt-6 w-full">
					<h2 className="text-brand-secondary text-2xl font-semibold capitalize lg:text-4xl">
						{publication.post?.title}
					</h2>
					<h2 className="mt-3  text-sm">
						Posted on <span className="">{formatDate(publication.post?.publishedAt)}</span>
					</h2>
					<div className="flex w-full items-center space-x-2 pt-5 text-black">
						{publication.post?.tags?.map((tag) => (
							<button
								key={tag.id}
								className={` rounded-full border bg-white px-4 py-1 text-[12px] transition-all duration-500`}>
								{tag.name}
							</button>
						))}
					</div>
					<div
						className="markdown mt-10 w-full"
						dangerouslySetInnerHTML={sanitizeHtml(
							String(publication.post?.content.html)
						)}></div>

					<div className="mb-10 mt-10 h-[0.1rem] w-full bg-neutral-400"></div>
				</section>
			</main>
			<section className="w-full bg-neutral-900 p-6 lg:py-[56px]">
				<div className="container mx-auto flex flex-col items-center gap-5 rounded-[18px] bg-white py-[22px] lg:gap-[50px] lg:py-[50px]">
					<div className="flex flex-col items-center gap-3 text-center">
						<p className="text-xl font-medium lg:text-4xl">
							Stay Ahead with the Latest in EdTech
						</p>
						<p className="text-sm lg:w-[700px] lg:text-lg">
							Get the latest in Artificial Intelligence, Machine Learning and Data Science trends
							and tips delivered monthly; straight to your inbox.
						</p>
					</div>
					<form onSubmit={handleSubmit} className="flex flex-col gap-8 lg:flex-row">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email address"
							className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none transition-all duration-500 focus:border-neutral-900 lg:w-[482px]"
						/>
						<Button size="lg">Subscribe</Button>
					</form>
				</div>
			</section>
			<Footer />
		</>
	)
}
