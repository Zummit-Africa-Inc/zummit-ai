import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import Image from "next/image"

// export async function generateStaticParams() {
// 	const posts = await fetch("https://.../posts").then((res) => res.json())

// 	return posts.map((post: any) => ({
// 		id: post.slug,
// 	}))
// }

export const BlogPost = () => {
	return (
		<>
			<Seo title={``} />
			<Appbar />
			<main className="w-full">
				<header className="container w-full max-w-[1200px]">
					<Image
						src="/assets/images/BlogPost-img.jpg"
						alt="blog post image"
						width={1200}
						height={500}
					/>
				</header>
			</main>
			<Footer />
		</>
	)
}
