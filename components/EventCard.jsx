export function EventCard(props) {
	return (
		console.log(props.image),
		(
			<div className="flex flex-col justify-center rounded-3xl bg-stone-400 p-5 lg:flex-row">
				{props.image ? <img className="rounded-xl lg:h-80" src={props.image}></img> : null}
				<div className="flex w-full flex-col justify-center">
					{props.organizer ? <img className="h-24 object-contain" src={props.organizer}></img> : null}
					<h3 className="text-center font-norwester text-3xl lg:text-5xl">{props.name}</h3>
					<h2 className="text-center font-norwester text-lg text-stone-600 lg:text-2xl">{props.alt_name ? `${props.age} • ${props.alt_name} • ${props.date}` : `${props.age} • ${props.date}`}</h2>
					<h3 className="text-md text-center font-norwester text-stone-700 lg:text-xl">
						{props.location} &#x2022; {props.cost}
					</h3>
					<p className="text-center text-stone-800 md:text-sm lg:pl-20 lg:pr-20 lg:text-lg">{props.description}</p>
				</div>
			</div>
		)
	);
}
