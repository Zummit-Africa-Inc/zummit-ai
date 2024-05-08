import Image from "next/image"
import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./testimonials.module.scss"
import { testimonials } from "./data"

export const Testimonials = () => {
	return (
		<>
			<Seo title="Our Graduates" />
			<Appbar />
			<Flex.Column className={styles.Testimonial}>
				<Flex.Column className={styles.TestimonialInner}>
					<Flex.Column className={styles.TestimonialHeader}>
						<Flex.Column className={styles.TestimonialHeaderContent}>
							<Flex.Column className={styles.TestimonialHeaderContentHeading}>
								<Heading.h2>Our Graduates</Heading.h2>
							</Flex.Column>
						</Flex.Column>
						{testimonials.map((testimonial, index) => (
							<Flex key={index} className={styles.TestimonialHeaderItems}>
								<Flex.Column className={styles.TestimonialHeaderItem}>
									<Heading.h3>{testimonial.name}</Heading.h3>
									<Flex className={styles.TestimonialHeaderItemRow}>
										<Flex className={styles.TestimonialHeaderItemImage}>
											<Image src={testimonial.image} alt={testimonial.company} fill />
										</Flex>
										<Text.p>{testimonial.company}</Text.p>
									</Flex>
								</Flex.Column>
								<Flex className={styles.TestimonialHeaderItem}>
									<Text.p>{testimonial.quote}</Text.p>
								</Flex>
							</Flex>
						))}
					</Flex.Column>
				</Flex.Column>
				<section className={styles.TestimonialSection}>
					<Flex.Column className={styles.TestimonialSectionInner}>
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
