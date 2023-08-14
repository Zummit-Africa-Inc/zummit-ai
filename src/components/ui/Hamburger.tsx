import { Link, NavLink } from "react-router-dom"
import { X } from "@phosphor-icons/react"
import { motion } from "framer-motion"

import { useEventTracker } from "hooks"
import { NAVIGATION } from "constants"
import { logo } from "assets/images"

interface Props {
	onClose: () => void
}

const Hamburger = (props: Props) => {
	const registerEvent = useEventTracker("cta")

	return (
		<motion.div
			initial={{ y: "-100%" }}
			animate={{ y: 0 }}
			transition={{ type: "spring", delay: 0.1, duration: 0.5, bounce: 0.25 }}
			onClick={props.onClose}
			className="fixed left-0 top-0 !z-30 h-screen w-screen bg-black/50">
			<div
				className="flex w-full flex-col bg-white"
				onClick={(e) => e.stopPropagation()}>
				<div className="flex w-full items-center justify-between border-b border-ash-200 px-5 py-4">
					<Link to="/">
						<img
							src={logo}
							alt="zummit africa logo"
							className="w-[90px] md:w-[121px]"
						/>
					</Link>
					<X onClick={props.onClose} className="text-3xl" />
				</div>
				<div className="flex w-full flex-col gap-4 px-5 py-7">
					<div className="flex flex-col gap-4">
						{NAVIGATION.map(({ label, url }) => (
							<NavLink
								key={url}
								to={url}
								onClick={() => {
									registerEvent("click", `${url}`)
									props.onClose()
								}}
								className={({ isActive }) =>
									`nav-link ${isActive ? "text-primary" : "text-ash-100"}`
								}>
								{label}
							</NavLink>
						))}
					</div>
					<Link
						to="/contact-us"
						onClick={() => registerEvent("click", "contact us")}
						className="w-fit rounded-lg border-2 border-primary px-5 py-2 text-primary">
						Contact Us
					</Link>
				</div>
			</div>
		</motion.div>
	)
}

export default Hamburger
