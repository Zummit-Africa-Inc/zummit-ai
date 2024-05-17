import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import React from "react"

import { Button, Field, Flex, Heading, Spinner, Text } from "@labs/components"
import { Appbar, Footer, Seo } from "@/components/shared"
import { getCountries, submitForm } from "./query"
import styles from "./apply.module.scss"
import { HttpError } from "@labs/utils"
import { interests } from "./data"

const initialValues = {
	name: "",
	email: "",
	country: "",
	previous_experience: "",
	interest: "",
	message: "",
}

export const Apply = () => {
	const [fields, setFields] = React.useState(initialValues)

	const { data: countries } = useQuery({
		queryFn: () => getCountries(),
		queryKey: ["get-countries"],
	})

	const { isPending, mutateAsync } = useMutation({
		mutationFn: (payload: typeof initialValues) => submitForm(payload),
		mutationKey: ["submit-form"],
		onSuccess: ({ data }) => {
			const { message } = data
			toast.success(message)
			setFields(initialValues)
			window.location.reload()
		},
		onError: ({ response }: HttpError) => {
			const { message } = response.data
			toast.error(message)
		},
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) =>
		setFields((initialFields) => ({ ...initialFields, [e.target.name]: e.target.value }))

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		mutateAsync(fields)
	}
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
								<form onSubmit={handleSubmit} className={styles.ApplyHeaderForm}>
									<Field.Input
										type="text"
										name="name"
										onChange={handleChange}
										label="What is your name?"
										required
									/>
									<Field.Input
										type="email"
										name="email"
										onChange={handleChange}
										label="Please provide a valid email"
										required
									/>
									<Field.Select
										name="country"
										onChange={handleChange}
										label="Where do you currently reside?"
										required>
										{countries?.map(({ country, iso2 }) => (
											<option key={iso2} value={country}>
												{country}
											</option>
										))}
									</Field.Select>
									<Field.Select
										name="previous_experience"
										onChange={handleChange}
										label="Do you have any programming experience?"
										required>
										<option value="">Select an option</option>
										<option value="yes">Yes</option>
										<option value="no">No</option>
									</Field.Select>
									<Field.Select
										name="interest"
										onChange={handleChange}
										label="Which training are you interested in?"
										required>
										{interests.map((interest, index) => (
											<option key={index} value={interest.value}>
												{interest.label}
											</option>
										))}
									</Field.Select>
									<Field.Textarea
										name="message"
										onChange={handleChange}
										label="Do you have any additional message?"
									/>
									<Button type="submit" disabled={isPending}>
										{isPending ? <Spinner color="#fff" /> : "Submit Form"}
									</Button>
								</form>
							</Flex>
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
				{/* <section className={styles.ApplySection}>
					<Flex.Column className={styles.ApplySectionInner}>
						<Heading.h3>Why join us?</Heading.h3>
						<Text.p>
							We have the best data scientist and Machine Learning engineers supporting our
							training program.
						</Text.p>
						<Button.a href="/apply-to-zummit-africa">Apply Now</Button.a>
					</Flex.Column>
				</section> */}
			</Flex.Column>
			<Footer />
		</>
	)
}
