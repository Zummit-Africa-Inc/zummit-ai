import { RiArrowDownSLine, RiMenuLine } from "@remixicon/react"
import Link from "next/link"
import React from "react"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ZummitIcon from "@labs/icons/zummit-logo.svg"
import { Button } from "../ui/button"

const navigation = [
	{ name: "home", href: "/" },
	{ name: "about", href: "/about" },
	{ name: "services", href: "" },
	{ name: "patrons & partners", href: "/patrons-and-partners" },
	{ name: "blog", href: "/blog" },
	{ name: "contact", href: "/contact" },
]

const services = [
	{ name: "Datarango", href: "https://datarango.com" },
	{ name: "Consulting & Advisory Services", href: "/consulting-and-advisory" },
	{ name: "Interships", href: "/internships" },
	{ name: "Instructor-led Training", href: "/instructor-led-training" },
]

export const Appbar = () => {
	const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
	const [isSheetOpen, setIsSheetopen] = React.useState(false)
	const [scrolled, setScrolled] = React.useState(false)

	const handleScroll = () => setScrolled(window.scrollY > 100)

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav
			className={`fixed left-0 top-0 !z-10 flex h-fit w-screen items-center justify-center px-4 py-7 transition-all duration-500 lg:h-[120px] lg:px-0 ${scrolled ? "bg-white/30 backdrop-blur backdrop-filter" : "bg-white shadow-md"}`}>
			<div className="container mx-auto flex items-center justify-between">
				<Link href="/" className="relative w-20 lg:w-[120px]">
					<ZummitIcon />
				</Link>
				<div className="hidden items-center gap-4 lg:flex">
					{navigation.map((item) => {
						if (item.href === "") {
							return (
								<Popover key={item.name} open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
									<PopoverTrigger asChild>
										<button
											key={item.name}
											className="flex items-center justify-center gap-2 font-heading font-medium capitalize">
											{item.name}{" "}
											<RiArrowDownSLine
												className={`transition-transform duration-300 ${isPopoverOpen ? "rotate-180" : ""}`}
											/>
										</button>
									</PopoverTrigger>
									<PopoverContent className="w-80 border">
										<div className="flex w-full flex-col gap-4">
											{services.map((item) => {
												if (item.href.includes("https://")) {
													return (
														<a
															key={item.name}
															href={item.href}
															className="transition-colors hover:text-neutral-500 hover:underline">
															{item.name}
														</a>
													)
												} else {
													return (
														<Link
															key={item.name}
															href={item.href}
															className="transition-colors hover:text-neutral-500 hover:underline">
															{item.name}
														</Link>
													)
												}
											})}
										</div>
									</PopoverContent>
								</Popover>
							)
						} else {
							return (
								<Link
									key={item.name}
									href={item.href}
									className="link flex items-center justify-center gap-2 font-heading font-medium capitalize">
									{item.name}
								</Link>
							)
						}
					})}
				</div>
				<div className="flex items-center gap-3">
					<Link href="/apply-to-zummit-africa">
						<Button>Get Started</Button>
					</Link>
					<Sheet open={isSheetOpen} onOpenChange={setIsSheetopen}>
						<SheetTrigger>
							<RiMenuLine className="block lg:hidden" />
						</SheetTrigger>
						<SheetContent></SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}
