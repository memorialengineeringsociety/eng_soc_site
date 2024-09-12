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
		<div id="disciplines" className="reveal grid grid-cols-3 gap-x-3 gap-y-3 overflow-hidden p-4 lg:flex">
			<a id="mechanical" className="fade-ins flex col-span-3 h-40 flex-col place-items-center justify-center space-y-2 rounded-2xl border-4 border-black bg-purple-700 opacity-0 transition-transform hover:scale-105 hover:shadow-lg hover:brightness-105 lg:w-1/7">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					engineering
				</span>
				<h1 className="pointer-events-none text-center font-norwester text-white xl:text-xl 2xl:text-3xl">Engineering One</h1>
			</a>
			<a id="mechanical" className="fade-ins flex h-40 flex-col place-items-center justify-center space-y-2 rounded-2xl border-4 border-black bg-red-600 opacity-0 transition-transform hover:scale-105 hover:shadow-lg hover:brightness-105 lg:w-1/7">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					build
				</span>
				<h1 className="pointer-events-none font-norwester text-white xl:text-xl 2xl:text-3xl">Mechanical</h1>
			</a>
			<a id="mechatronics" className="fade-ins flex h-40 flex-col place-items-center justify-center space-y-2 rounded-2xl border-4 border-black bg-green-600 opacity-0 transition-transform hover:scale-105 hover:shadow-lg hover:brightness-105 lg:w-1/7">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					precision_manufacturing
				</span>
				<h1 className="md:text-md pointer-events-none font-norwester text-sm text-white xl:text-xl 2xl:text-3xl">Mechatronics</h1>
			</a>
			<a id="civil" className="fade-ins flex h-40 flex-col place-items-center justify-center space-y-2 rounded-2xl border-4 border-black bg-gray-600  opacity-0 transition-transform hover:scale-105 hover:shadow-lg hover:brightness-105 lg:w-1/7">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					construction
				</span>
				<h1 className="pointer-events-none font-norwester text-white xl:text-xl 2xl:text-3xl">Civil</h1>
			</a>
			<a id="electrical" className="fade-ins flex h-40 flex-col place-items-center justify-center space-y-2 rounded-2xl border-4 border-black bg-yellow-300 opacity-0 transition-transform hover:scale-105 hover:shadow-lg hover:brightness-105 lg:w-1/7">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					bolt
				</span>
				<h1 className="pointer-events-none font-norwester text-white xl:text-xl 2xl:text-3xl">Electrical</h1>
			</a>
			<a id="computer" className="fade-ins flex h-40 flex-col place-items-center justify-center space-y-2 rounded-2xl border-4 border-black bg-orange-500 opacity-0 transition-transform hover:scale-105 hover:shadow-lg hover:brightness-105 lg:w-1/7">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					memory
				</span>
				<h1 className="pointer-events-none font-norwester text-white xl:text-xl 2xl:text-3xl">Computer</h1>
			</a>
			<a id="ocean-naval" className="fade-ins flex h-40 flex-col place-items-center justify-center space-y-2 rounded-2xl border-4 border-black bg-blue-500 opacity-0 transition-transform hover:scale-105 hover:shadow-lg hover:brightness-105 lg:w-1/7">
				<p className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					directions_boat
				</p>
				<h1 className="pointer-events-none text-center font-norwester text-white xl:text-xl 2xl:text-3xl">Ocean Naval</h1>
			</a>
			<a id="process" className="fade-ins col-start-2 flex h-40 flex-col place-items-center justify-center space-y-2 rounded-2xl border-4 border-black bg-pink-500 opacity-0 transition-transform hover:scale-105 hover:shadow-lg hover:brightness-105 lg:col-start-auto lg:w-1/7">
				<span className="material-icons pointer-events-none" style={{ fontSize: "80px" }}>
					science
				</span>
				<h1 className="pointer-events-none font-norwester text-white xl:text-xl 2xl:text-3xl">Process</h1>
			</a>
		</div>
	);
};

export default Disciplines;
