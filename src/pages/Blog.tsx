import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
// import { useState } from "react"
import axios from "axios"

import { usePageTitle, useScrollToTop } from "hooks"
import { Footer, Loader, Navbar } from "components"
import { POSTS } from "constants"
// import { Post } from "types"

const Blog = () => {
	// const [post, setPost] = useState<Post>()
	const { id } = useParams()
	usePageTitle("Blog")
	useScrollToTop()

	const post = POSTS.find((post) => post.id === id)

	useQuery({
		queryFn: () => axios.get(""),
		queryKey: ["get blogposts"],
		onSuccess: ({ data }) => {
			console.log(data)
		},
		enabled: false,
	})

  if (!post) return <Loader />

	return (
		<>
			<Navbar />
			<section className="flex w-full flex-col px-2 py-[99px] md:px-[120px]">
				{/* <p className="font-medium uppercase text-gray-400">get in touch with us</p> */}
				<p className="mb-6 mt-[10px] text-[32px] font-bold text-[#333]">
					{post?.title}
				</p>
			</section>
			<Footer />
		</>
	)
}

export default Blog
