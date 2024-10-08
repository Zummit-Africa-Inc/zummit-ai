import { useRouter } from "next/router"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"

export const Slug = () => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<>
			<Seo title={``} />
			<Appbar />
			<main className="w-full">{slug}</main>
			<Footer />
		</>
	)
}
