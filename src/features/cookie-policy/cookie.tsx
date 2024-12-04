import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { PolicySection } from "./PolicySection"

export const Cookie = () => {
	const legalItems = [
		{ title: "Terms of Use", isActive: false, href: "/terms-of-use" },
		{ title: "Privacy Policy", isActive: false, href: "/privacy-policy" },
		{ title: "Cookie Policy", isActive: true, href: "/cookie-policy" },
	]
	return (
		<>
			<Seo title="Support Zummit Africa" />
			<Appbar />
			<main className="mb-20 mt-24 flex flex-col items-center px-4">
				<div className="mt-20 flex w-[343px] max-w-full flex-col self-center max-md:mt-10">
					<h1 className="text-4xl font-semibold text-black">Cookie Policy</h1>
					<p className="text-gray-600 mt-3 text-xl font-medium">
						Effective Date: September 29, 2024
					</p>
				</div>

				<div className=" w-full max-w-[1200px] self-center max-md:max-w-full sm:mt-10">
					<div className="flex flex-col gap-5 lg:flex-row">
						<aside className="ml-0 flex w-full flex-col lg:w-[19%]">
							<div className="text-gray-600 flex flex-col items-start overflow-hidden rounded-xl border border-solid border-zinc-200 p-8 text-lg font-medium max-md:mt-10 max-md:px-5">
								<h2 className="text-xl font-semibold text-black">LEGAL</h2>
								<nav className="mt-8 w-full">
									{legalItems.map((item, index) => (
										<a
											key={index}
											href={item.href}
											className={`mt-7 block transition-colors first:mt-0 hover:text-zinc-600 ${
												item.isActive ? "font-semibold text-black" : " text-zinc-500"
											}`}>
											{item.title}
										</a>
									))}
								</nav>
							</div>
						</aside>

						<div className="ml-5 flex w-full flex-col max-md:ml-0 md:w-[95%] lg:w-[82%]">
							<article className="bg-gray-50 mx-auto flex w-full flex-col overflow-hidden rounded-2xl bg-white px-10 py-8 text-lg text-black shadow-[0px_0px_35px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full max-md:px-5">
								<p className="leading-7 max-md:max-w-full">
									Zummit Africa uses cookies and similar technologies to enhance your experience on
									our platform. This Cookie Policy explains what cookies are, how we use them, and
									how you can manage your cookie preferences.
								</p>
								<div className="mt-8">
									<PolicySection number="1" title="WHAT ARE COOKIES?">
										<div className="space-y-4">
											<p>
												Cookies are small text files that are placed on your device when you visit a
												website. They are widely used to make websites work more efficiently, as well
												as to provide information to the website owner about how the website is being
												used.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="2" title="TYPES OF COOKIES WE USE">
										<div className="space-y-4">
											<p>We use the following types of cookies on Zummit Africa:</p>
											<ul className="list-disc space-y-2 pl-6">
												<li>
													<strong>Essential Cookies:</strong>These cookies are necessary for the proper
													functioning of our platform and cannot be disabled. They help with basic
													functions like page navigation and access to secure areas of the website.
												</li>
												<li>
													<strong>Analytical Cookies:</strong> These cookies collect information about
													how visitors use our platform, such as which pages are visited most often and
													if users receive error messages. This information helps us improve the
													performance and functionality of our platform.
												</li>
												<li>
													<strong>Functionality Cookies:</strong> These cookies allow our platform to
													remember choices you make (such as your language preference or login details)
													and provide enhanced, more personal features.
												</li>
											</ul>
										</div>
									</PolicySection>
									<PolicySection number="3" title="MANAGING COOKIE PREFERENCES">
										<div className="space-y-4">
											<p>
												Most web browsers automatically accept cookies, but you can modify your
												browser settings to decline cookies if you prefer. However, please note that
												disabling or blocking certain cookies may affect the functionality and
												performance of our platform.
											</p>
											<p>
												For more information on how to manage cookies through your web browser, please
												consult the following resources:
											</p>
											<ul className="list-disc space-y-2 pl-6">
												<li>
													<p className="underline">
														<a href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop">
															Google Chrome
														</a>
													</p>
												</li>
												<li>
													<p className="underline">
														<a href="https://help.apple.com/safari/mac/8.0/en.lproj/sfri11471.html">
															Apple Safari
														</a>
													</p>
												</li>
												<li>
													<p className="underline">
														<a href="https://www.microsoft.com/en-us/edge/learning-center/how-to-manage-and-clear-your-cache-and-cookies?form=MA13I2">
															Microsoft Edge
														</a>
													</p>
												</li>
											</ul>
											<p>
												By continuing to use Zummit Africa, you consent to our use of cookies as
												described in this Cookie Policy. If you have any questions or concerns about
												our use of cookies, please contact us at{" "}
												<span>
													{" "}
													<a href="mailto:contact@zummitafrica.com" className="underline">
														contact@zummitafrica.com
													</a>
												</span>
											</p>
										</div>
									</PolicySection>
								</div>
							</article>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
