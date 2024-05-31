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
								<Heading.h2>Fill the application form below</Heading.h2>
								<Text.p>
									Thanks for your interest in joining the Zummit Africa learning community cohort.
								</Text.p>
							</Flex.Column>
							<Flex className={styles.ApplyHeaderFormWrapper}>
								<a href="https://forms.gle/UvFdciri2V3cb9GD7" target="_blank">
									<Button type="button">Apply</Button>
								</a>
							</Flex>
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
			</Flex.Column>
			<Footer />
		</>
	)
}
