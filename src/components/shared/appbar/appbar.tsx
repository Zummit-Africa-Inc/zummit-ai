import { RiMenuLine } from "@remixicon/react"
import { useRouter } from "next/router"
import classNames from "classnames"
import Link from "next/link"
import React from "react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ZummitIcon from "@labs/icons/zummit-logo.svg"
import { Button, Flex } from "@labs/components"
import styles from "./appbar.module.scss"

const navigation = [
	{ name: "programs", href: "/programs" },
	{ name: "our graduates", href: "/testimonials" },
	{ name: "patrons & partners", href: "/patrons" },
	{ name: "zummit community", href: "/apply-to-zummit-africa" },
]

export const Appbar = () => {
	const [scrolled, setScrolled] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)
	const router = useRouter()

	const isActivePath = (href: string) => router.pathname === href

	const handleScroll = () => setScrolled(window.scrollY > 100)

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav className={classNames([styles.Appbar, styles[`Appbar--${scrolled}`]])}>
			<div className={styles.AppbarInner}>
				<Link href="/" className={styles.AppbarLogo}>
					<ZummitIcon />
				</Link>
				<div className={styles.AppbarNavigation}>
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={classNames([
								styles.AppbarNavigationItem,
								styles[`AppbarNavigationItem--${isActivePath(item.href)}`],
							])}>
							{item.name}
						</Link>
					))}
				</div>
				<Button.a href="/apply-to-zummit-africa" className={styles.AppbarButton}>
					Apply Now
				</Button.a>
				<div className={styles.AppbarHamburgerButton}>
					<Sheet onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
						<SheetTrigger>
							<RiMenuLine />
						</SheetTrigger>
						<SheetContent>
							<Flex.Column gap={24} className="py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className="capitalize">
										{item.name}
									</Link>
								))}
								<Button.a href="/apply-to-zummit-africa" onClick={() => setIsOpen(false)}>
									Apply Now
								</Button.a>
							</Flex.Column>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}
