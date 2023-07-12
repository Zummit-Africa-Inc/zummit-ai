import React from "react"

const Blog = React.lazy(() => import("./Blog"))
const Contact = React.lazy(() => import("./Contact"))
const Home = React.lazy(() => import("./Home"))
const Internship = React.lazy(() => import("./Internship"))
const LearnMore = React.lazy(() => import("./LearnMore"))
const Portfolio = React.lazy(() => import("./Portfolio"))

export { Blog, Contact, Home, Internship, LearnMore, Portfolio }
