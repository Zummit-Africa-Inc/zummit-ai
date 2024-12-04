import React from "react"

import { Appbar, Footer, Seo } from "@/components/shared"
import { PolicySection } from "./PolicySection"

export const Privacy = () => {
	const legalItems = [
		{ title: "Terms of Use", isActive: false, href: "/terms-of-use" },
		{ title: "Privacy Policy", isActive: true, href: "/privacy-policy" },
		{ title: "Cookie Policy", isActive: false, href: "/cookie-policy" },
	]
	return (
		<>
			<Seo title="Support Zummit Africa" />
			<Appbar />
			<main className="mb-20 mt-24 flex flex-col items-center px-4">
				<div className="mt-20 flex w-[343px] max-w-full flex-col self-center max-md:mt-10">
					<h1 className="text-4xl font-semibold text-black">Privacy Policy</h1>
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
									Zummit Africa is committed to protecting your privacy. This Privacy Policy
									outlines how we collect, use, and disclose your personal information when you
									interact with our website, services, or products.
								</p>
								<div className="mt-8">
									<PolicySection number="1" title="INFORMATION WE COLLECT">
										<div className="space-y-4">
											<p>We collect:</p>
											<ul className="list-disc space-y-2 pl-6">
												<li>
													<strong>Personal Information:</strong> We may collect personal information
													such as your name, email address, phone number, and other information you
													voluntarily provide when you register for our services, contact us, or
													participate in our events.
												</li>
												<li>
													<strong>Usage Data:</strong> We may collect information about how you
													interact with our website, including your IP address, browser type, and pages
													visited.
												</li>
												<li>
													<strong>Cookies and Tracking Technologies:</strong> We may use cookies and
													other tracking technologies to collect information about your usage patterns
													and preferences.
												</li>
											</ul>
										</div>
									</PolicySection>
									<PolicySection number="2" title="HOW WE USE YOUR INFORMATION">
										<div className="space-y-4">
											<ul className="list-disc space-y-2 pl-6">
												<li>
													<strong>Provide Services:</strong> We use your information to provide and
													improve our services, respond to your inquiries, and personalize your
													experience.
												</li>
												<li>
													<strong>Communicate with You:</strong> We may use your contact information to
													send you important updates, notifications, and marketing communications.
												</li>
												<li>
													<strong>Analyze Usage:</strong> We analyze usage data to understand how our
													services are used and to improve our offerings.
												</li>
												<li>
													<strong>Comply with Legal Requirements:</strong> We may use your information
													to comply with legal obligations or to protect our rights.
												</li>
											</ul>
										</div>
									</PolicySection>
									<PolicySection number="3" title="SHARING YOUR INFORMATION">
										<div className="space-y-4">
											<p>We may share your personal information with:</p>
											<ul className="list-disc space-y-2 pl-6">
												<li>
													<strong>Third-Party Service Providers:</strong> We may engage third-party
													service providers to assist us in providing our services. These providers may
													have access to your personal information to perform their functions on our
													behalf.
												</li>
												<li>
													<strong>Business Partners:</strong> We may share your information with
													business partners for joint marketing or promotional purposes.
												</li>
												<li>
													<strong>Legal Authorities:</strong> We may disclose your information to law
													enforcement or other authorities as required by law.
												</li>
											</ul>
										</div>
									</PolicySection>
									<PolicySection number="4" title="DATA SECURITY">
										<div className="space-y-4">
											<p>
												We implement reasonable security measures to protect your personal information
												from unauthorized access, disclosure, alteration, or destruction. However, no
												method of transmission over the internet or electronic storage is 100% secure.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="5" title="YOUR RIGHTS">
										<div className="space-y-4">
											<p>
												You may have certain rights regarding your personal information, such as the
												right to access, correct, or delete your data. You can exercise these rights
												by contacting us using the information provided below.
											</p>
										</div>
									</PolicySection>
									<PolicySection number="6" title="CONTACT US">
										<div className="space-y-4">
											<p>
												If you have any questions about this Privacy Policy or our data practices,
												please contact us at:
											</p>
											<p className="underline">
												<a href="mailto:contact@zummitafrica.com">contact@zummitafrica.com</a>
											</p>
											<p>08100184687</p>
										</div>
									</PolicySection>
									<PolicySection number="7" title="CHANGES TO THIS PRIVACY POLICY">
										<div className="space-y-4">
											<p>
												We may update this Privacy Policy from time to time. Any changes will be
												posted on this page, and we will notify you by email if the changes are
												significant. By using our services, you consent to the collection and use of
												your information as described in this Privacy Policy.
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
