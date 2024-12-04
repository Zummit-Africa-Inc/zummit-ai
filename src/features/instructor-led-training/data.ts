export const testimonials = [
	{
		id: 1,
		name: "Valentine Enedah",
		position: "Data Scientist",
		image: "/assets/valentine.webp",
		text:
			"I started off as a Junior Data Scientist (Intern) at Zummit Africa, and it was a great opportunity to be part of the team. I have learnt so much by being integral to the growth of the company. Zummit Africa is the best place to be and I now work as a Community Support at EntryLevel where I focus on democratizing Tech skills.",
	},
	{
		id: 1,
		name: "Pat Chizoba",
		position: "Data Scientist",
		image: "/assets/pat.webp",
		text: "One of the best things that happened to me was Zummit Africa. For real!!!",
	},
	{
		id: 1,
		name: "Jude Ezeh",
		position: "Data Scientist",
		image: "/assets/jude.webp",
		text:
			"Joining Zummit Africa was a great step towards becoming a data analyst/data scientist. The collaboration among teams was great. Also, the paper review session helped with so many research and collaboration on projects. I must admit that the skills both soft and hard skills gained while interning with Zummit helped me landed my role as a Data analyst at Heroshe.",
	},
	{
		id: 1,
		name: "Silas Penda",
		position: "Data Scientist",
		image: "/assets/silas.webp",
		text:
			"Zummit Africa gave me a good stepping stone in my Data Science career. I got to work with teams working on real use case projects. I led two teams to win the monthly competition. I built my confidence up from there. I'll always be grateful for the opportunity.",
	},
	{
		id: 1,
		name: "Ayomide Olaniyi",
		position: "AI/Data Scientist",
		image: "/assets/ayomide.webp",
		text:
			"My journey at Zummit Africa has been immensely rewarding, marked by professional growth, meaningful collaborations, and impactful contributions to the field of Data Science and Artificial Intelligence. Thank you Zummit Africa.",
	},
	{
		id: 1,
		name: "Chioma Eze",
		position: "Data Scientist",
		image: "/assets/chioma.webp",
		text:
			"The speed at which I grew in my AI and data skills is remarkable in literally just three months. It's been an awesome experience so far.",
	},
	// Add more testimonials as needed
]

export const pricingPlans = [
	{
		title: "One-Time Payment",
		description: "This is a one-time upfront payment plan where you save ₦15,000.",
		features: [
			"4-Month Internship Program",
			"Access to Global Talent Pool",
			"Engaging Hackathons",
			"Vibrant Learning Community",
			"Premium subscription to Datarango",
			"Certification upon completion",
			"Job placement assistance",
			"Lifelong access to course",
		],
		price: "₦60,000",
		originalPrice: "₦75,000",
		ctaText: "Enroll Now",
		isPopular: true,
		save: true,
	},
	{
		title: "3-Months Payment",
		description:
			"We provide an option for you to spread out your payment if you’re on a budget",
		features: [
			"4-Month Internship Program",
			"Access to Global Talent Pool",
			"Engaging Hackathons",
			"Vibrant Learning Community",
			"Premium subscription to Datarango",
			"Certification upon completion",
			"Job placement assistance",
			"Lifelong access to course",
		],
		price: "₦25,000/month",
		ctaText: "Enroll Now",
		isPopular: true,
	},
]

export const valueProps = [
	{
		icon: "/icons/cost.svg",
		title: "Cost-Effectiveness",
		description:
			"Learn cutting-edge skills that employers are actively seeking—at an affordable price. This course is designed to deliver maximum value for your career.",
	},
	{
		icon: "/icons/instructor.svg",
		title: "Expert Instructors",
		description:
			"Get guidance from instructors who bring years of hands-on industry experience. Our instructors are passionate about teaching and dedicated to your success.",
	},
	{
		icon: "/icons/flexible.svg",
		title: "Flexible Learning Options",
		description:
			"Study at your own pace, with online modules that fit into your busy schedule. Whether you're working full-time or are a student, you can learn from this course.",
	},
	{
		icon: "/icons/material.svg",
		title: "High-Quality Materials",
		description:
			"Access comprehensive resources and materials that help you master complex topics easily. Get up-to-date content and practical exercises for real-world learning.",
	},
	{
		icon: "/icons/tailored.svg",
		title: "Tailored Mentorship",
		description:
			"Benefit from mentors who are committed to your personal and professional development. Get guidance to help you stay on track and meet your career goals.",
	},
	{
		icon: "/icons/opportunities.svg",
		title: "Networking Opportunities",
		description:
			"Join a thriving community of like-minded learners and industry professionals. Collaborate and build connections that can help you advance your career.",
	},
]
export const courseModules = [
	{
		title: "Module 1: Python crash",
		body:
			"This module will guide you through the fundamentals of Python programming. You'll learn how to write Python code, work with data, control program flow, and build simple applications.",
		list: [
			"1.1  Getting Started with Python",
			"1.2  Variables and Data Types",
			"1.3  Control Flow",
			"1.4  Data Structures",
			"1.5  Functions and Modules",
		],
	},
	{
		title: "Module 2:  Data Explorations with Numpy and Pandas",
		body: "",
		list: [
			"2.1 Introduction to Numpy, Numpy array, Numpy indexing and selection",
			"2.2 Introduction to Pandas, series, DataFrames, pandas operation",
		],
	},
	{
		title: "Module 3: Data visualization with Matplotlib and Seaborn",
		body: "",
		list: [
			"3.1 Matplotlib basics and advanced matplotlib",
			"3.2 Introduction to Seaborn, Scatterplots with Seaborn, Distribution Plots, Categorical Plots, Seaborn.",
		],
	},
	{
		title: "Module 4: Machine Learning Fundamentals",
		body: "",
		list: [
			"4.1 Introduction to Machine Learning Overview Section",
			"4.2 Why Machine Learning?",
			"4.3 Types of Machine Learning Algorithms",
		],
	},
	{
		title: "Module 5: Supervised learning",
		body: "",
		list: [
			"5.1 Supervised Machine Learning Process",
			"5.2 Linear Regression",
			"5.3 Feature Engineering and Data Preparation",
			"5.4 Cross-Validation and Grid Search",
			"5.5 Logistic Regression",
			"5.6 KNN -K Nearest Neighbors",
			"5.7 Support Vector Machines",
			"5.8 Naive Bayes classification and Natural language processing",
		],
	},
	{
		title: "Module 6: Ensemble methods",
		body: "",
		list: ["6.1 Tree-based methods", "6.2 Random Forest", "6.3 Boosting Methods"],
	},
	{
		title: "Module 7: Unsupervised learning",
		body: "",
		list: [
			"7.1 Unsupervised Learning Overview",
			"7.2 K-Means Clustering",
			"7.3 Hierarchical Clustering",
			"7.4 DBSCAN (Density-based spatial clustering of applications)",
			"7.5 PCA (Principal Component Analysis and Manifold Learning)",
		],
	},
	{
		title: "Module 8: Model Deployment",
		body: "",
		list: [
			"8.1 Model Deployment Section Overview",
			"8.2 Model Deployment Considerations",
			"8.3 Model Persistence",
			"8.4 Model Deployment as an API - General Overview",
			"8.5 Model API - Creating the Script",
			"8.6 Testing the API",
		],
	},
]

export const faqItems = [
	{
		question: "Is this course delivered live or is it pre-recorded?",
		answer:
			"Zummit Africa's programs are delivered in a flexible format, featuring both live sessions and pre-recorded content. Attending live classes for real-time interaction is mandatory, but you can also access recorded sessions at your convenience.",
	},
	{
		question: "How long will I have access to the course materials?",
		answer:
			"You will have unlimited access to all course materials, including videos, quizzes, and additional resources indefinitely.",
	},
	{
		question: "Do I need any special equipment or materials for this course?",
		answer:
			"To participate in Zummit Africa courses, you will need: A computer or tablet with internet access, A web browser (Google Chrome is recommended) and A stable internet connection",
	},
	{
		question: "Are there discounts for this course?",
		answer: "You have a 20% discount when you pay for the course in full",
	},
	{
		question: "Will this course be suitable and helpful for me?",
		answer:
			"Yes, Zummit Africa's courses are designed to cater to various skill levels, from beginners to advanced learners. The structured learning paths ensure you build foundational knowledge before advancing to more complex topics in AI.",
	},
	{
		question: "Am I too much of a beginner for this course?",
		answer:
			"No, Zummit Africa's courses are beginner-friendly. They offer a gradual learning curve, starting with fundamental concepts and progressing to advanced topics. You can start at your own pace and receive support throughout your journey.",
	},
	{
		question: "What types of assessments will be included in the course?",
		answer:
			"Assessments will be carried out on our learning platform www.datarango.com The assessments include quizzes, coding exercises, hackathons, etc.",
	},
	{
		question: "How much time should I expect to dedicate to this course each week?",
		answer:
			"Time commitments are flexible and vary by course. Generally, you should expect to dedicate 3 to 8 hours per week for lectures, assignments, and discussions.",
	},
	{
		question: "Is there a community or support system available during the course?",
		answer:
			"Yes, Zummit Africa provides a community forum through the Slack platform where students can interact with instructors and peers. This collaborative space allows you to ask questions, share insights, and work on projects together.",
	},
	{
		question: "Can I learn at my own pace?",
		answer:
			"Yes, many of Zummit Africa's courses are designed to be self-paced, allowing you to progress through the material on your own schedule while meeting deadlines for assignments and assessments.",
	},
]
