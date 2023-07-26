import { FormEvent, useEffect, useRef, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { animated, useSpring } from "react-spring"
import { FiX } from "react-icons/fi"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"

import { PaperPlane } from "assets/icons-tsx"
import TypeWriter from "./TypeWriter"
import { Spinner } from "components"
import { logo } from "assets/images"
import { useBotStore } from "store"

interface Props {
	close: () => void
}

const ChatBot = (props: Props) => {
	const { add, chats } = useBotStore(store => store)
	const [message, setMessage] = useState("")
	const ref = useRef<HTMLDivElement>(null)

	const spring = useSpring({
		from: { x: "100%" },
		to: { x: "0%" },
	})

	const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }

	const {isLoading, mutateAsync} = useMutation({
		mutationFn: (message: string) => axios.post(`${import.meta.env.VITE_API_URL}/bot`, {message}),
		mutationKey: ["send message"],
		onSuccess: ({data}) => {
			const message = data.data
			add({
				id: uuidv4(),
				message,
				createdAt: Date.now().toString(),
				type: "bot",
			})
		},
		onError: (error) => console.log(error)
	})

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (!message) return alert("No message!")
		add({
			id: uuidv4(),
			message,
			createdAt: Date.now().toString(),
			type: "user",
		})
		setMessage("")
		mutateAsync(message)
	}

	useEffect(() => {
		scrollToBottom()
	})

	return (
		<animated.div
			style={spring}
			className="fixed bottom-5 right-5 !z-20 flex h-[461px] w-[473px] flex-col items-center justify-between rounded-lg border border-ash-200 bg-white">
			<div className="flex w-full items-center justify-between border-b border-ash-200 px-6 py-3">
				<img src={logo} alt="zummit africa logo" className="w-[100px]" />
				<button onClick={props.close} className="text-4xl text-ash-200">
					<FiX />
				</button>
			</div>
			<div ref={ref} className="flex h-full w-full flex-col gap-3 overflow-y-scroll p-2">
				{chats.map((chat) => (
					<div
						key={chat.id}
						className={`flex items-start gap-1 ${
							chat.type === "bot" ? "flex-row" : "flex-row-reverse"
						}`}>
						<div
							className={`max-w-[65%] rounded-lg p-2 ${
								chat.type === "bot"
									? "rounded-tl-none bg-secondary-100 text-primary"
									: "rounded-tr-none bg-primary text-white"
							}`}>
							<p className="text-sm font-medium">
								{chat.type === "bot" ? <TypeWriter delay={100} text={chat.message} /> : chat.message}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex w-full flex-col items-center gap-2 rounded-b-[8px] bg-gray-200 px-6 py-3">
				<form
					onSubmit={handleSubmit}
					className="w-full flex items-center border border-ash-200 bg-white px-4 py-2">
					<input
						type="text"
						value={message}
						onChange={e => setMessage(e.target.value)}
						className="w-full"
						placeholder="Type you message here..."
					/>
					<button type="submit">
						{isLoading ? <Spinner className="border-ash-300" /> : <PaperPlane />}
					</button>
				</form>
			</div>
		</animated.div>
	)
}

export default ChatBot
