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

export const Card = ({ postEdge }: Props) => {
	const { node } = postEdge

	return (
		<div>
			<p className="mb-2 text-[10px] text-neutral-800 lg:text-xs">
				{formatDate(node.publishedAt)}
			</p>
			<div className="flex w-full flex-col gap-5">
				<div className="relative aspect-[1.6/1] h-full w-full ">
					<Image
						src={String(
							node.coverImage?.url ??
								"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						)}
						alt={node.title}
						fill
						className="absolute inset-0 h-full w-full rounded-2xl  object-cover"
					/>
				</div>
				<div className="flex w-full flex-col gap-2 lg:gap-5">
					<div className="flex w-full flex-col">
						<Link
							href={`/blog/${node.slug}`}
							className="font-heading-font line-clamp-2 text-lg font-medium transition-all duration-500 hover:underline lg:text-4xl">
							{node.title}
						</Link>
					</div>
					<p className="text-sm text-neutral-500 lg:text-base">{node.brief}</p>
				</div>
			</div>
		</div>
	)
}
