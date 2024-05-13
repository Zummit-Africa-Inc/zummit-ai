import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import { content, counts } from "./data"
import styles from "./home.module.scss"

export const Home = () => {
	return (
		<>
			<Seo
				title="Empowering Africa through AI"
				description="Discover the power of Zummit - your gateway to a transformative learning experience."
			/>
			<Appbar />
			<main className={styles.Home}>
				<div className={styles.HomeInner}>
					<Flex.Column className={styles.HomeHeader}>
						<Flex.Column className={styles.HomeHeaderContent}>
							<Flex.Column className={styles.HomeHeaderContentHeading}>
								<Heading.h2>
									<span>Zummit</span> School of AI and Data
								</Heading.h2>
								<Text.p>
									The best place to learn hands-on <span>Artificial Intelligence</span>
									and <span>Data</span> skills in Africa.
								</Text.p>
								<Flex gap={24}>
									<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
									<Button.a href="https://datarango.com" target="_blank" outline>
										Self-paced Learning
									</Button.a>
								</Flex>
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
										<Image src={item.image} alt="" fill sizes="(max-width: 1024px) 100%" />
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
						<Heading.h3>Why join us?</Heading.h3>
						<Text.p>
							We have the best data scientist and Machine Learning engineers supporting our
							training program.
						</Text.p>
						<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
					</Flex.Column>
				</section>
			</main>
			<Footer />
		</>
	)
}
