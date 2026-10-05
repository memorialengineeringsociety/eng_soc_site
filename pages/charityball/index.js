import Head from "next/head";
import Link from "next/link";
import Parallax from "../../components/Parallax";

const eventDetails = [
	{ label: "Date", value: "Saturday, February 6th, 2027" },
	{ label: "Location", value: "Delta Hotel • 120 Gower St, St. John's" },
];

export default function CharityBall() {
	return (
		<main className="repeating-bg charity-ball-bg text-black">
			<Head>
				<title>MUN Eng Society | Charity Ball</title>
			</Head>

			<Parallax image="/res/charityball/2027/CB-background.jpg">
				<div className="flex h-fit flex-col items-center pt-5 text-center text-white lg:pt-20">
					<h3 className="mt-4 font-norwester text-2xl tracking-wide text-charity-ball-light-blue lg:text-4xl">19TH ANNUAL WINTER</h3>
					<h4 className="font-norwester text-5xl font-bold sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6rem]">CHARITY BALL</h4>
					<div className="w-6/7 space-y-5 p-8 text-center font-maven text-base md:text-xl lg:w-4/5 lg:p-20 xl:text-xl">
						<p className="text-shadow-lg">
							Each year, the Engineering Society brings together students, alumni, faculty, and community partners for a night of celebration and giving back.
						</p>
						<p className="text-shadow-lg">
							This year&apos;s Winter Charity Ball supports local organizations making a direct impact in Newfoundland and Labrador while building community through a formal evening of fundraising and connection.
						</p>
					</div>
				</div>
			</Parallax>

			<div className="h-10 border-b-4 border-t-4 border-black bg-mun-burgundy" />

			<section className="mx-auto max-w-6xl px-6 py-12">
				<div className="grid items-center gap-8 lg:grid-cols-1">
					<div className="space-y-5">
						<h2 className="font-norwester text-4xl text-black lg:text-5xl">About the Event</h2>
						<p className="text-justify font-maven text-lg text-slate-700">
							Charity Ball is one of Engineering Society&apos;s signature events, bringing together students and community members for a formal evening with a meaningful purpose. Proceeds and awareness raised help support organizations making a direct impact across Newfoundland and Labrador.
						</p>
						<p className="text-justify font-maven text-lg text-slate-700">
							This year is dedicated to supporting CPAWS Newfoundland &amp; Labrador and the Jacob Puddister Memorial Foundation, two organizations focused on conservation and youth mental health care in our province.
						</p>

						<div className="grid gap-4 sm:grid-cols-2">
							{eventDetails.map((detail) => (
								<div key={detail.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
									<p className="font-norwester text-sm uppercase tracking-[0.18em] text-charity-ball-dark-blue">{detail.label}</p>
									<p className="mt-2 font-maven text-lg text-slate-800">{detail.value}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="mx-auto max-w-6xl px-6">
					<h2 className="text-center font-norwester text-4xl text-black lg:text-5xl">How You Can Help</h2>
					<p className="mx-auto mt-4 max-w-3xl text-center font-maven text-lg text-slate-700">
						Whether you&apos;d like to support financially, contribute an item, or help spread the word, there are several ways to get involved in this year&apos;s Charity Ball.
					</p>
					<div className="mt-8 grid gap-5 md:grid-cols-3">
						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<p className="font-norwester text-2xl text-charity-ball-dark-blue">Become a Sponsor</p>
							<p className="mt-3 font-maven text-base text-slate-700">Support the event and help us raise more for our chosen charities through sponsorship opportunities.</p>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<p className="font-norwester text-2xl text-charity-ball-dark-blue">Donate Auction Items</p>
							<p className="mt-3 font-maven text-base text-slate-700">If you have an item or service to donate, it can help us grow the fundraising impact of the evening.</p>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<p className="font-norwester text-2xl text-charity-ball-dark-blue">Contact Us</p>
							<p className="mt-3 font-maven text-base text-slate-700">
								Reach out at <a href="mailto:sjebruneau@mun.ca" className="font-bold text-charity-ball-dark-blue underline">sjebruneau@mun.ca</a> for sponsorships, donations, and event questions.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="mx-auto max-w-6xl px-6">
					<h2 className="mb-8 text-center font-norwester text-4xl text-black lg:text-5xl">Charity Information</h2>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
							<div className="grid items-center gap-5 md:grid-cols-[1fr_160px]">
								<div>
									<h3 className="font-norwester text-3xl text-charity-ball-dark-blue">CPAWS Newfoundland &amp; Labrador</h3>
									<p className="mt-5 text-justify font-maven text-lg text-slate-700">
										CPAWS Newfoundland &amp; Labrador is a conservation organization focused on protecting the province&apos;s land, freshwater, and marine environments. Their work includes advocating for protected areas, conserving wildlife and ecosystems, supporting marine conservation, and engaging communities in environmental stewardship.
									</p>
								</div>
								<Link href="https://cpawsnl.org" target="_blank" rel="noreferrer" className="flex justify-center">
									<img
										src="/res/charityball/2027/cpaws_PAW-print_transparent.png"
										alt="CPAWS NL logo"
										className="h-28 w-auto object-contain"
									/>
								</Link>
							</div>
						</div>

						<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
							<div className="grid items-center gap-5 md:grid-cols-[1fr_180px]">
								<div>
									<h3 className="font-norwester text-3xl text-charity-ball-dark-blue">Jacob Puddister Memorial Foundation</h3>
									<p className="mt-5 text-justify font-maven text-lg text-slate-700">
										The Jacob Puddister Memorial Foundation supports youth mental health in Newfoundland and Labrador through accessible services, community partnerships, and efforts to reduce stigma. Its programs include free counselling, peer support, and therapeutic groups for young people across the province.
									</p>
								</div>
								<Link href="https://www.jpmemorialfoundation.com" target="_blank" rel="noreferrer" className="flex justify-center">
									<img
										src="/res/charityball/2027/JPMFlogo1+RGB.png.webp"
										alt="Jacob Puddister Memorial Foundation logo"
										className="h-28 w-auto object-contain"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</main>
	);
}

