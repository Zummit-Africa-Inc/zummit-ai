import Document, { Html, Head, Main, NextScript } from "next/document"

import { config } from "@lib/config"

class HtmlDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<GoogleAnalytics />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default HtmlDocument

const GoogleAnalytics = () => {
	if (process.env.NODE_ENV !== "production") return null

	return (
		<>
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${config.GA_TRACKING_ID}`}></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${config.GA_TRACKING_ID}');
          `,
				}}></script>
		</>
	)
}
