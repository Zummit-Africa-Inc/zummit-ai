import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

import { NAVIGATION } from "constants"
import { logo } from "assets/images"

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)

	const handleScroll = () => {
		window.scrollY > 700 ? setScrolled(true) : setScrolled(false)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return (
		<nav
			className={`left-0 top-0 !z-10 flex w-full items-center justify-between border-b border-gray bg-white px-2 py-4 md:px-[120px] ${
				scrolled ? "fixed" : "static"
			}`}>
			<Link to="/">
				<img src={logo} alt="zummit africa logo" className="w-[121px]" />
			</Link>
			<div className="flex items-center gap-[30px]">
				<div className="hidden items-center gap-[30px] md:flex">
					{NAVIGATION.map(({ label, url }) => (
						<NavLink
							key={url}
							to={url}
							className={({ isActive }) =>
								`${isActive ? "text-primary" : "text-gray"}`
							}>
							{label}
						</NavLink>
					))}
				</div>
				<Link
					to="/contact-us"
					className="rounded-[8px] border-2 border-primary px-5 py-2 text-primary">
					Contact Us
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
