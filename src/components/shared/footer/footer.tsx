import Link from "next/link"
import React from "react"

import { Heading, Text } from "@labs/components"
import { links, navigation } from "./data"
import styles from "./footer.module.scss"

export const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.FooterInner}>
				<div className={styles.FooterNavigation}>
					{navigation.map((item) => (
						<div key={item.label} className={styles.FooterNavigationList}>
							<Heading.h4 className={styles.FooterNavigationTitle}>{item.label}</Heading.h4>
							<div className={styles.FooterNavigationLinks}>
								{item.links.map((link) => {
									if (link.as === "link") {
										return (
											<Link key={link.href} href={link.href} className={styles.FooterNavigationItem}>
												{link.name}
											</Link>
										)
									} else {
										return (
											<a
												key={link.href}
												href={link.href}
												target="_blank"
												className={styles.FooterNavigationItem}>
												{link.name}
											</a>
										)
									}
								})}
							</div>
						</div>
					))}
				</div>
				<hr className={styles.FooterDivider} />
				<div className={styles.FooterCopyright}>
					<Text.p>&copy; Zummit Africa</Text.p>
					{links.map((link) => (
						<Link key={link.href} href={link.href}>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}
