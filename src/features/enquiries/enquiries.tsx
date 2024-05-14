import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./enquiries.module.scss"
import { enquiries } from "./data"

export const Enquiries = () => {
	return (
		<>
			<Seo title="Enquiries" />
			<Appbar />
			<Flex.Column className={styles.Enquiries}>
				<Flex.Column className={styles.EnquiriesInner}>
					<Flex.Column className={styles.EnquiriesHeader}>
						<Flex.Column className={styles.EnquiriesHeaderContent}>
							<Flex.Column className={styles.EnquiriesHeaderContentHeading}>
								<Heading.h2>Enquiries about our programs</Heading.h2>
							</Flex.Column>
						</Flex.Column>
						<Flex.Column></Flex.Column>
						<Flex.Column className={styles.EnquiriesHeaderItems}>
							{enquiries.map((item, index) => (
								<Flex key={index} className={styles.EnquiriesHeaderItem}>
									<Heading.h3>{item.label}</Heading.h3>
									<Flex className={styles.EnquiriesHeaderText}>{item.content}</Flex>
								</Flex>
							))}
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
				<section className={styles.EnquiriesSection}>
					<Flex.Column className={styles.EnquiriesSectionInner}>
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
