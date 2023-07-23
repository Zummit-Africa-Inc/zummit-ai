import { useMutation, useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { useState } from "react"
import axios from "axios"

import { Button, Footer, Loader, Navbar, PaddedBlock, Pagination, Spinner } from "components"
import { useEventTracker, usePageTitle, usePageTracker, useScrollToTop } from "hooks"
import { PaginationDto } from "interfaces"
import { formatDate } from "utils"
import { EVENTS } from "constants"
import { Post } from "types"

const Blogs = () => {
	const [posts, setPosts] = useState<PaginationDto<Post>>()
  const registerEvent = useEventTracker("cta")
  const [page, setPage] = useState(1)
	usePageTitle("Blog")
  usePageTracker()
	useScrollToTop()

	const mutation = useMutation({
		mutationFn: (email: string) => axios.post(`${import.meta.env.VITE_API_URL}`, {email}),
		mutationKey: ["newsltter subscription"],
		onSuccess: ({data}) => console.log(data),
		onError: (error) => console.log(error)
	})

	const { handleChange, handleSubmit } = useFormik({
		initialValues: { email: "" },
		onSubmit: (data) => {
			console.log(data)
			registerEvent("form submission", "subscription")
		},
	})

  const handlePagination = () => {
    if (posts) {
      return (
        <Pagination current={page} onPageChange={onPageChange} pageSize={6} total={posts.data.length} />
      )
    } else return null
  }

  const onPageChange = (value: number) => setPage(value)

	const query = useQuery({
		queryFn: () => axios.get(`${import.meta.env.VITE_API_URL}/blog/all?page=${page}&itemsPerPage=6`),
		queryKey: ["get blogposts", page],
		onSuccess: ({ data }) => {
			console.log(data)
			setPosts(data)
		},
	})

  if (query.isLoading) return <Loader />

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col items-center py-[99px] mb-[182px]">
					<div className="flex w-full flex-col items-center text-center">
						<h2 className="mb-10 mt-[10px] w-4/5 text-[32px] font-bold text-[#333]">
							Discover Articles and
							<span className="mx-1 text-secondary">
								Expert <br /> Perspectives
							</span>
							on AI
						</h2>
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
								label={mutation.isLoading ? <Spinner /> : "Subscribe"}
								type="submit"
                disabled={mutation.isLoading}
								className="w-[124px] bg-primary px-6 py-3 text-white"
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
              {posts?.data && (
                <Link to={`/blog/${posts.data[0]?.id}`} className="w-full flex flex-col gap-6">
                  <img src={posts.data[0]?.imageUrl} alt={posts.data[0]?.title} className="w-full aspect-[1.5/1] rounded-lg" />
                  <h3 className="text-2xl text-[#333] font-bold">{posts.data[0]?.title}</h3>
                  <p className="text-gray-400 font-work">{posts.data[0]?.content.substring(0, 200)}...</p>
                  <div className="flex items-center text-gray-400 font-work">
                    <img src={posts.data[0]?.author.image} alt={posts.data[0]?.author.firstName} className="w-[32px] h-[32px] rounded-full object-cover" />
                    <p className="text-sm ml-2">{posts.data[0]?.author.firstName}</p>
                    <span className="mx-2">&bull;</span>
                    <p className="text-sm">{formatDate(posts.data[0]?.createdAt)}</p>
                  </div>
                </Link>
              )}
            </div>
            <div className="w-full flex flex-col gap-[40px]">
              {posts?.data && posts.data.slice(1, 4).map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="w-full flex items-center gap-[33px]">
                  <img src={post.imageUrl} alt={post.title} className="w-[168px] aspect-[1/1] rounded-md object-cover" />
                  <div className="flex flex-col gap-5">
                    <h3 className="text-xl text-[#333] font-bold">{post.title}</h3>
                    <p className="text-gray-400 font-work">{post.content.substring(0, 70)}...</p>
                    <div className="flex items-center text-gray-400 font-work">
                      <img src={post.author.image} alt={post.author.firstName} className="w-[32px] h-[32px] rounded-full object-cover" />
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
            {posts?.data && posts.data.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="w-full flex flex-col gap-5">
                <img src={post.imageUrl} alt={post.title} className="w-full aspect-[1.6/1] rounded-lg" />
                <p className="text-xl text-[#333] font-bold">
                  {post.title.length > 30 ? `${post.title.substring(0, 30)}...` : post.title}
                </p>
                <p className="text-gray-400 font-work">{post.content.substring(0, 100)}...</p>
                <div className="flex items-center text-gray-400 font-work">
                  <img src={post.author.image} alt={post.author.firstName} className="w-[32px] h-[32px] rounded-full object-cover" />
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
                <h4 className="text-xl text-[#333] font-bold">{event.title}</h4>
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

export default Blogs
