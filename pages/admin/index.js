export default function Admin() {
	return (
		<main className="flex min-h-screen flex-col gap-5 bg-mun-grey p-5 pl-40 pr-40">
			<section id="links" className="rounded-3xl border-2 border-black bg-stone-400 p-5">
				<h1 className="text-center font-gold_bold text-4xl font-bold text-white underline">Links</h1>
				<div className="grid grid-cols-7">
					<h2 className="text-center font-gold text-3xl">Title</h2>
					<h2 className="text-center font-gold text-3xl">Link</h2>
					<h2 className="text-center font-gold text-3xl">Description</h2>
					<h2 className="text-center font-gold text-3xl">Photo URL</h2>
					<h2 className="text-center font-gold text-3xl">Begin Date</h2>
					<h2 className="text-center font-gold text-3xl">End Date</h2>
					<h2 className="text-center font-gold text-3xl">Remove Link</h2>
				</div>
				<div id="fields" className="grid grid-cols-7 justify-between pb-5">
					<input type="text" id="Title" name="Title" placeholder="" className="ml-2 mr-2 rounded-full pl-3 font-gold text-black" />
					<input type="text" id="Link" name="Link" placeholder="https://..." className="ml-2 mr-2 rounded-full pl-3 font-gold text-black" />
					<input type="text" id="Description" name="Description" placeholder="" className="ml-2 mr-2 rounded-full pl-3 font-gold text-black" />
					<input type="text" id="Photo_URL" name="Photo_URL" placeholder="" className="ml-2 mr-2 rounded-full pl-3 font-gold text-black" />
					<input type="date" id="Begin" name="Begin" placeholder="" className="ml-2 mr-2 rounded-full pl-3 pr-3 font-gold text-black" />
					<input type="date" id="End" name="End" placeholder="" className="ml-2 mr-2 rounded-full pl-3 pr-3 font-gold text-black" />
					<button className="rounded-full bg-mun-burgundy p-2 pl-5 pr-5 font-gold_bold text-white hover:animate-pulse">Remove</button>
				</div>
				<div id='buttons' className="flex justify-center">
					<button className="text-white font-gold_bold text-xl bg-mun-grey rounded-full p-2">New Link</button>
				</div>
			</section>
		</main>
	);
}
