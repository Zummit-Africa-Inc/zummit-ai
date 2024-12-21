import { useRouter } from "next/router"
import Confetti from "react-confetti"
import Image from "next/image"
import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { useWindowSize } from "@/hooks"

export const Thankyou = () => {
	const windowSize = useWindowSize()
	const router = useRouter()

	return (
		<>
			<Seo title="Thank You" />
			<Appbar />
			<Confetti width={windowSize[0]} height={windowSize[1]} numberOfPieces={500} />
			<main>
				<div className="flex h-screen items-center justify-center bg-[#EDEDFA] text-black">
					<div className="space-y-6 text-center">
						<div className="flex items-center justify-center">
							<div className="flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-white text-blue-500 shadow-lg">
								<Image src="/icons/checker.svg" alt="" width={0} height={0} className="size-11" />
							</div>
						</div>

						<h1 className=" text-4xl font-bold drop-shadow-lg">
							Thank you, your payment has been recieved!
						</h1>
						<p className="mx-auto max-w-[449px] text-lg font-medium">
							You{"'"}ve successfully paid for your Data/AI Course. Get ready to receive updates
							via your provided email.
						</p>
						<button
							onClick={() => router.push("/")}
							className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-[#460D38] shadow-md transition duration-300 ease-in-out hover:bg-neutral-200">
							Back to Home
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
