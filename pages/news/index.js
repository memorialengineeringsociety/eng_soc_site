import { NothingHereYet } from "../../components/NothingHereYet";
import { NewsCard } from "../../components/NewsCard";
import Head from 'next/head'

export default function News() {
	return (
		<main className="flex repeating-bg min-h-screen">
						<Head>
				<title> MUN Eng Society | News</title>
			</Head>
			<NothingHereYet />
			<NewsCard image="" title="Eastern Edge wins multiple awards at MATE International!" date="July 7th" by="Russell Corbett" text="" link="" />
		</main>
	);
}
