import { useRouter } from "next/router"
import classNames from "classnames"
import Link from "next/link"
import React from "react"

import ZummitIcon from "@labs/icons/zummit-logo.svg"
import { Button } from "@labs/components"
import styles from "./appbar.module.scss"

const navigation = [
	{ name: "programs", href: "/programs" },
	{ name: "graduates", href: "/testimonials" },
	{ name: "zummit community", href: "/apply-to-zummit" },
]

export const Appbar = () => {
	const [scrolled, setScrolled] = React.useState(false)
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
				<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
			</div>
		</nav>
	)
}
