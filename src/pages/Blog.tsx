import { Link, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import axios from "axios"

import { Button, Footer, Loader, Navbar, PaddedBlock } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import { formatDate, randomize } from "utils"
import { ArrowRight } from "assets/icons-tsx"
import POSTS from "MOCK_DATA.json"
import { Post } from "types"

const Blog = () => {
	const [post, setPost] = useState<Post>()
	const { id } = useParams()
	usePageTitle("Blog")
	useScrollToTop()

	useEffect(() => {
		const post = POSTS.find((post) => post.id === id)
		setPost(post)
	}, [])

	useQuery({
		queryFn: () => axios.get(""),
		queryKey: ["get blogpost", id],
		onSuccess: ({ data }) => {
			console.log(data)
		},
		enabled: false,
	})

	if (!post) return <Loader />

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col items-center pb-[148px] pt-[109px]">
					<div className="flex w-[692px] flex-col">
						<p className="mb-6 mt-[10px] text-[32px] font-bold text-[#333]">
							{post?.title}
						</p>
						<div className="flex items-center font-work text-gray-400">
							<img src={post.author.image} alt="" className="h-[32px] w-[32px] rounded-full object-cover" />
							<p className="ml-2 text-sm">{post.author.firstName}</p>
							<span className="mx-2">&bull;</span>
							<p className="text-sm">{formatDate(post.createdAt)}</p>
						</div>
					</div>
					<img src={post.imageUrl} alt="" className="mb-[69px] mt-[44px] aspect-[2.4/1] w-[834px] rounded-lg object-cover" />
					<div className="flex w-[692px] flex-col">
						<p>{post.content}</p>
					</div>
					<div className="mt-[56px] flex w-[692px] items-center gap-5">
						<img
							src={post.author.image}
							alt=""
							className="aspect-[1/1] w-[72px] rounded-full object-cover"
						/>
						<div className="flex flex-col">
							<p className="font-work text-xs font-medium text-gray-400">WRITTEN BY</p>
							<p className="text-2xl font-bold text-[#333]">{post.author.firstName}</p>
							<p className="font-work text-sm text-[#333]">{post.author.firstName}</p>
						</div>
					</div>
				</section>
				<section className="flex w-full flex-col pb-[141px] pt-[89px]">
					<p className="mb-[45px] text-[28px] font-bold text-[#333]">
						More from our blog
					</p>
					<div className="w-ull grid grid-cols-3 items-center gap-[47px]">
						{randomize(POSTS)?.slice(0, 3).map((post) => (
							<Link key={post.id} to={`/blog/${post.id}`} className="w-full flex flex-col gap-5">
								<img src={post.imageUrl} alt="" className="w-full aspect-[1.6/1] rounded-lg" />
								<p className="text-xl text-[#333] font-bold">
									{post.title.length > 30 ? `${post.title.substring(0, 30)}...` : post.title}
								</p>
								<p className="text-gray-400 font-work">{post.content.substring(0, 100)}...</p>
								<div className="flex items-center text-gray-400 font-work">
									<img src={post.author.image} alt="" className="w-[32px] h-[32px] rounded-full object-cover" />
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

export default Blog
