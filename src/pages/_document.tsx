import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document"

import { getSSRCssRules } from "@labs/utils"
import { config } from "@lib/config"

class HtmlDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		const ssrCssRules = getSSRCssRules()
		return { ...initialProps, ssrCssRules }
	}

	render() {
		const { styles, ...props } = this.props

		return (
			<Html lang="en" {...props}>
				<Head>
					{styles && (
						<style
							id="s2c:ssr-css-rules"
							dangerouslySetInnerHTML={{
								__html: Array.from(styles || []).join(""),
							}}
						/>
					)}
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
