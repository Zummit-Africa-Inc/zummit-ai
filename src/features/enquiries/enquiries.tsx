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
									<Text.p>{item.content}</Text.p>
								</Flex>
							))}
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
				<section className={styles.EnquiriesSection}>
					<Flex.Column className={styles.EnquiriesSectionInner}>
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
