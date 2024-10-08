import {
	RiComputerLine,
	RiGraduationCapLine,
	RiNewsLine,
	RiPresentationLine,
	RiShakeHandsLine,
} from "@remixicon/react"

export const counts = [
	{ label: "Projects built by interns", value: 30, metric: "", color: "#d1e7fe" },
	{ label: "Top Alumnis", value: 250, metric: "+", color: "#caf3ed" },
	{ label: "Graduate employment rate", value: 50, metric: "%", color: "#fcb7ee" },
	{ label: "Number of students trained", value: 2000, metric: "+", color: "#fadbdd" },
]

export const content = [
	{
		label: "Self-Paced Learning (Datarango)",
		icon: RiComputerLine,
		description:
			"Learn at Your Own Pace with DataRango; our innovative app designed to teach AI, data science and many more. ",
		url: "/self-paced-learning",
	},
	{
		label: "Consultation & Advisory Services",
		icon: RiShakeHandsLine,
		description:
			"Learn at Your Own Pace with DataRango; our innovative app designed to teach AI, data science and many more. ",
		url: "/consulting-and-advisory",
	},
	{
		label: "Instructor-Led Training",
		icon: RiPresentationLine,
		description:
			"Learn at Your Own Pace with DataRango; our innovative app designed to teach AI, data science and many more. ",
		url: "/instructor-led-training",
	},
	{
		label: "Zummit Internships",
		icon: RiGraduationCapLine,
		description:
			"It is designed for students and early-career professionals who want to gain practical experience in AI, data science, etc.",
		url: "/internships",
	},
	{
		label: "Our Blog",
		icon: RiNewsLine,
		description:
			"Read our blog to stay updated with the latest insights, trends, and more in AI and Data Science. ",
		url: "/blog",
	},
]

export const about = [
	{
		image: "/assets/images/zummit-csr.webp",
		content: `Zummit Africa is at the forefront of technological education and innovation in AI, data science, and machine learning. <br /> <br />
		With a commitment to empowering individuals and organizations, we offer a range of services designed to cultivate talent, solve complex problems, and drive success in the digital age.`,
		url: "",
	},
	{
		image: "/assets/images/zummit-csr.webp",
		content:
			"Since our inception, we've trained over 2000 students and completed 30 projects, helping shape the careers of future tech leaders. Our community-driven approach and focus on real-world applications set us apart in the EdTech landscape.",
		url: "/about",
	},
]
