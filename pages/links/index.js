import Link from "next/link";
import { LinkCard } from "../../components/LinkCard";
import jsonData from "public/json/links.json";
import Head from 'next/head'

const data = jsonData;

export default function Events() {
	return (
		<main className="bg-gradient-to-b from-blue-400 to-blue-950">
						<Head>
				<title> MUN Eng Society | Links</title>
			</Head>
			<section className="flex flex-col justify-center pt-5">
				<img src="../res/logos/soc_round_logo.png" className="mx-auto h-24 rounded-full lg:h-48" />
				<h1 className="text-center font-norwester text-2xl text-white lg:text-4xl">@munengsoc</h1>
				<h1 className="text-center font-norwester text-lg text-white lg:text-2xl">MUN Engineering Undergraduate Society</h1>
			</section>
			<section className="flex min-h-screen flex-col place-items-center gap-y-3 p-3">
				{Object.entries(data).map(([event, event_data]) => {
					return <LinkCard title={event} description={event_data.description} link={event_data.link} image={event_data.image}/>;
				})}
			</section>
		</main>
	);
}
