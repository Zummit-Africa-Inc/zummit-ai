import { Link } from "react-router-dom"

import { COMMUNITY, FOOOTER } from "constants"
import { logo } from "assets/images"

const Footer = () => {
	return (
		<footer className="w-full bg-black">
			<div className="flex w-full items-start justify-between px-2 pb-32 pt-16 md:px-[120px] xl:px-[240px]">
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
								className="text-xl text-secondary/[40%]">
								<img src={item.icon} alt="" className="aspect-[1/1] w-6" />
							</a>
						))}
					</div>
				</div>
				<div className="flex items-center gap-[10px]">
					{FOOOTER.map(({ menu, title }, index) => (
						<div key={index} className="flex w-[250px] flex-col gap-4">
							<p className="text-xl font-bold text-white">{title}</p>
							<div className="flex flex-col gap-[9px]">
								{menu.map(({ label, url }) => (
									<Link key={label} to={url} className="font-light text-white/[75%]">
										{label}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex w-full items-center border-t border-white/[15%] px-2 py-[26px] md:px-[120px] xl:px-[240px]">
				<p className="text-sm text-white/[80%]">
					Copyright &copy; {new Date().getFullYear()} ZummitAfrica. All rights
					reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
