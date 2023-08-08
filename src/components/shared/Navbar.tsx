import { Link, NavLink } from "react-router-dom"
import { List, X } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

import { useEventTracker } from "hooks"
import { NAVIGATION } from "constants"
import { logo } from "assets/images"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const registerEvent = useEventTracker("cta")

	const handleScroll = () => {
		window.scrollY > 700 ? setScrolled(true) : setScrolled(false)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav
			className={`left-0 top-0 !z-10 flex w-full items-center justify-between border-b border-ash-200 bg-white px-5 py-4 md:px-[120px] 2xl:px-[240px] ${
				scrolled ? "fixed" : "static"
			}`}>
			<Link to="/">
				<img
					src={logo}
					alt="zummit africa logo"
					className="w-[90px] md:w-[121px]"
				/>
			</Link>
			<div className="hidden items-center gap-[30px] md:flex">
				<div className="flex items-center gap-[30px]">
					{NAVIGATION.map(({ label, url }) => (
						<NavLink
							key={url}
							to={url}
							onClick={() => registerEvent("click", `${url}`)}
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
					className="rounded-lg border-2 border-primary px-5 py-2 text-primary">
					Contact Us
				</Link>
			</div>
			<button
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className="block text-3xl text-black transform transition-all duration-500 md:hidden">
				{isMenuOpen ? <X /> : <List />}
			</button>
		</nav>
	)
}

export default Navbar
