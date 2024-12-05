"use client"
import { useRouter } from "next/navigation"

export default function ReadMore({ id }: { id: number }) {
	const router = useRouter()
	function handleClick() {
		router.push(`/blog/${id}`)
		console.log(id)
	}
	return (
		<div className="link text-sm font-semibold lg:text-base" onClick={handleClick}>
			read more
		</div>
	)
}
