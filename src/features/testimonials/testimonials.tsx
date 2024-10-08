// import { EffectCoverflow, Navigation, A11y } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"
// import classNames from "classnames"
// import Image from "next/image"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
// import { testimonials } from "./data"

import "swiper/scss"
import "swiper/scss/navigation"

export const Testimonials = () => {
	return (
		<>
			<Seo title="Our Graduates" />
			<Appbar />
			<main></main>
			<Footer />
		</>
	)
}
