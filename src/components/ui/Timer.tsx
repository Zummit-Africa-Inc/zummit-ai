import { useEffect, useState } from "react"

interface Props {
  deadline: string
}

const Timer = (props: Props) => {
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  const getTime = () => {
    const time  = Date.parse(props.deadline) - Date.now()
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getTime()
    }, 1000)
    return () => clearInterval(interval)
  },[])

  return (
    <div className="flex items-center gap-4 font-work">
      <p className="text-[40px] text-[#333] font-semibold">
        {days}<span className="text-[32px] text-gray-400 font-normal ml-2">days</span>
      </p>
      <span className="text-[40px] text-[#333]">:</span>
      <p className="text-[40px] text-[#333] font-semibold">
        {hours}<span className="text-[32px] text-gray-400 font-normal ml-2">hrs</span>
      </p>
      <span className="text-[40px] text-[#333]">:</span>
      <p className="text-[40px] text-[#333] font-semibold">
        {minutes}<span className="text-[32px] text-gray-400 font-normal ml-2">mins</span>
      </p>
    </div>
  )
}

export default Timer