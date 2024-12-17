import Link from "next/link"
import React from "react"

import ZummitIcon from "@labs/icons/zummit-logo.svg"
import { links, navigation } from "./data"

export const Footer = () => {
	return (
		<footer className="w-screen bg-white px-4 py-12 lg:px-0">
			<div className="container mx-auto flex flex-col items-center justify-center">
				<div className="flex w-full flex-col items-start gap-[33px] lg:flex-row lg:gap-[161px]">
					<div className="flex w-full flex-col items-center gap-2 lg:max-w-[364px] lg:items-start">
						<Link href="/" className="w-[72px] lg:w-[224px]">
							<ZummitIcon />
						</Link>
						<p className="w-[242px] text-center text-xs lg:w-[293] lg:text-left lg:text-base">
							Empowering the Next Generation of AI & Data Science Leaders.
						</p>
					</div>
					<div className="flex w-full flex-wrap items-start justify-between gap-10 lg:flex-1">
						{navigation.map(({ label, links }) => (
							<div key={label} className="flex w-[150px] flex-col gap-5 lg:min-w-fit lg:flex-1">
								<p className="text-sm font-medium lg:text-lg">{label}</p>
								<div className="flex w-full flex-col gap-4">
									{links.map((link, index) => (
										<Link
											key={index}
											href={link.href}
											className="link text-xs text-neutral-500 lg:text-base">
											{link.name}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
				<hr className="my-7 w-full border-neutral-300 lg:my-10" />
				<div className="flex w-full flex-col items-center justify-center text-sm font-medium text-neutral-600 lg:flex-row lg:justify-between">
					<p>&copy; {new Date().getFullYear()} Zummit Africa.</p>
					<div className="flex items-center gap-3">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-neutral-500 transition-colors hover:text-neutral-700">
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
