import React from "react"

const Blog = React.lazy(() => import("./Blog"))
const Blogs = React.lazy(() => import("./Blogs"))
const ComingSoon = React.lazy(() => import("./ComingSoon"))
const Contact = React.lazy(() => import("./Contact"))
const Home = React.lazy(() => import("./Home"))
const Internship = React.lazy(() => import("./Internship"))
const LearnMore = React.lazy(() => import("./LearnMore"))
const NotFound = React.lazy(() => import("./NotFound"))
const Portfolio = React.lazy(() => import("./Portfolio"))

export {
	Blog,
	Blogs,
	ComingSoon,
	Contact,
	Home,
	Internship,
	LearnMore,
	NotFound,
	Portfolio,
}
