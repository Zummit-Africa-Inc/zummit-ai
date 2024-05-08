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
						<Heading.h3>Ready to get started?</Heading.h3>
						<Text.p>
							Apply to Zummit Africa and join our immersive courses and community starting in{" "}
							<span>January 2025</span> to transform your career and access new opportunities.
						</Text.p>
						<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
					</Flex.Column>
				</section>
			</Flex.Column>
			<Footer />
		</>
	)
}
