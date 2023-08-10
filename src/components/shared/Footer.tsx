import { Link } from "react-router-dom"

import { COMMUNITY, FOOOTER } from "constants"
import { useEventTracker } from "hooks"
import { logo } from "assets/images"

const Footer = () => {
	const registerEvent = useEventTracker("cta")

	return (
		<footer className="w-full bg-black">
			<div className="flex w-full flex-wrap items-start justify-between gap-10 px-5 pb-16 pt-16 md:gap-0 md:pb-32 lg:px-[120px] 2xl:px-[240px]">
				<div className="flex flex-col">
					<Link
						to="/"
						className="grid place-items-center rounded-lg bg-white px-4 py-[10px]">
						<img src={logo} alt="zummit africa logo" className="w-[121px]" />
					</Link>
					<p className="my-5 text-sm text-white/[75%]">
						Democratizing AI in Africa.
					</p>
					<div className="flex items-center gap-2">
						{COMMUNITY.map((item, index) => (
							<a
								key={index}
								href={item.url}
								target="_blank"
								onClick={() => registerEvent("follow link", `${item.url}`)}
								className="text-xl text-secondary-200/[40%]">
								<img
									src={item.icon}
									alt={`${item.name} link`}
									className="aspect-[1/1] w-6"
								/>
							</a>
						))}
					</div>
				</div>
				<div className="flex flex-wrap items-center gap-10 md:gap-[10px]">
					{FOOOTER.map(({ menu, title }, index) => (
						<div key={index} className="flex w-[250px] flex-col gap-4">
							<p className="text-lg font-bold text-white md:text-xl">{title}</p>
							<div className="flex flex-col gap-[9px]">
								{menu.map(({ label, url }) => (
									<Link
										key={label}
										to={url}
										onClick={() => registerEvent("click", `${url}`)}
										className="text-sm font-light text-white/[75%] md:text-base">
										{label}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex w-full items-center border-t border-white/[15%] px-2 py-[26px] md:px-[120px] 2xl:px-[240px]">
				<p className="w-full text-center text-xs text-white/[80%] md:text-sm">
					Copyright &copy; {new Date().getFullYear()} ZummitAfrica. All rights
					reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
