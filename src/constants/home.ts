import { ai, backend, cloud, database, frontend, john, kolawole, linda, mobile, process_1, process_2, process_3 } from "assets/images"
import { chip, bulb, monitor, phone } from "assets/icons"

export const OPERATIONS = [
	{
		label: "Mobile Application Development",
		image: phone,
		description:
			"We specialize in crafting feature-rich and visually stunning mobile apps for IOS and Andriod platforms.",
	},
	{
		label: "Web Application Development",
		image: monitor,
		description:
			"Our team develops dynamic and responsive web applications that deliver exceptional performance.",
	},
	{
		label: "Artificial Intelligence",
		image: chip,
		description:
			"We provide world class AI solutions where needed to give your businesses a competitive advantage.",
	},
	{
		label: "UI/UX (Product) Design",
		image: bulb,
		description:
			"Our design team rigorously tests your applications to ensure optimal performance and security.",
	},
]

export const PROCESS = [
	{
		label: "Discovery and Ideation",
		image: process_1,
		description:
			"Diving deep into understanding your business objectives, target audience, and specific challenges through comprehensive research and engaging conversations",
	},
	{
		label: "Design and Development",
		image: process_2,
		description:
			"Crafting intuitive user interfaces, seamless user experiences, and visually stunning designs using cutting-edge technologies and industry best practices.",
	},
	{
		label: "Deployment and Optimization",
		image: process_3,
		description:
			"Overseeing seamless integration of the solution into your existing ecosystem. Analyzing user feedback and performance data post-deployment.",
	},
]

export const STACKS = [
	{
		label: "frontend development",
		image: frontend,
		description: ["HTML5", "CSS3", "Javascript", "React", "Angular", "Vue.js"],
	},
	{
		label: "mobile development",
		image: mobile,
		description: ["Swift", "Kotlin", "Flutter", "React-Native"],
	},
	{
		label: "backend development",
		image: backend,
		description: ["Python", "Java", "Ruby", "Javascript", "Typescript"],
	},
	{
		label: "database technologies",
		image: database,
		description: ["MySQL", "Postgres", "NoSQL", "Firebase"],
	},
	{
		label: "artificial intelligence",
		image: ai,
		description: [
			"AWS SageMaker",
			"S3",
			"BigQuery",
			"React",
			"OpenV",
			"TensorFlow",
		],
	},
	{
		label: "cloud and infrastructure",
		image: cloud,
		description: ["Amazon Web Services", "Docker", "Google Cloud Platform"],
	},
]

export const PROCESS2 = [
	{
		label: 'AI-powered Applications at no Extra Cost',
		description: 'We empower businesses with cutting edge technology like LLMS, computer vision and machine learning.'
	},
	{
		label: 'Customer-Centric Approach',
		description: 'We prioritize your satisfaction and collaborate closely with you through out the development process.'
	},
	{
		label: 'Agile Development Methodology',
		description: 'We follow agile principles, ensuring flexibility, transparency and faster time-to-market which allows us to deliver incremental value.'
	},
	{
		label: 'Skilled and Dedicated Team',
		description: 'Our talented team of developers, designers and quality assurance specialists are committed to delivering top-notch results.'
	},
]

export const PORTFOLIO = [
	{
		label: "TechMart",
		description: "A groundbreaking marketplace for phones, computers, and accessories, revolutionizing device purchases. It offers a wide product range, flexible payment options, and doorstep delivery. ",
		image: ""
	},
	{
		label: "KnowledgePro",
		description: "An AI-powered app that caters to professionals' information needs, perfect for businessmen, students, and researchers seeking tailored insights and resources.",
		image: ""
	},
	{
		label: "Zapi AI",
		description: "Zapi revolutions business solutions with AI. A marketplace offers tailored AI APIs to streamline operations, boost productivity, and stay competitive.",
		image: ""
	},
]

export const TESTIMONIALS = [
	{
		testimony: `Vitae duis aliquet lobortis in egestas. Maecenas natoque massa semper pellentesque habitasse ut nullam et. Donec ultricies cursus ut in nibh tortor. Diam venenatis cras maecenas neque leo dapibus. Massa euismod tortor vel vitae. Etiam urna egestas lorem libero nulla vestibulum. Amet enim aliquet ut sollicitudin pellentesque lorem.
		Mattis et.`,
		name: "Kolawole Sangotayo",
		label: "Founder of TechStack",
		image: kolawole
	},
	{
		testimony: `Vitae duis aliquet lobortis in egestas. Maecenas natoque massa semper pellentesque habitasse ut nullam et. Donec ultricies cursus ut in nibh tortor. Diam venenatis cras maecenas neque leo dapibus. Massa euismod tortor vel vitae. Etiam urna egestas lorem libero nulla vestibulum. Amet enim aliquet ut sollicitudin pellentesque lorem.
		Mattis et.`,
		name: "Linda Onojah",
		label: "Chief Executive at KnowledgePro",
		image: linda
	},
	{
		testimony: `Vitae duis aliquet lobortis in egestas. Maecenas natoque massa semper pellentesque habitasse ut nullam et. Donec ultricies cursus ut in nibh tortor. Diam venenatis cras maecenas neque leo dapibus. Massa euismod tortor vel vitae. Etiam urna egestas lorem libero nulla vestibulum. Amet enim aliquet ut sollicitudin pellentesque lorem.
		Mattis et.`,
		name: "Oluwadaodu John",
		label: "MD at DillyDash",
		image: john
	},
]