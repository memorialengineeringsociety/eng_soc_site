import { useState } from "react";

const PopupWarning = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => {
		setIsOpen(false);
		window.scrollTo(0, 0);
	};

	return (
		<div className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl transition-opacity ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`} style={{ transition: "opacity 0.5s ease-out" }}>
			<div className="flex w-3/4 flex-col rounded-2xl bg-white p-4 text-center lg:w-1/2 2xl:w-1/5">
				<h2 className="text-2xl font-bold text-black underline">Disclaimer</h2>
				<p className="text-center text-lg font-semibold text-black">The following includes content that is a product of its time and does not align with the values or norms of the current society. We strongly disagree with its viewpoints and encourage readers to approach this material with caution. It is crucial to recognize that societal attitudes and perspectives evolve over time, and this content serves as a reflection of past beliefs, behaviors, and cultural practices. We urge you to view this content critically, considering the progress and social change that has likely taken place since its creation.</p>
				<button className="mt-2 rounded bg-mun-burgundy px-4 py-2 text-white" onClick={handleClose}>
					Continue
				</button>
				<a className="mt-2 text-gray-500 underline" href="/">
					Return to Home
				</a>
			</div>
		</div>
	);
};

export default PopupWarning;
