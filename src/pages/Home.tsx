import { adornment, startup_1, startup_2, startup_3, what } from "assets/images"
import { Button, Footer, Navbar } from "components"
import { chat_bubble } from "assets/icons"
import { OPERATIONS } from "constants"
import { usePageTitle } from "hooks"

const Home = () => {
	usePageTitle("Home")

	return (
		<>
			<Navbar />
			<section className="grid w-full grid-cols-2 gap-[122px] px-2 py-[99px] md:px-[120px]">
				<div className="w-full">
					<p className="text-[44px] font-bold text-[#333]">
						Custom-Built <span className="text-secondary">Solutions</span> and{" "}
						<span className="text-secondary">AI Integration</span> for Business
						Transformation and Success.
					</p>
					<p className="my-8 text-[#616161]">
						Zummit Africa specializes in creating tailored solutions to transform
						businesses by leveraging AI and delivering tailored products to reach
						their full potential.
					</p>
					<Button
						label="Contact Us"
						to="/contact-us"
						className="bg-primary text-white"
					/>
				</div>
				<div className="grid w-full grid-cols-3 gap-5">
					<div className="flex w-full flex-col gap-4">
						<img src={startup_1} alt="people in a creative meeting" className="" />
						<img src={adornment} alt="yellow pattern adornment" />
					</div>
					<div className="flex w-full flex-col gap-4">
						<img src={startup_2} alt="hands high fiving" className=""/>
					</div>
					<div className="flex w-full flex-col gap-4">
						<img src={adornment} alt="yellow pattern adornment" />
						<img src={startup_3} alt="people in a creative meeting" className=""/>
					</div>
				</div>
			</section>
			<section className="relative h-[1px] w-full bg-gray">
				<button className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-[26px] bg-secondary px-8 py-4 md:right-[120px]">
					<img src={chat_bubble} alt="" />
					<span className="text-sm font-semibold text-primary">
						Chat with Our Bot
					</span>
				</button>
			</section>
			<section className="grid w-full grid-cols-2 gap-[122px] px-2 py-[99px] md:px-[120px]">
        <div className="w-full">
          <img src={what} alt="" />
        </div>
        <div className="w-full grid grid-cols-2 items-center gap-x-[41px] gap-y-[72px]">
          {OPERATIONS.map((item, index) => (
            <div key={index} className="w-full flex flex-col">
              <img src={item.image} alt={item.label} className="w-[30px]" />
              <p className="text-2xl text-[#333] font-bold my-5">{item.label}</p>
              <p className="text-gray font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
			<Footer />
		</>
	)
}

export default Home
