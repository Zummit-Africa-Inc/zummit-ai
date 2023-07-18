import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { useState } from "react"
import axios from "axios"

import { Button, Footer, Navbar, PaddedBlock, Pagination } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import { formatDate } from "utils"
import POSTS from "MOCK_DATA.json"
import { EVENTS } from "constants"
import { Post } from "types"

const Blogs = () => {
	const [posts, setPosts] = useState<Post[]>(POSTS)
  const [page, setPage] = useState(1)
	usePageTitle("Blog")
	useScrollToTop()

	const { handleChange, handleSubmit } = useFormik({
		initialValues: { email: "" },
		onSubmit: (data) => console.log(data),
	})

  const handlePagination = () => {
    if (posts.length > 6) {
      return (
        <Pagination current={page} onPageChange={onPageChange} pageSize={6} total={posts.length} />
      )
    } else return null
  }

  const renderData = () => {
    const startIndex = (page - 1) * 6
    const endIndex = startIndex + 6
    const currentPage = posts.slice(startIndex, endIndex)
    return currentPage
  }

  const onPageChange = (value: number) => setPage(value)

	useQuery({
		queryFn: () => axios.get(""),
		queryKey: ["get blogposts"],
		onSuccess: ({ data }) => {
			console.log(data)
			setPosts(data.data)
		},
		enabled: false,
	})

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col items-center py-[99px] mb-[182px]">
					<div className="flex w-full flex-col items-center text-center">
						<p className="mb-10 mt-[10px] w-4/5 text-[32px] font-bold text-[#333]">
							Discover Articles and
							<span className="mx-1 text-secondary">
								Expert <br /> Perspectives
							</span>
							on AI
						</p>
						<p className="w-3/4 font-work text-xl text-gray-300">
							Mattis dui fames euismod pretium. Lacus metus iaculis non tortor aliquet
							habitasse id. Sagittis mi donec sed velit suspendisse mollis. Tincidunt
							sit.
						</p>
						<form
							onSubmit={handleSubmit}
							className="mt-[43px] flex w-[421px] items-center rounded-lg border border-[#949494] pl-5 p-1">
							<input
								type="email"
								id="email"
								onChange={handleChange}
								className="w-full"
								placeholder="Enter your email"
							/>
							<Button
								label="Subscribe"
								type="submit"
								className="bg-primary px-6 py-3 text-white"
							/>
						</form>
					</div>
				</section>
        <section className="w-full flex flex-col mb-[202px]">
          <p className="text-[28px] text-[#333] font-bold mb-[51px]">
            Latest Articles
          </p>
          <div className="w-full grid grid-cols-2 items-center gap-10">
            <div className="w-full">
              {posts && (
                <Link to={`/blog/${posts[0].id}`} className="w-full flex flex-col gap-6">
                  <img src={posts[0].imageUrl} alt="" className="w-full aspect-[1.5/1] rounded-lg" />
                  <p className="text-2xl text-[#333] font-bold">{posts[0].title}</p>
                  <p className="text-gray-400 font-work">{posts[0].content.substring(0, 200)}...</p>
                  <div className="flex items-center text-gray-400 font-work">
                    <img src={posts[0].author.image} alt="" className="w-[32px] h-[32px] rounded-full object-cover" />
                    <p className="text-sm ml-2">{posts[0].author.firstName}</p>
                    <span className="mx-2">&bull;</span>
                    <p className="text-sm">{formatDate(posts[0].createdAt)}</p>
                  </div>
                </Link>
              )}
            </div>
            <div className="w-full flex flex-col gap-[40px]">
              {posts.slice(1, 4).map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="w-full flex items-center gap-[33px]">
                  <img src={post.imageUrl} alt="" className="w-[168px] aspect-[1/1] rounded-md object-cover" />
                  <div className="flex flex-col gap-5">
                    <p className="text-xl text-[#333] font-bold">{post.title}</p>
                    <p className="text-gray-400 font-work">{post.content.substring(0, 70)}...</p>
                    <div className="flex items-center text-gray-400 font-work">
                      <img src={post.author.image} alt="" className="w-[32px] h-[32px] rounded-full object-cover" />
                      <p className="text-sm ml-2">{post.author.firstName}</p>
                      <span className="mx-2">&bull;</span>
                      <p className="text-sm">{formatDate(post.createdAt)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col mb-[202px]">
          <p className="text-[28px] text-[#333] font-bold mb-[51px]">
            Featured and Highlights
          </p>
          <div className="w-full grid grid-cols-3 items-center gap-[47px] mb-[93px]">
            {renderData().map((post) => (
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
          {handlePagination()}
        </section>
        <section className="w-full flex flex-col items-center mt-[170px]">
          <p className="text-[28px] text-[#333] font-bold mb-[51px]">
            Events and Webinars
          </p>
          <div className="w-full grid grid-cols-3 items-center gap-[41px]">
            {EVENTS.map((event, index) => (
              <div key={index} className="w-full flex flex-col items-center gap-5 text-center">
                <img src={event.image} alt="" className="w-full aspect-[1.6/1] rounded-lg object-cover" />
                <p className="text-xl text-[#333] font-bold">{event.title}</p>
                <div className="flex items-center text-gray-400 font-work">
                      <img src={event.host.image} alt="" className="w-[32px] h-[32px] rounded-full object-cover" />
                      <p className="text-sm ml-2">{event.host.name}</p>
                      <span className="mx-2">&bull;</span>
                      <p className="text-sm">{new Date(event.date).toDateString()}</p>
                    </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex w-full flex-col items-center mt-[141px] mb-[83px]">
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

export default Blogs
