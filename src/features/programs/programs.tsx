import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./programs.module.scss"
import { programs } from "./data"

export const Programs = () => {
	return (
		<>
			<Seo title="Programs" />
			<Appbar />
			<main className={styles.Programs}>
				<div className={styles.ProgramsInner}>
					<Flex.Column className={styles.ProgramsHeader}>
						<Flex.Column className={styles.ProgramsHeaderContent}>
							<Flex.Column className={styles.ProgramsHeaderContentHeading}>
								<Heading.h2>Start your tech career with the most in-demand skills</Heading.h2>
								<Text.p>
									Apply to Zummit Africa and join our immersive courses and community starting in{" "}
									<span>January 2025</span> to transform your career and access new opportunities.
								</Text.p>
							</Flex.Column>
						</Flex.Column>
					</Flex.Column>
				</div>
				<Flex.Column className={styles.ProgramsSection}>
					<Flex.Column className={styles.ProgramsSectionInner}>
						{programs.map((program) => (
							<Flex key={program.id} id={program.id} className={styles.ProgramsContent}>
								<Flex className={styles.ProgramsContentItems}>
									<Heading.h3>{program.name}</Heading.h3>
								</Flex>
								<Flex.Column className={styles.ProgramsContentItems}>
									{program.modules.map((module, index) => (
										<Flex.Column key={index} className={styles.ProgramsContentItem}>
											<Heading.h4>{module.title}</Heading.h4>
											<Text.p>{module.overview}</Text.p>
										</Flex.Column>
									))}
									<Flex className={styles.ProgramsContentFooter}>
										<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
									</Flex>
								</Flex.Column>
							</Flex>
						))}
					</Flex.Column>
				</Flex.Column>
				<section className={styles.ProgramSection}>
					<Flex.Column className={styles.ProgramSectionInner}>
						<Heading.h3>Ready to get started?</Heading.h3>
						<Text.p>
							Apply to Zummit Africa and join our immersive courses and community starting in{" "}
							<span>January 2025</span> to transform your career and access new opportunities.
						</Text.p>
						<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
					</Flex.Column>
				</section>
			</main>
			<Footer />
		</>
	)
}
