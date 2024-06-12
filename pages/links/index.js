import { LinkCard } from "../../components/LinkCard";
import Head from "next/head";
import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function Events() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vR83XwKx-73K3XbnY1-1ejMyRL2VpCCAt7seGKR9v_w_8T-frVnd4efvHiifYidClQfyd1UwjEqIiV0/pub?output=csv")
			.then((response) => response.text())
			.then((data) => {
				const results = Papa.parse(data, { header: true });
				setData(results.data);
				//console.log(results.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);
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
				{data &&
					Object.entries(data).map(([event, event_data]) => {
						const currentDate = new Date();
						const beginShow = event_data.BeginShow ? new Date(event_data.BeginShow) : null;
						const endShow = event_data.EndShow ? new Date(event_data.EndShow) : null;
						console.log(currentDate, beginShow, endShow)

						if ((!beginShow && !endShow) || (beginShow && !endShow && currentDate >= beginShow) || (!beginShow && endShow && currentDate <= endShow) || (beginShow && endShow && currentDate >= beginShow && currentDate <= endShow)) {
							return <LinkCard title={event_data.Title} description={event_data.Description} link={event_data.Link} image={event_data.ImageLink} targetDate={event_data.Countdown} targetText={event_data.CountdownText} />;
						}
					})}
			</section>
		</main>
	);
}
