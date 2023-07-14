import { usePageTitle, useScrollToTop } from "hooks"
import { Button, Footer, Navbar } from "components"
import { PORTFOLIO } from "constants"

const Portfolio = () => {
	usePageTitle("Portfolio")
	useScrollToTop()

	return (
		<>
			<Navbar />
			<section className="flex w-full flex-col items-center px-2 py-[99px] md:px-[120px]">
				<p className="mb-6 mt-[10px] text-[32px] font-bold text-[#333]">
					Showcasing a collection <br /> of products
					<span className="text-secondary"> built by us.</span>
				</p>
				<p className="w-full text-center font-work text-gray-400 md:w-[540px]">
					Here, you will find a diverse range of projects we have successfully
					delivered, spanning various industries and addressing unique challenges.
				</p>
        <div className="w-full flex flex-col gap-[124px] mt-[143px]">
          {PORTFOLIO.map((item, index) => (
            <div key={index} className="w-full flex items-center justify-between even:flex-row-reverse">
              <div className="w-[487px] h-[412px] rouded-[8px]">
                <img src={item.image} alt="" className="w-full h-full rounded-lg object-cover" />
              </div>
              <div className="w-[387px] flex flex-col gap-6">
                <p className="text-2xl text-[#333] font-bold">{item.label}</p>
                <p className="text=lg text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
			</section>
      <section className={`flex w-full flex-col items-center px-2 py-[99px] md:px-[120px] bg-ellipse bg-top`}>
				<div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-300 py-10">
					<p className="text-[32px] font-bold text-secondary">
						Let's Connect{" "}
						<span className="text-primary">and Bring your ideas to life</span>
					</p>
					<p className="mb-[32px] mt-[15px] font-work text-gray-400">
						Click the button below to chat, book a meeting, or call our team directly.
					</p>
					<Button
						label="Talk to us"
						to="/contact-us"
						className="bg-primary text-white"
					/>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Portfolio
