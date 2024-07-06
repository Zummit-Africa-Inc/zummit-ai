import { AnimatePresence, motion } from "framer-motion"
import { RiChat1Line } from "@remixicon/react"
import React from "react"

import styles from "./chatbot.module.scss"

export const ChatBot = () => {
	const [showIframe, setShowIframe] = React.useState(false)
	const ref = React.useRef<HTMLDivElement>(null)!

	const isServer = typeof window === "undefined"

	const handleClickOutside = (e: MouseEvent) => {
		if (isServer) return
		if (ref.current && !ref.current.contains(e.target as Node)) {
			setShowIframe(false)
		}
	}

	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside as EventListener)
		return () =>
			document.removeEventListener("mousedown", handleClickOutside as EventListener)
	})

	return (
		<AnimatePresence mode="wait">
			<div className={styles.Chatbot}>
				{!showIframe && (
					<button onClick={() => setShowIframe(true)} className={styles.ChatbotButton}>
						<RiChat1Line size={32} />
					</button>
				)}
				{showIframe && (
					<motion.div ref={ref} className={styles.ChatbotIframeContainer}>
						<iframe
							className={styles.ChatbotIframe}
							src="https://copilotstudio.microsoft.com/environments/Default-165b58c6-4ffe-4e68-b705-81f74933457a/bots/Default_zummitaiCopilot/webchat?_version_=2"></iframe>
					</motion.div>
				)}
			</div>
		</AnimatePresence>
	)
}
