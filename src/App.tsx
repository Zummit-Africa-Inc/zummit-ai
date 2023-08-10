import { ErrorBoundary } from "react-error-boundary"
import { AnimatePresence } from "framer-motion"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"
import ReactGA from "react-ga4"

import { ErrorFallback } from "components"
import { useBotStore } from "store"
import Router from "router"

const App = () => {
	const { clear } = useBotStore((store) => store)
	ReactGA.initialize(`${import.meta.env.VITE_GA_KEY}`)

	useEffect(() => {
		clear()
	}, [])

	return (
		<AnimatePresence>
			<Helmet key="helmet">
				<title>ZummitAI</title>
				<meta name="description" content="" />
				<meta
					name="keywords"
					content="Artificial Intelligence company, AI development services, AI solution provider, Custom web development services,AI project consulting,
					AI product lab, website development company, Generative AI, Data strategy, Chatbot development, Computer vision, AI company, AI startup,
					Mobile app design and development, AI company in Africa, artificial intelligence, large language models, Machine learning, How to start a company,
					How to build AI solutions"
				/>
				{/* Facebook OpenGraph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://zummitafrica.com" />
				<meta property="og:title" content="ZummitAI" />
				<meta property="og:description" content="" />
				<meta
					property="og:image"
					content="https://res.cloudinary.com/pabloclueless/image/upload/v1689372657/webclip_jeas3l.png"
				/>
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://zummitafrica.com" />
				<meta property="twitter:title" content="ZummitAI" />
				<meta property="twitter:description" content="" />
				<meta
					property="twitter:image"
					content="https://res.cloudinary.com/pabloclueless/image/upload/v1689372657/webclip_jeas3l.png"
				/>
			</Helmet>
			<ErrorBoundary
				FallbackComponent={ErrorFallback}
				key="error-boundary"
				onReset={() => typeof window !== undefined && window.location.reload()}>
				<Router key="router" />
				<ToastContainer key="taost-container" />
			</ErrorBoundary>
		</AnimatePresence>
	)
}

export default App
