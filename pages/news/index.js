import { NothingHereYet } from "../../components/NothingHereYet";
import { NewsCard } from "../../components/NewsCard";
import Parallax from "/components/Parallax";
import Head from 'next/head'

export default function News() {
	return (
		<main className="flex repeating-bg min-h-screen justify-items-center">
			<Head>
				<title> MUN Eng Society | News</title>
			</Head>
			<div className="mt-20 justify-items-center w-full h-full">
				<NothingHereYet></NothingHereYet>
			</div>
		</main>
	);
}

/* 
			<h1 className="pt-10 text-black font-norwester text-8xl">News</h1>
			<div id="paralaxdivider" className="h-5 border-t-4 border-black bg-gradient-to-b  from-mun-burgundy to-stone-400" />
						
			<div className="pb-10 pt-10 w-3/5 grid grid-cols-3 mx-auto gap-4 justify-center">
				<NewsCard image="../res/first_dday/img22.jpg" title="The Story of Dday" date="2024" by="Bob Tancock"  link="/dday_story" />
				<NewsCard image="../res/academics/deans_j2025.png" title="Eastern Edge wins multiple awards at MATE International!" date="July 7, 2025" by="Russell Corbett"  link="/events" />
			</div>
*/