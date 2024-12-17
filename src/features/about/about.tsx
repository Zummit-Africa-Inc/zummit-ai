import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { about } from "./data"

export const About = () => {
	return (
		<>
			<Seo title="About Us" />
			<Appbar />
			<main className="w-full">
				<section className="container mx-auto grid w-full place-items-center px-4 py-28 lg:px-0 lg:py-40">
					<div className="flex h-full w-full flex-col items-center justify-center lg:gap-[45px]">
						<h1 className="w-full text-center text-3xl font-bold leading-[44px] lg:w-[908px] lg:text-[56px] lg:leading-[82px]">
							About <span className="font-bold text-primary-purple">Zummit Africa</span>
						</h1>
					</div>
					<div className="flex w-full flex-col gap-5 lg:gap-10">
						{about.map((item, index) => (
							<div key={index} className="flex w-full flex-col gap-3 lg:gap-6">
								<p className="font-bold lg:text-xl">{item.title}</p>
								<div className="html-content text-neutral-500">{item.content}</div>
							</div>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
