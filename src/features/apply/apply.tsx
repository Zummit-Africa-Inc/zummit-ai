import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./apply.module.scss"

export const Apply = () => {
	return (
		<>
			<Seo title="Apply to Zummit Africa" />
			<Appbar />
			<Flex.Column className={styles.Apply}>
				<Flex.Column className={styles.ApplyInner}>
					<Flex.Column className={styles.ApplyHeader}>
						<Flex.Column className={styles.ApplyHeaderContent}>
							<Flex.Column className={styles.ApplyHeaderContentHeading}>
								<Heading.h2>Registration has ended</Heading.h2>
								<Text.p>
									Thanks for your interest in joining the Zummit Africa learning community cohort
									1. Unfortunately, registration has ended. Kindly check back to join the next
									cohort.
								</Text.p>
							</Flex.Column>
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
				<section className={styles.ApplySection}>
					<Flex.Column className={styles.ApplySectionInner}>
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
