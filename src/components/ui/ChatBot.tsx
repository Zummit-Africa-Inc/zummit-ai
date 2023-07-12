import { useFormik } from "formik"
import * as Yup from "yup"

import { logo } from "assets/images"

interface Props {
	close: () => void
}

const ChatBot = (props: Props) => {
  const schema = Yup.object({
    message: Yup.string().required("Please enter a message for the bot!")
  })

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues: { message: "" },
    validationSchema: schema,
		onSubmit: (data) => console.log(data),
	})

	return (
		<div className="flex flex-col items-center justify-between fixed bottom-5 right-5 !z-20 h-[461px] w-[473px] rounded-[8px] border border-gray-300 bg-white">
			<div className="flex w-full items-center justify-between border-b border-gray-300 px-6 py-3">
				<img src={logo} alt="" className="w-[100px]" />
				<button onClick={props.close} className="">
					close
				</button>
			</div>
			<div className="flex h-full w-full flex-col overflow-y-scroll"></div>
			<div className="flex flex-col w-full items-center gap-2 rounded-b-[8px] bg-gray-200 px-6 py-3">
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
        {errors.message && <p className="text-[10px] text-red-500">{errors.message}</p>}
			</div>
		</div>
	)
}

export default ChatBot
