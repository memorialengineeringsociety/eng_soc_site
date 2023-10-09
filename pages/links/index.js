import Link from "next/link";
import { LinkCard } from "../../components/LinkCard";

export default function Events() {
	return (
		<main className="bg-gradient-to-b from-blue-400 to-blue-950">
			<section className="flex flex-col justify-center pt-5">
				<img src="../res/logos/soc_round_logo.png" className="mx-auto h-24 rounded-full lg:h-48" />
				<h1 className="text-center font-gold_bold text-2xl text-white lg:text-4xl">@munengsoc</h1>
				<h1 className="text-center font-gold text-lg text-white lg:text-2xl">MUN Engineering Undergraduate Society</h1>
			</section>
			<section className="flex min-h-screen flex-col place-items-center gap-y-3 p-3">
				<LinkCard title="Eastern Edge Bus Crawl" description="" link="https://forms.gle/uNg4t1UM9F6YeAKv9" image="" />
				<LinkCard title="Patagonia Order Form" description="" link="https://docs.google.com/forms/d/e/1FAIpQLSdphowbJgaiVkwCfUslh0w9xXpM9G20VIgZ2t-H_boepsZYQA/viewform?usp=sf_link" image="" />
				<LinkCard title="Class of 2028 Facebook Group" description="" link="https://m.facebook.com/groups/763757462139761/?ref=share&mibextid=S66gvF" image="" />
				<LinkCard title="Faculty Website" description="" link="https://www.mun.ca/engineering/" image="" />
				<LinkCard title="Counselling Services" description="" link="https://www.mun.ca/studentwellness/supports-services/index.php" image="" />
			</section>
		</main>
	);
}
