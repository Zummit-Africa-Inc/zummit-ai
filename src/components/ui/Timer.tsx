import { useEffect, useState } from "react"

interface Props {
	deadline: string
}

const Timer = (props: Props) => {
	const [minutes, setMinutes] = useState(0)
	const [hours, setHours] = useState(0)
	const [days, setDays] = useState(0)

	const getTime = () => {
		const time = Date.parse(props.deadline) - Date.now()
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
		setMinutes(Math.floor((time / 1000 / 60) % 60))
	}

	useEffect(() => {
		const interval = setInterval(() => {
			getTime()
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="flex items-center gap-4 font-work">
			<p className="text-2xl font-semibold text-ash-300 md:text-[40px]">
				{days}
				<span className="ml-2 text-lg font-normal text-ash-200 md:text-[32px]">
					days
				</span>
			</p>
			<span className="text-[32px] text-ash-300 md:text-[40px]">:</span>
			<p className="text-2xl font-semibold text-ash-300 md:text-[40px]">
				{hours}
				<span className="ml-2 text-lg font-normal text-ash-200 md:text-[32px]">
					hrs
				</span>
			</p>
			<span className="text-[32px] text-ash-300 md:text-[40px]">:</span>
			<p className="text-2xl font-semibold text-ash-300 md:text-[40px]">
				{minutes}
				<span className="ml-2 text-lg font-normal text-ash-200 md:text-[32px]">
					mins
				</span>
			</p>
		</div>
	)
}

export default Timer
