import Link from "next/link";
import { LinkCard } from "../../components/LinkCard";

export default function Events() {
	return (
		<main className="bg-gradient-to-b from-blue-400 to-blue-950">
			<section className="pt-5 flex flex-col justify-center">
				<img
					src="../res/logos/soc_round_logo.png"
					className="h-24 lg:h-48 mx-auto rounded-full"
				/>
				<h1 className="text-white font-gold_bold text-2xl lg:text-4xl text-center">
					@munengsoc
				</h1>
				<h1 className="text-white font-gold text-lg lg:text-2xl text-center">
					MUN Engineering Undergraduate Society
				</h1>
			</section>
			<section className="flex flex-col gap-y-3 place-items-center p-3 min-h-screen">
				<LinkCard
					title="Soccer Registration Form"
					description=""
					link="https://docs.google.com/forms/d/e/1FAIpQLSfEsOPwHqsRCYyDr0p6pblW5_V6sCmaxuBCzkZYvzTEoQV6GA/viewform?usp=sf_link"
					image=""
				/>
				<LinkCard
					title="Professor's Appreciation Award"
					description=""
					link="https://docs.google.com/forms/d/e/1FAIpQLSe7sDYTyXxOrJS8XAqDWVg1i24yQ14q1eUaTd4gayCeDoFTQA/viewform?usp=sf_link"
					image=""
				/>
				<LinkCard
					title="Fall 2023 D-Day Mug Design Contest"
					description=""
					link="https://docs.google.com/forms/d/1KYdXAvXpR7TomDo688FYIBlB7JL8OcRqObAH4NAUZ0M/edit"
					image=""
				/>
				<LinkCard
					title="Faculty Website"
					description=""
					link="https://www.mun.ca/engineering/"
					image=""
				/>
				<LinkCard
					title="Counselling Services"
					description=""
					link="https://www.mun.ca/studentwellness/supports-services/index.php"
					image=""
				/>
			</section>
		</main>
	);
}
