import { Link } from "react-router-dom"

import { Footer, Navbar, PaddedBlock } from "components"
import not_found from "/images/not-found.png"
import { ArrowRight } from "assets/icons-tsx"
import { usePageTitle } from "hooks"

const NotFound = () => {
	usePageTitle("Oops!")

	return (
		<>
			<Navbar />
			<PaddedBlock>
				<section className="flex w-full flex-col py-[99px]">
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
			</PaddedBlock>
			<Footer />
		</>
	)
}

export default NotFound
