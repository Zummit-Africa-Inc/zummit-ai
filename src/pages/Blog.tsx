import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
// import { useState } from "react"
import axios from "axios"

import { Footer, Loader, Navbar, PaddedBlock } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import POSTS from "MOCK_DATA.json"
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
			<PaddedBlock>
				<section className="flex w-full flex-col py-[99px]">
					<p className="mb-6 mt-[10px] text-[32px] font-bold text-[#333]">
						{post?.title}
					</p>
				</section>
			</PaddedBlock>
			<Footer />
		</>
	)
}

export default Blog
