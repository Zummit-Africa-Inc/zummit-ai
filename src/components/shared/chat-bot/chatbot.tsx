import { AnimatePresence, motion } from "framer-motion"
import { RiChat1Line } from "@remixicon/react"
import React from "react"

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
			<div className="fixed bottom-[5%] right-[5%] !z-20 aspect-square w-[50px]">
				{!showIframe && (
					<button
						onClick={() => setShowIframe(true)}
						className="grid aspect-square size-full place-items-center rounded-full bg-primary-purple p-1 text-white">
						<RiChat1Line size={32} />
					</button>
				)}
				{showIframe && (
					<motion.div
						ref={ref}
						className="fixed bottom-[5%] right-[5%] !z-20 aspect-square h-[500px] w-[300px] bg-primary-purple text-white shadow-xl shadow-primary-purple/50">
						<iframe
							className="size-full"
							src="https://copilotstudio.microsoft.com/environments/Default-165b58c6-4ffe-4e68-b705-81f74933457a/bots/Default_zummitaiCopilot/webchat?_version_=2"></iframe>
					</motion.div>
				)}
			</div>
		</AnimatePresence>
	)
}
