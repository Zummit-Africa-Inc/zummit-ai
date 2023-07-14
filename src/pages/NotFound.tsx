import { Link } from "react-router-dom"

import not_found from "assets/images/not-found.png"
import { ArrowRight } from "assets/icons-tsx"
import { Footer, Navbar } from "components"
import { usePageTitle } from "hooks"

const NotFound = () => {
	usePageTitle("Not found")

	return (
		<>
			<Navbar />
			<section className="flex w-full flex-col px-2 py-[99px] md:px-[120px]">
				<div className="flex w-full flex-col items-center py-10">
					<img src={not_found} alt="" className="w-full md:w-[400px]" />
					<p className="my-5 w-1/2 text-center text-2xl font-bold text-[#333]">
						The page you're looking for has either been moved or isn't available
					</p>
					<Link to="/" className="flex items-center gap-2 font-bold text-primary">
						<ArrowRight className="rotate-180" /> Go back Home
					</Link>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default NotFound
