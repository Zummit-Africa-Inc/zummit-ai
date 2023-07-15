import { useEffect, useState } from "react"

import { chat_bubble } from "assets/icons"

interface Props {
	open: () => void
}

const ChatButton = (props: Props) => {
	const [isVisible, setIsVisible] = useState(true)

	const handleScroll = () => {
		window.scrollY > 5200 ? setIsVisible(false) : setIsVisible(true)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<button
			onClick={props.open}
			className={`fixed bottom-44 right-5 !z-20 items-center gap-2 rounded-[26px] bg-secondary px-8 py-4 md:right-[120px] xl:bottom-[180px] xl:right-[300px] ${
				isVisible ? "flex" : "hidden"
			}`}>
			<img src={chat_bubble} alt="" />
			<span className="text-sm font-semibold text-primary">Chat with Our Bot</span>
		</button>
	)
}

export default ChatButton
