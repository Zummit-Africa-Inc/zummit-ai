import Image from "next/image"
import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./patron.module.scss"
import { patrons } from "./data"

export const Patron = () => {
	return (
		<>
			<Seo title="Patrons & Partners" />
			<Appbar />
			<Flex.Column className={styles.Patron}>
				<Flex.Column className={styles.PatronInner}>
					<Flex.Column className={styles.PatronHeader}>
						<Flex.Column className={styles.PatronHeaderContent}>
							<Flex.Column className={styles.PatronHeaderContentHeading}>
								<Heading.h2>Patrons & Partners</Heading.h2>
								<Text.p>
									We are supported by the best people and diverse skill sets in the data and AI
									space. Our community gets firsthand support and mentorship from these top talents
								</Text.p>
							</Flex.Column>
						</Flex.Column>
						{patrons.map((patron) => (
							<Flex key={patron.id} className={styles.PatronHeaderItems}>
								<Flex.Column className={styles.PatronHeaderItem}>
									<Flex className={styles.PatronHeaderItemImage}>
										<Image
											src={patron.image}
											alt={patron.name}
											fill
											sizes="(max-width: 1024px) 100%"
										/>
									</Flex>
									<Heading.h3>{patron.name}</Heading.h3>
									<Text.p>{patron.role}</Text.p>
								</Flex.Column>
								<Flex.Column gap={24} className={styles.PatronHeaderItem}>
									<Text.p>{patron.about}</Text.p>
									<Button.a href={patron.linkedin} target="_blank">
										See on LinkedIn
									</Button.a>
								</Flex.Column>
							</Flex>
						))}
					</Flex.Column>
				</Flex.Column>
				<section className={styles.PatronSection}>
					<Flex.Column className={styles.PatronSectionInner}>
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
