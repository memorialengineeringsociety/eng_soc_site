import Link from "next/link";

export function NewsCard(props) {
	return (
		<div className="flex w-full h-full flex-col items-center space-y-4 rounded-2xl  bg-zinc-800 p-6 shadow-xl shadow-black/50">
			<h2 className="font-norwester font-bold text-2xl text-white text-justify">{props.title}</h2>
			<img src={props.image} className="h-60 w-full rounded-xl object-cover" />
			<p className="text-center text-white font-maven">{props.date}</p>
			<p className="text-center text-white font-maven font-semibold">{props.by}</p>
			<Link href={props.link}>
				<p className="rounded-md bg-mun-burgundy px-4 py-2 font-norwester text-white transition duration-300 hover:bg-white hover:text-black">Read More ⮞</p>
			</Link>
		</div>
	);
}

/*

		<div className="">
			<img className="" />
			<div className="">
				<h3 className=""></h3>
				<h3 className=""></h3>
				<p className=""></p>
			</div>
		</div>
*/