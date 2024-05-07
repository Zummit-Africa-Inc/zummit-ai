import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./home.module.scss"

export const Home = () => {
	return (
		<>
			<Seo
				title="Welcome to Zummit"
				description="Discover the power of Zummit - your gateway to a transformative learning experience."
			/>
			<Appbar />
			<main className={styles.Home}>
				<div className={styles.HomeInner}>
					<div className={styles.HomeHeader}></div>
				</div>
			</main>
			<Footer />
		</>
	)
}
