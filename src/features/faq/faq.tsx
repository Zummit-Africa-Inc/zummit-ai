import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./faq.module.scss"
import { faqs } from "./data"

export const Faq = () => {
	return (
		<>
			<Seo title="Frequently Asked Questions" />
			<Appbar />
			<Flex.Column className={styles.Faq}>
				<Flex.Column className={styles.FaqInner}>
					<Flex.Column className={styles.FaqHeader}>
						<Flex.Column className={styles.FaqHeaderContent}>
							<Flex.Column className={styles.FaqHeaderContentHeading}>
								<Heading.h2>Frequently Asked Questions</Heading.h2>
							</Flex.Column>
						</Flex.Column>
						<Flex.Column></Flex.Column>
						<Flex.Column className={styles.FaqHeaderItems}>
							{faqs.map((faq, index) => (
								<Flex key={index} className={styles.FaqHeaderItem}>
									<Heading.h3>{faq.label}</Heading.h3>
									<Text.p>{faq.content}</Text.p>
								</Flex>
							))}
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
				<section className={styles.FaqSection}>
					<Flex.Column className={styles.FaqSectionInner}>
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
