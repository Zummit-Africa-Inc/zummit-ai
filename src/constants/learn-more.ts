import customer from "assets/icons/customer.png"
import quality from "assets/icons/quality.svg"
import agile from "assets/icons/agile.svg"
import chat from "assets/icons/chat.svg"
import team from "assets/icons/team.svg"
import lock from "assets/icons/lock.svg"

import transportation from "assets/images/transport.jpeg"
import agriculture from "assets/images/agriculture.jpeg"
import support from "assets/images/support.jpeg"
import retail from "assets/images/retail.jpeg"

export const APPROACH = [
	{
		label: "Customer-Centric Approach",
		decription:
			"We prioritize your satisfaction and collaborate closely with you throughout the development process. Your feedback and input are integral to creating a solution that truly aligns with your vision.",
		icon: customer,
	},
	{
		label: "Agile Development Methodology",
		decription:
			"We follow agile principle, ensuring flexibility, transparency, and faster time-to-market. Our iterative approach allows us to adapt to evolving requirements and deliver incremental value",
		icon: agile,
	},
	{
		label: "Seamless Communication",
		decription:
			"We believe in clear and prompt communication to ensure a smooth project journey. We provide regular progress updates, conduct meetings and are always available to address your queries or concerns.",
		icon: chat,
	},
	{
		label: "Skilled and Dedicated Team",
		decription:
			"Our talented team of developers, designers and quality assurance specialists are passionate about technology and committed to delivering top notch results. We stay update with the latest trends and techniques to provide innovative solution.",
		icon: team,
	},
	{
		label: "Quality Assurance",
		decription:
			"We have a rigorous quality assurance process in place to deliver applications of the highest standard. We conduct comprehensive testing to ensure optimal performance, security and reliability.",
		icon: quality,
	},
	{
		label: "Confidentiality and Security",
		decription:
			"We understand the importance of protecting your sensitive data and ideas. We maintain strict confidentiality throughout the project and follow industry best practices to ensure data security.",
		icon: lock,
	},
]

export const SECTORS = [
	{
		label: "agriculture",
		topic: "Enhancing Crop Yield and Sustainability",
		description:
			"With precision farming powered by AI, farmers can gain real-time insights into crop health, soil moisture, and pest detection, enabling them to make data-driven decisions for improved efficiency and sustainability.",
		image: agriculture,
	},
	{
		label: "transportation",
		topic: "Increasing Efficiency with Smart Mobility Solutions",
		description:
			"AI enables real-time traffic analysis, predicting congestion patterns and optimizing route planning for more efficient journeys. Autonomous vehicles leverage AI algorithms to navigate complex road environments reducing human errors.",
		image: transportation,
	},
	{
		label: "support",
		topic: "Empowering Businesses with Personalized Assistance",
		description:
			"Chatbots equipped with natural language processing capabilities can engage with customers, address queries, and provide instant solutions, reducing response times and enhancing customer satisfaction.",
		image: support,
	},
	{
		label: "retail",
		topic: "Personalization and Efficiency Redefining Shopping",
		description:
			"AI-driven product recommendation engines analyze customer behavior and preferences, suggesting tailored products that increase conversion rates and customer engagement.",
		image: retail,
	},
]
