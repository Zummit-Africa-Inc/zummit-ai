import "@radix-ui/themes/styles.css"
import "@/styles/globals.css"

import { QueryClientProvider } from "@tanstack/react-query"
import { PostHogProvider } from "posthog-js/react"
import { Toaster } from "@/components/ui/sonner"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import posthog from "posthog-js"
import { ApolloProvider } from "@apollo/client"
import React from "react"

import { ChatBot, FacebookPixel } from "@/components/shared"
import { AuthContextProvider } from "@/context/AuthContext"
import { queryClient } from "@lib/query-client"
import { SSRProvider } from "@labs/components"
import analytics from "@lib/analytics"
import { createClient } from "@lib/apollo"

const client = createClient()

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	React.useEffect(() => {
		const handleRouteChange = (url: string) => analytics.pageView(url)
		router.events.on("routeChangeComplete", handleRouteChange)
		return () => router.events.off("routeChangeComplete", handleRouteChange)
	}, [router.events])

	return (
		<AuthContextProvider>
			<ApolloProvider client={client}>
				<SSRProvider>
					<QueryClientProvider client={queryClient}>
						<PostHogProvider client={posthog}>
							<Component {...pageProps} />
							<Toaster />
							<ChatBot />
							<FacebookPixel />
						</PostHogProvider>
					</QueryClientProvider>
				</SSRProvider>
			</ApolloProvider>
		</AuthContextProvider>
	)
}
