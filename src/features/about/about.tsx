import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./about.module.scss"
import { about } from "./data"

export const About = () => {
	return (
		<>
			<Seo title="About Us" />
			<Appbar />
			<Flex.Column className={styles.About}>
				<Flex.Column className={styles.AboutInner}>
					<Flex.Column className={styles.AboutHeader}>
						<Flex.Column className={styles.AboutHeaderContent}>
							<Flex.Column className={styles.AboutHeaderContentHeading}>
								<Heading.h2>We are empowering Africa through Tech Education</Heading.h2>
								<Text.p>
									We believe in the transformative power of technology. Our mission is to empower
									young Africans through artificial intelligence and software development skills,
									so they can create a better future for themselves and their communities
								</Text.p>
							</Flex.Column>
						</Flex.Column>
						<Flex.Column></Flex.Column>
						<Flex.Column className={styles.AboutHeaderItems}>
							{about.map((item, index) => (
								<Flex key={index} className={styles.AboutHeaderItem}>
									<Heading.h3>{item.title}</Heading.h3>
									<div className={styles.AboutHeaderText}>{item.content}</div>
								</Flex>
							))}
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
				<section className={styles.AboutSection}>
					<Flex.Column className={styles.AboutSectionInner}>
						<Heading.h3>Why join us?</Heading.h3>
						<Text.p>
							We have the best data scientist and Machine Learning engineers supporting our
							training program.
						</Text.p>
						<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
					</Flex.Column>
				</section>
			</Flex.Column>
			<Footer />
		</>
	)
}
