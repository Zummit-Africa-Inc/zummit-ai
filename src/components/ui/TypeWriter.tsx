import { useEffect, useState } from "react"

interface Props {
	text: string
	delay: number
}

const TypeWriter = (props: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [currentText, setCurrentText] = useState("")
	const [isTyping, setIsTyping] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentIndex < props.text.length) {
				setCurrentText((prev) => prev + props.text[currentIndex])
				setCurrentIndex((prev) => prev + 1)
			} else {
				setIsTyping(false)
				clearInterval(interval)
			}
		}, props.delay)
		return () => clearInterval(interval)
	}, [currentIndex, props.delay, props.text])

	return <span className="caret">{isTyping ? currentText : props.text}</span>
}

export default TypeWriter
