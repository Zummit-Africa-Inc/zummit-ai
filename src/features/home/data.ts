import {
	RiComputerLine,
	RiGraduationCapLine,
	RiNewsLine,
	RiPresentationLine,
	RiShakeHandsLine,
} from "@remixicon/react"

export const counts = [
	{
		label: "Projects built by interns",
		value: 30,
		metric: "",
		color: "#d1e7fe",
		icon: "/icons/Education.svg",
	},
	{
		label: "Top Alumnis",
		value: 250,
		metric: "+",
		color: "#caf3ed",
		icon: "/icons/Vector.svg",
	},
	{
		label: "Graduate employment rate",
		value: 50,
		metric: "%",
		color: "#fcb7ee",
		icon: "",
		icon2: "/icons/Ring.svg",
	},
	{
		label: "Number of students trained",
		value: 3000,
		metric: "+",
		color: "#fadbdd",
		icon: "/icons/Board.svg",
	},
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
			"We offer you the best way to leverage AI and Data through effective data strategy and AI transformation work flow. ",
		url: "/consulting-and-advisory",
	},
	{
		label: "Instructor-Led Training",
		icon: RiPresentationLine,
		description:
			"Kick start your career in AI and Data, master in demand skill through our instructor led courses and master classes ",
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
			"Since our inception, we've trained over 3000 students and completed 30 projects, helping shape the careers of future tech leaders. Our community-driven approach and focus on real-world applications set us apart in the EdTech landscape.",
		url: "/about",
	},
]
