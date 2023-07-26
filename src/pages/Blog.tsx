import { Link, useParams } from "react-router-dom"
import { useQueries } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { useState } from "react"

import { Button, Footer, Loader, Navbar, PaddedBlock } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import { formatDate, randomize } from "utils"
import { ArrowRight } from "assets/icons-tsx"
import { PaginationDto } from "interfaces"
import { Post } from "types"

const Blog = () => {
	const [posts, setPosts] = useState<PaginationDto<Post>>()
	const [post, setPost] = useState<Post>()
	const { id } = useParams()
	usePageTitle("Blog")
	useScrollToTop()

	const [postQuery] = useQueries({
		queries: [
			{
				queryFn: () => axios.get(`${import.meta.env.VITE_API_URL}/blog/${id}`),
				queryKey: ["get blogpost", id],
				onSuccess: ({data}: AxiosResponse) => {
					console.log(data)
					setPost(data)
				},
				enabled: false,
			},
			{
				queryFn: () => axios.get(`${import.meta.env.VITE_API_URL}/blog/all`),
				queryKey: ["get blogposts"],
				onSuccess: ({data}: AxiosResponse) => {
					console.log(data)
					setPosts(data)
				},
				enabled: false,
			}
		]
	})

	if (postQuery.isLoading) return <Loader />

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col items-center pb-[148px] pt-[109px]">
					<div className="flex w-[692px] flex-col">
						<h2 className="mb-6 mt-[10px] text-[32px] font-bold text-ash-300">
							{post?.title}
						</h2>
						<div className="flex items-center font-work text-ash-200">
							<img src={post?.author.image} alt={post?.author.firstName} className="h-[32px] w-[32px] rounded-full object-cover" />
							<p className="ml-2 text-sm">{post?.author.firstName}</p>
							<span className="mx-2">&bull;</span>
							<p className="text-sm">{post && formatDate(post.createdAt)}</p>
						</div>
					</div>
					<img src={post?.imageUrl} alt={post?.title} className="mb-[69px] mt-[44px] aspect-[2.4/1] w-[834px] rounded-lg object-cover" />
					<div className="flex w-[692px] flex-col">
						<p>{post?.content}</p>
					</div>
					<div className="mt-[56px] flex w-[692px] items-center gap-5">
						<img
							src={post?.author.image}
							alt={post?.author.firstName}
							className="aspect-[1/1] w-[72px] rounded-full object-cover"
						/>
						<div className="flex flex-col">
							<p className="font-work text-xs font-medium text-ash-200">WRITTEN BY</p>
							<p className="text-2xl font-bold text-ash-300">{post?.author.firstName}</p>
							<p className="font-work text-sm text-ash-300">{post?.author.firstName}</p>
						</div>
					</div>
				</section>
				<section className="flex w-full flex-col pb-[141px] pt-[89px]">
					<h3 className="mb-[45px] text-[28px] font-bold text-ash-300">
						More from our blog
					</h3>
					<div className="w-ull grid grid-cols-3 items-center gap-[47px]">
						{posts && randomize(posts.data)?.slice(0, 3).map((post) => (
							<Link key={post.id} to={`/blog/${post.id}`} className="w-full flex flex-col gap-5">
								<img src={post.imageUrl} alt={post.title} className="w-full aspect-[1.6/1] rounded-lg" />
								<h4 className="text-xl text-ash-300 font-bold">
									{post.title.length > 30 ? `${post.title.substring(0, 30)}...` : post.title}
								</h4>
								<p className="text-ash-200 font-work">{post.content.substring(0, 100)}...</p>
								<div className="flex items-center text-ash-200 font-work">
									<img src={post.author.image} alt={post.author.firstName} className="w-[32px] h-[32px] rounded-full object-cover" />
									<p className="text-sm ml-2">{post.author.firstName}</p>
									<span className="mx-2">&bull;</span>
									<p className="text-sm">{formatDate(post.createdAt)}</p>
								</div>
							</Link>
						))}
					</div>
					<Link
						to="/blog"
						className="flex items-center self-center gap-2 font-bold text-primary mt-[66px]">
						View more articles <ArrowRight />
					</Link>
				</section>
				<section className={`flex w-full flex-col items-center py-[141px]`}>
					<div className="flex w-full flex-col items-center justify-center rounded-lg border border-ash-200 py-10">
						<h2 className="text-[32px] font-bold text-secondary-200">
							Let's Connect{" "}
							<span className="text-primary">and Bring your ideas to life</span>
						</h2>
						<p className="mb-[32px] mt-[15px] font-work text-ash-200">
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

export default Blog
