import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./support.module.scss"
import { support } from "./data"

export const Support = () => {
	return (
		<>
			<Seo title="Support Zummit Africa" />
			<Appbar />
			<Flex.Column className={styles.Support}>
				<Flex.Column className={styles.SupportInner}>
					<Flex.Column className={styles.SupportHeader}>
						<Flex.Column className={styles.SupportHeaderContent}>
							<Flex.Column className={styles.SupportHeaderContentHeading}>
								<Heading.h2>Support our mission</Heading.h2>
							</Flex.Column>
						</Flex.Column>
						<Flex.Column></Flex.Column>
						<Flex.Column className={styles.SupportHeaderItems}>
							{support.map((item, index) => (
								<Flex key={index} className={styles.SupportHeaderItem}>
									<Heading.h3>{item.label}</Heading.h3>
									<div className={styles.SupportHeaderText}>{item.content}</div>
								</Flex>
							))}
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
				<section className={styles.SupportSection}>
					<Flex.Column className={styles.SupportSectionInner}>
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
