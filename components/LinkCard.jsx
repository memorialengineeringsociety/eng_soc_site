import { useEffect, useState } from "react";

export function LinkCard(props) {
	const [countdown, setCountdown] = useState(null); // Initialize countdown as null

	function formatCountdown(countdown) {
		const days = Math.floor(countdown / (24 * 60 * 60 * 1000));
		const hours = Math.floor((countdown % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
		const minutes = Math.floor((countdown % (60 * 60 * 1000)) / (60 * 1000));
		const seconds = Math.floor((countdown % (60 * 1000)) / 1000);

		return `${props.targetText}: ${days}d ${hours}h ${minutes}m ${seconds}s`;
	}

	useEffect(() => {
		if (props.targetDate) {
			const targetDate = new Date(props.targetDate);
			const interval = setInterval(() => {
				const now = new Date();
				const timeRemaining = Math.max(0, targetDate - now);
				setCountdown(timeRemaining);
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [props.targetDate]);

	return (
		<a href={props.link} target="_blank" className="group w-3/4 rounded-3xl border border-white p-5 transition-colors hover:bg-white lg:w-1/3">
			<div className="flex items-center justify-evenly">
				{props.image ? <img src={props.image} className="h-12 lg:h-24" /> : null}
				<div className="text-center">
					<h3 className="font-norwester text-lg font-bold text-white group-hover:text-black lg:text-2xl">{props.title}</h3>
					{props.description ? <p className="text-md font-norwester text-white group-hover:text-black lg:text-xl">{props.description}</p> : null}
					{countdown !== null && <p className="text-md font-norwester text-white group-hover:text-black lg:text-xl">{formatCountdown(countdown)}</p>}
				</div>
			</div>
		</a>
	);
}
