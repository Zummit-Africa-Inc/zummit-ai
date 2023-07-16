import { animated, useSpring } from "react-spring"
import { useEffect, useRef } from "react"
import { FiX } from "react-icons/fi"
import { v4 as uuidv4 } from "uuid"
import { useFormik } from "formik"
import * as Yup from "yup"

import { logo } from "assets/images"
// import { useBotStore } from "store"
import { CHATS } from "mock"

interface Props {
	close: () => void
}

const ChatBot = (props: Props) => {
	// TODO: always clear chat on reload
	// TODO: add typewriter effect to new bot message
	// const { add, chats } = useBotStore(store => store)
	const bottomRef = useRef<HTMLDivElement>(null)

	const spring = useSpring({
		from: { x: "100%" },
		to: { x: "0%" },
	})

	const schema = Yup.object({
		message: Yup.string().required("Please enter a message for the bot!"),
	})

	const { handleChange, handleSubmit } = useFormik({
		initialValues: { message: "" },
		validationSchema: schema,
		onSubmit: ({ message }) => {
			CHATS.push({
				id: uuidv4(),
				content: message,
				createdAt: "",
				type: "user",
			})
		},
	})

	useEffect(() => {
		bottomRef.current && bottomRef.current.scrollIntoView({ behavior: "smooth" })
	})

	return (
		<animated.div
			style={spring}
			className="fixed bottom-5 right-5 !z-20 flex h-[461px] w-[473px] flex-col items-center justify-between rounded-lg border border-gray-300 bg-white">
			<div className="flex w-full items-center justify-between border-b border-gray-300 px-6 py-3">
				<img src={logo} alt="" className="w-[100px]" />
				<button onClick={props.close} className="text-4xl text-gray-400">
					<FiX />
				</button>
			</div>
			<div className="flex h-full w-full flex-col gap-3 overflow-y-scroll p-2">
				{CHATS.map((chat) => (
					<div
						key={chat.id}
						className={`flex items-start gap-1 ${
							chat.type === "bot" ? "flex-row" : "flex-row-reverse"
						}`}>
						<div
							className={`max-w-[50%] rounded-lg p-2 ${
								chat.type === "bot"
									? "rounded-tl-none bg-secondary text-primary"
									: "rounded-tr-none bg-primary text-white"
							}`}>
							<span className="text-sm">{chat.content}</span>
						</div>
						<div ref={bottomRef}></div>
					</div>
				))}
			</div>
			<div className="flex w-full flex-col items-center gap-2 rounded-b-[8px] bg-gray-200 px-6 py-3">
				<form
					onSubmit={handleSubmit}
					className="w-full border border-gray-300 bg-white px-4 py-2">
					<input
						type="text"
						id="message"
						onChange={handleChange}
						className="w-full"
						placeholder="Type you message here..."
					/>
				</form>
			</div>
		</animated.div>
	)
}

export default ChatBot
