export function LinkCard(props) {
	return (
		<a href={props.link} target="_blank" className="group w-3/4 rounded-3xl border border-white p-5 transition-colors hover:bg-white lg:w-1/3">
			<div className="flex items-center justify-evenly">
				{props.image ? <img src={props.image} className="h-12 lg:h-24" /> : null}
				<div className="text-center">
					<h1 className="font-ops text-lg font-bold text-white group-hover:text-black lg:text-2xl">{props.title}</h1>
					{props.description ? <p className="text-md font-gold text-white group-hover:text-black lg:text-xl">{props.description}</p> : null}
				</div>
			</div>
		</a>
	);
}
