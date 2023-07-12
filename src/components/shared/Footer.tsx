import { Link } from "react-router-dom"

import { logo } from "assets/images"
import { FOOOTER } from "constants"

const Footer = () => {
	return (
		<footer className="w-full bg-black">
			<div className="flex w-full items-start justify-between px-2 pb-32 pt-16 md:px-[120px]">
				<div className="flex flex-col">
					<Link
						to="/"
						className="grid place-items-center rounded-[8px] bg-white px-4 py-[10px]">
						<img src={logo} alt="zummit africa logo" className="w-[121px]" />
					</Link>
					<p className="my-5 text-sm text-white/[75%]">
						Democratizing AI in Africa.
					</p>
				</div>
				<div className="flex items-center gap-[10px]">
					{FOOOTER.map(({ menu, title }, index) => (
						<div key={index} className="w-[250px] flex flex-col gap-4">
							<p className="text-xl font-bold text-white">{title}</p>
              <div className="flex flex-col gap-[9px]">
                {menu.map(({label, url}, index) => (
                  <Link key={index} to={url} className="text-white/[75%] font-light capitalize">
                    {label}
                  </Link>
                ))}
              </div>
						</div>
					))}
				</div>
			</div>
			<div className="flex w-full items-center border-t border-white/[15%] px-2 py-[26px] md:px-[120px]">
				<p className="text-sm text-white/[80%]">
					Copyright &copy; {new Date().getFullYear()} ZummitAfrica. All rights
					reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
