import Link from "next/link";
import { LinkCard } from "../../components/LinkCard";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

export default function Events() {
	const [links, setLinks] = useState([]);
	const supabase = createClientComponentClient();

	useEffect(() => {
		const getData = async () => {
			const {data} = await supabase.from('links').select();
			setLinks(data);
		}
		getData();
	}, []);

	return (
		<main className="bg-gradient-to-b from-blue-400 to-blue-950">
			<section className="flex flex-col justify-center pt-5">
				<img src="../res/logos/soc_round_logo.png" className="mx-auto h-24 rounded-full lg:h-48" />
				<h1 className="text-center font-gold_bold text-2xl text-white lg:text-4xl">@munengsoc</h1>
				<h1 className="text-center font-gold text-lg text-white lg:text-2xl">MUN Engineering Undergraduate Society</h1>
			</section>
			<section className="flex min-h-screen flex-col place-items-center gap-y-3 p-3">
				{links.map((link) => (<LinkCard title={link.title} link={link.link} image={link.photo_url} />))}
			</section>
		</main>
	);
}
