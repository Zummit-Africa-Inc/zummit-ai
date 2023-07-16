import { ErrorBoundary } from "react-error-boundary"
import { Helmet } from "react-helmet-async"

import { ErrorFallback } from "components"
import Router from "router"

const App = () => {
	return (
		<>
			<Helmet>
				<title>Zummit Africa</title>
				<meta name="description" content="" />
				{/* Facebook OpenGraph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://zummitafrica.com" />
				<meta property="og:title" content="Zummit Africa" />
				<meta property="og:description" content="" />
				<meta property="og:image" content="https://res.cloudinary.com/pabloclueless/image/upload/v1689372657/webclip_jeas3l.png" />
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://zummitafrica.com" />
				<meta property="twitter:title" content="Zummit Africa" />
				<meta property="twitter:description" content="" />
				<meta property="twitter:image" content="https://res.cloudinary.com/pabloclueless/image/upload/v1689372657/webclip_jeas3l.png" />
			</Helmet>
			<ErrorBoundary
				FallbackComponent={ErrorFallback}
				onReset={() => typeof window !== undefined && window.location.reload()}>
				<Router />
			</ErrorBoundary>
		</>
	)
}

export default App
