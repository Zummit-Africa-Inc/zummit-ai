import { EffectCoverflow, Navigation, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import classNames from "classnames"
import Image from "next/image"
import React from "react"

import { Button, Flex, Heading, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import styles from "./testimonials.module.scss"
import { testimonials } from "./data"

import "swiper/scss"
import "swiper/scss/navigation"

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
						<Flex className={styles.Carousel}>
							<Swiper
								modules={[EffectCoverflow, Navigation, A11y]}
								spaceBetween={50}
								slidesPerView={1}
								navigation
								effect="coverflow">
								{testimonials.map((graduate, index) => (
									<SwiperSlide key={index}>
										<Flex.Column className={classNames([styles.CarouselItem])}>
											<Flex className={styles.CarouselAvatar}>
												<Image src={graduate.avatar} alt="" fill sizes="(max-width: 1024px) 100%" />
											</Flex>
											<Heading.h3 className={styles.CarouselName}>{graduate.name}</Heading.h3>
											<Flex alignItems="center" gap={8}>
												<Flex className={styles.CarouselImage}>
													<Image
														src={graduate.image}
														alt={graduate.company}
														fill
														sizes="(max-width: 1024px) 100%"
													/>
												</Flex>
												<Text.p>{graduate.company}</Text.p>
											</Flex>
											<Text.p className={styles.CarouselQuote}>{graduate.quote}</Text.p>
											<Button.a href={graduate.linkedin} target="_blank">
												View LinkedIn Profile
											</Button.a>
										</Flex.Column>
									</SwiperSlide>
								))}
							</Swiper>
						</Flex>
					</Flex.Column>
				</Flex.Column>
				<section className={styles.TestimonialSection}>
					<Flex.Column className={styles.TestimonialSectionInner}>
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
