import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { PolicySection } from "./PolicySection"

export const Terms = () => {
	const legalItems = [
		{ title: "Terms of Use", isActive: true, href: "/terms-of-use" },
		{ title: "Privacy Policy", isActive: false, href: "/privacy-policy" },
		{ title: "Cookie Policy", isActive: false, href: "/cookie-policy" },
	]
	return (
		<>
			<Seo title="Support Zummit Africa" />
			<Appbar />
			<main className="mb-20 mt-24 flex flex-col items-center px-4">
				<div className="mt-20 flex w-[343px] max-w-full flex-col self-center max-md:mt-10">
					<h1 className="text-4xl font-semibold text-black">Terms of Use</h1>
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
									Welcome to Zummit Africa! These Terms of Use govern your access to and use of our
									website and services. You agree to comply with these terms by accessing or using
									our platform. Please read them carefully.
								</p>
								<div className="mt-8">
									<PolicySection number="1" title="ACCEPTANCE OF TERMS">
										<div className="space-y-4">
											<p>
												By accessing or using Zummit Africa, you agree to be bound by these Terms of
												Use and our Privacy Policy. If you do not agree to these terms, please do not
												use our platform.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="2" title="USE OF SERVICES">
										<div className="space-y-4">
											<p>
												You may use Zummit Africa for personal, non-commercial purposes only. You
												agree not to use our platform for any unlawful or prohibited activities,
												including but not limited to:
											</p>
											<ul className="list-disc space-y-2 pl-6">
												<li>Violating any applicable laws or regulations.</li>
												<li>Interfering with the operation of our platform.</li>
												<li>Attempting to gain unauthorized access to our systems or data.</li>
												<li>
													Engaging in any activity that may harm or disrupt our platform or its users.
												</li>
											</ul>
										</div>
									</PolicySection>
									<PolicySection number="3" title="USER ACCOUNTS">
										<div className="space-y-4">
											<p>
												To access certain features of Zummit Africa, you may be required to create a
												user account. You are responsible for maintaining the security of your account
												credentials and for any activities that occur under your account.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="4" title="INTELLECTUAL PROPERTY">
										<div className="space-y-4">
											<p>
												All content and materials on Zummit Africa, including but not limited to text,
												graphics, logos, and software, are owned by or licensed to us and are
												protected by copyright and other intellectual property laws. You may not
												reproduce, distribute, or create derivative works based on our content without
												our prior written consent.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="5" title="USER CONTENT">
										<div className="space-y-4">
											<p>
												You may submit content, such as comments or problem solutions, to Zummit
												Africa. By submitting content, you grant us a non-exclusive, royalty-free,
												perpetual, irrevocable, and fully sublicensable right to use, reproduce,
												modify, adapt, publish, translate, distribute, and display such content
												worldwide.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="6" title="PRIVACY">
										<div className="space-y-4">
											<p>
												We respect your privacy and are committed to protecting your personal
												information. Please review our Privacy Policy to understand how we collect,
												use, and disclose your information.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="7" title="DISCLAIMER OF WARRANTIES">
										<div className="space-y-4">
											<p>
												Zummit Africa is provided on an {'"as is"'} and {'"as available"'} basis,
												without any warranties of any kind, express or implied. We do not warrant that
												our platform will be error-free, uninterrupted, or free from viruses or other
												harmful components.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="8" title="LIMITATION OF LIABILITY">
										<div className="space-y-4">
											<p>
												In no event shall Zummit Africa be liable for any indirect, incidental,
												special, consequential, or punitive damages, arising out of or in connection
												with your use of our platform.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="9" title="INDEMNIFICATION">
										<div className="space-y-4">
											<p>
												You agree to indemnify and hold harmless Zummit Africa, its affiliates, and
												their respective officers, directors, employees, and agents, from and against
												any claims, liabilities, damages, losses, and expenses arising out of or in
												connection with your use of our platform.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="10" title="MODIFICATION TO TERMS">
										<div className="space-y-4">
											<p>
												We reserve the right to modify or update these Terms of Use at any time,
												without prior notice. We encourage you to review these terms periodically for
												any changes.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="11" title="CONTACT US">
										<div className="space-y-4">
											<p>If you have any questions about this Terms of Use, please contact us at:</p>
											<p className="underline">
												<a href="mailto:contact@zummitafrica.com">contact@zummitafrica.com</a>
											</p>
											<p>08100184687</p>
											<p>Thank you for using Zummit Africa!</p>
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
