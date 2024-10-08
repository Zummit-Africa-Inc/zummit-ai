import { RiLinkedinFill } from "@remixicon/react"
import Image from "next/image"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { patrons } from "./data"

export const Patron = () => {
	return (
		<>
			<Seo title="Patrons & Partners" />
			<Appbar />
			<main className="w-full">
				<section className="container mx-auto grid w-full place-items-center px-4 py-28 lg:px-0 lg:py-40">
					<div className="flex h-full w-full flex-col items-center justify-center lg:gap-3">
						<h1 className="w-full text-center text-3xl font-bold leading-[44px] lg:w-[908px] lg:text-[56px] lg:leading-[82px]">
							Our <span className="font-bold text-primary-purple">Patrons</span> and{" "}
							<span className="font-bold text-primary-purple">Patrons</span>
						</h1>
						<p className="text-center lg:w-[908px] lg:text-lg">
							We are supported by the best people and diverse skill sets in the data and AI
							space. Our community gets firsthand support and mentorship from these top talents.
						</p>
					</div>
				</section>
				<section className="container mx-auto flex flex-col px-4 lg:mb-[120px] lg:px-0">
					<div className="mx-auto flex w-full flex-col gap-9 lg:max-w-[993px] lg:gap-12">
						{patrons.map((patron) => (
							<div
								key={patron.id}
								className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-[72px] lg:even:flex-row-reverse">
								<div className="flex w-full flex-col items-center gap-4 lg:w-[408px] lg:items-start">
									<div className="relative aspect-[1.05/1] w-[221px] rounded-xl lg:w-[333px]">
										<Image
											src={patron.image}
											alt={patron.name}
											fill
											sizes="(max-width:1024px)100%"
											className="rounded-xl object-cover"
										/>
										<div className="absolute bottom-0 left-0 !z-10 flex h-12 w-full items-center justify-center rounded-b-xl bg-white/50 font-bold text-neutral-900 backdrop-blur-sm lg:text-xl">
											{patron.name}
										</div>
									</div>
									<div className="flex w-full items-center justify-center gap-5">
										<div className="flex h-9 w-fit min-w-[206px] items-center justify-center rounded-lg bg-primary-purple px-4 py-4 text-xs text-white lg:h-[54px] lg:w-[333px] lg:flex-1 lg:text-base">
											{patron.role}
										</div>
										<a
											href={patron.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											className="grid size-9 place-items-center rounded-full bg-primary-purple text-white lg:size-[54px]">
											<RiLinkedinFill className="size-4 lg:size-6" />
										</a>
									</div>
								</div>
								<div className="grid w-[315px] place-items-center lg:w-[513px]">
									<div className="h-min-h-[208px] w-full rounded-2xl bg-white p-8 text-xs lg:min-h-[336px] lg:text-base">
										{patron.about}
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
