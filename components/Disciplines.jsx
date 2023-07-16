import { useEffect } from "react";

const Disciplines = () => {
	useEffect(() => {
		const disciplineItems = document.getElementsByClassName("fade-ins");

		const fadeInElements = () => {
			for (let i = 0; i < disciplineItems.length; i++) {
				const delay = i * 300; // Delay each element by 1 second
				setTimeout(() => {
					disciplineItems[i].classList.add("fade-in");
				}, delay);
			}
		};
		// Run the function when the items are in view:
		// window.addEventListener('scroll', fadeInElements);

		function handleIntersection(entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio === 1) {
					// Perform your actions here
					fadeInElements();
					// Optional: If you want the event to fire only once, unobserve the div after it has fully come into view
					observer.unobserve(entry.target);
				}
			});
		}

		// Set up the intersection observer
		let observer = new IntersectionObserver(handleIntersection, {
			threshold: 1.0, // 1.0 means 100% of the target is visible
		});

		// Start observing the div
		let div = document.querySelector(".reveal");
		observer.observe(div);
	}, []);

	return (
		<div id="disciplines" className="lg:flex overflow-hidden space-x-3 p-4 hidden reveal">
			<a id="mechanical" className="h-40 w-1/7 bg-red-600 flex flex-col space-y-2 place-items-center justify-center rounded-2xl border-4 border-black hover:scale-105 transition-transform hover:shadow-lg hover:brightness-105 opacity-0 fade-ins">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					build
				</span>
				<h1 className="text-white font-gold xl:text-xl 2xl:text-3xl pointer-events-none">Mechanical</h1>
			</a>
			<a id="mechatronics" className="h-40 w-1/7 bg-blue-500 flex flex-col space-y-2 place-items-center justify-center rounded-2xl border-4 border-black  hover:scale-105 transition-transform hover:shadow-lg hover:brightness-105 opacity-0 fade-ins">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					precision_manufacturing
				</span>
				<h1 className="text-white font-gold xl:text-xl 2xl:text-3xl pointer-events-none">Mechatronics</h1>
			</a>
			<a id="civil" className="h-40 w-1/7 bg-gray-600 flex flex-col space-y-2 place-items-center justify-center rounded-2xl border-4 border-black  hover:scale-105 transition-transform hover:shadow-lg hover:brightness-105 opacity-0 fade-ins">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					construction
				</span>
				<h1 className="text-white font-gold xl:text-xl 2xl:text-3xl pointer-events-none">Civil</h1>
			</a>
			<a id="electrical" className="h-40 w-1/7 bg-yellow-300 flex flex-col space-y-2 place-items-center justify-center rounded-2xl border-4 border-black hover:scale-105 transition-transform hover:shadow-lg hover:brightness-105 opacity-0 fade-ins">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					bolt
				</span>
				<h1 className="text-white font-gold xl:text-xl 2xl:text-3xl pointer-events-none">Electrical</h1>
			</a>
			<a id="computer" className="h-40 w-1/7 bg-orange-500 flex flex-col space-y-2 place-items-center justify-center rounded-2xl border-4 border-black hover:scale-105 transition-transform hover:shadow-lg hover:brightness-105 opacity-0 fade-ins">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					memory
				</span>
				<h1 className="text-white font-gold xl:text-xl 2xl:text-3xl pointer-events-none">Computer</h1>
			</a>
			<a id="ocean-naval" className="h-40 w-1/7 bg-green-600 flex flex-col space-y-2 place-items-center justify-center rounded-2xl border-4 border-black hover:scale-105 transition-transform hover:shadow-lg hover:brightness-105 opacity-0 fade-ins">
				<p className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					directions_boat
				</p>
				<h1 className="text-white font-gold xl:text-xl 2xl:text-3xl pointer-events-none">Ocean Naval</h1>
			</a>
			<a id="process" className="h-40 w-1/7 bg-pink-500 flex flex-col space-y-2 place-items-center justify-center rounded-2xl border-4 border-black hover:scale-105 transition-transform hover:shadow-lg hover:brightness-105 opacity-0 fade-ins">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					science
				</span>
				<h1 className="text-white font-gold xl:text-xl 2xl:text-3xl pointer-events-none">Process</h1>
			</a>
		</div>
	);
};

export default Disciplines;
