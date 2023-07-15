import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import axios from "axios"

import { Button, Footer, Navbar, PaddedBlock, SubscriptionModal } from "components"
import { usePageTitle, useScrollToTop } from "hooks"
import { POSTS } from "constants"
import { Post } from "types"

const Blogs = () => {
  const [isModalopen, setIsModalopen] = useState(false)
  const [posts, setPosts] = useState<Post[]>(POSTS)
	usePageTitle("Blog")
	useScrollToTop()

  useQuery({
    queryFn: () => axios.get(""),
    queryKey: ["get blogposts"],
    onSuccess: ({data}) => {
      console.log(data)
      setPosts(data.data)
    },
    enabled: false,
  })

	return (
		<>
    {isModalopen && <SubscriptionModal close={() => setIsModalopen(false)} />}
			<Navbar />
      <PaddedBlock>
			<section className="flex w-full flex-col py-[99px]">
        <div className="w-full">
          <p className="font-medium uppercase text-gray-400">our blog</p>
          <p className="mb-10 mt-[10px] w-4/5 text-[32px] font-bold text-[#333]">
            Discover a variety
            <span className="text-secondary">
              of innovative trends and valuable resources handpicked by{" "}
            </span>
            experienced tech <br /> professionals at Zummit.
          </p>
          <Button
            label="Subscribe"
            onClick={() => setIsModalopen(true)}
            className="bg-primary text-white px-6 py-3"
          />
        </div>
        <div className="w-full flex flex-col gap-[203px] mt-[298px]">
          {posts.map((post) => (
            <div key={post.id} className="w-full flex items-center gap-[180px] even:flex-row-reverse">
              <img src={post.imageUrl} alt="" className="w-[589px] aspect-[1.6/1] rounded-lg object-cover" />
              <div className="flex flex-col gap-6">
                <p className="text-2xl text-[#333] font-bold">{post.title}</p>
                <p className="text=lg text-gray-400">{post.content.substring(0, 200)}...</p>
              </div>
            </div>
          ))}
        </div>
			</section>
      </PaddedBlock>
			<Footer />
		</>
	)
}

export default Blogs
