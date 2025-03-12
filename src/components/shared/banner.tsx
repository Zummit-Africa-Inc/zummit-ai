import Image from "next/image"
import Link from "next/link"
import React from "react"

import { PostEdge } from "../../../generated/graphql"

interface Props {
	postEdge: PostEdge
}

const formatDate = (date: Date | string) => {
	return new Intl.DateTimeFormat("en-NG", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	}).format(new Date(date))
}

export const Banner = ({ postEdge }: Props) => {
	const { node } = postEdge

	return (
		<div className="w-full lg:h-[357px]">
			<section className={" relative h-full "}>
				<Image
					src={String(
						node.coverImage?.url ??
							"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					)}
					alt={node.title}
					fill
					className="absolute inset-0 h-full  w-full rounded-xl object-cover"
				/>
				<div className="absolute inset-0 rounded-xl bg-black/40"></div>
				<div className=" relative mb-10 px-6 pt-16 text-white lg:mb-0 lg:pt-20 ">
					<h2 className="text-sm">{formatDate(node.publishedAt)}</h2>
					<Link
						href={`/blog/${node.slug}`}
						className="font-heading-font line-clamp-2 pt-3 text-lg font-medium transition-all duration-500 hover:underline lg:text-4xl">
						{node.title}
					</Link>
					<div className="flex w-full items-center space-x-3 pt-3">
						{/* <div className="w-ful flex items-center justify-start space-x-1">
							<Image
								src="/message.svg"
								alt=""
								width={10}
								height={10}
								className="min-h-[1rem] min-w-[1rem]"
							/>{" "}
							<h2 className="text-sm">150</h2>
						</div> */}
						<div className=" flex items-center justify-start space-x-1">
							<Image
								src="/eye.svg"
								alt=""
								width={10}
								height={10}
								className="min-h-[1rem] min-w-[1rem]"
							/>{" "}
							<h2 className="text-sm">{node.views}</h2>
						</div>
					</div>
					<div className="flex w-full items-center space-x-2  pt-5 text-black">
						{node.tags
							?.map((tag) => (
								<button
									key={tag.id}
									className={` rounded-full bg-white px-2 py-1 text-[12px] transition-all duration-500`}>
									{tag.name}
								</button>
							))
							.slice(0, 2)}
					</div>
				</div>
			</section>
		</div>
	)
}
