import "@radix-ui/themes/styles.css"
import "@/styles/index.scss"

import { QueryClientProvider } from "@tanstack/react-query"
import { PostHogProvider } from "posthog-js/react"
import { Toaster } from "@/components/ui/sonner"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import { Theme } from "@radix-ui/themes"
import { useRouter } from "next/router"
import posthog from "posthog-js"
import React from "react"

import { queryClient } from "@lib/query-client"
import { SSRProvider } from "@labs/components"
import analytics from "@lib/analytics"

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	React.useEffect(() => {
		const handleRouteChange = (url: string) => analytics.pageView(url)
		router.events.on("routeChangeComplete", handleRouteChange)
		return () => router.events.off("routeChangeComplete", handleRouteChange)
	}, [router.events])

	return (
		<Theme appearance="light">
			<SSRProvider>
				<QueryClientProvider client={queryClient}>
					<PostHogProvider client={posthog}>
						<AnimatePresence mode="wait">
							<Component {...pageProps} />
							<Toaster />
						</AnimatePresence>
					</PostHogProvider>
				</QueryClientProvider>
			</SSRProvider>
		</Theme>
	)
}
