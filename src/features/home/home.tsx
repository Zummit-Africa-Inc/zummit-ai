import { motion } from "framer-motion"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import { useInterval } from "@labs/utils"
import { content, counts } from "./data"
import styles from "./home.module.scss"

const words = ["Artificial Intelligence", "Software Development"]
const transition = {
	type: "tween",
	delay: 0.1,
	duration: 1,
	easings: ["easeIn", "easeOut"],
}

export const Home = () => {
	const [current, setCurrent] = React.useState(0)

	const handleSwap = () => {
		setCurrent((current + 1) % words.length)
	}

	useInterval(() => handleSwap(), 5000)

	return (
		<>
			<Seo
				title="Welcome to Zummit"
				description="Discover the power of Zummit - your gateway to a transformative learning experience."
			/>
			<Appbar />
			<main className={styles.Home}>
				<div className={styles.HomeInner}>
					<Flex.Column className={styles.HomeHeader}>
						<Flex.Column className={styles.HomeHeaderContent}>
							<Flex.Column className={styles.HomeHeaderContentHeading}>
								<Heading.h2>
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={transition}>
										{words[current]}
									</motion.span>{" "}
									<br />
									courses to build your career in Tech.
								</Heading.h2>
								<Text.p>
									Apply to Zummit Africa and join our immersive courses and community starting in{" "}
									<span>January 2025</span> to transform your career and access new opportunities.
								</Text.p>
								<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
							</Flex.Column>
							<Flex className={styles.HomeHeaderCounter}>
								{counts.map((count) => (
									<Flex.Column key={count.label} className={styles.HomeHeaderCounterItem}>
										<Heading.h2>
											{count.value} {count.metric}
										</Heading.h2>
										<Text.p>{count.label}</Text.p>
									</Flex.Column>
								))}
							</Flex>
						</Flex.Column>
					</Flex.Column>
				</div>
				<section className={styles.HomeSection}>
					<Flex className={styles.HomeSectionInner}>
						<Flex className={styles.HomeSectionWrapper}>
							{content.map((item, index) => (
								<Flex.Column key={index} className={styles.HomeSectionItem}>
									<Flex className={styles.HomeSectionItemImage}>
										<Image src={item.image} alt="" fill />
									</Flex>
									<Heading.h4>{item.label}</Heading.h4>
									<Text.p>{item.content}</Text.p>
									<Link href={item.link.href}>{item.link.name}</Link>
								</Flex.Column>
							))}
						</Flex>
					</Flex>
				</section>
				<section className={classNames([styles.HomeSection, styles["HomeSection--solid"]])}>
					<Flex.Column
						className={classNames([
							styles.HomeSectionInner,
							styles["HomeSectionInner--center"],
						])}>
						<Heading.h3>Ready to get started?</Heading.h3>
						<Text.p>
							Apply to Zummit Africa and join our immersive courses and community starting in{" "}
							<span>January 2025</span> to transform your career and access new opportunities.
						</Text.p>
						<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
					</Flex.Column>
				</section>
			</main>
			<Footer />
		</>
	)
}
