import { useState } from "react";

const PopupWarning = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => {
		setIsOpen(false);
		window.scrollTo(0, 0);
	};

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-black backdrop-blur-xl bg-opacity-50 flex justify-center items-center transition-opacity ${
				isOpen ? "opacity-100 visible" : "opacity-0 invisible"
			}`}
			style={{ transition: "opacity 0.5s ease-out" }}>
			<div className="bg-white p-4 rounded-2xl text-center w-3/4 lg:w-1/2 2xl:w-1/5 flex flex-col">
				<h2 className="text-2xl font-bold text-black underline">Disclaimer</h2>
				<p className="text-lg font-semibold text-black text-center">
					The following includes content that is a product of its time and does
					not align with the values or norms of the current society. We strongly
					disagree with its viewpoints and encourage readers to approach this
					material with caution. It is crucial to recognize that societal
					attitudes and perspectives evolve over time, and this content serves
					as a reflection of past beliefs, behaviors, and cultural practices. We
					urge you to view this content critically, considering the progress and
					social change that has likely taken place since its creation.
				</p>
				<button
					className="mt-2 px-4 py-2 bg-mun-burgundy text-white rounded"
					onClick={handleClose}>
					Continue
				</button>
				<a className="mt-2 underline text-gray-500" href="/">
					Return to Home
				</a>
			</div>
		</div>
	);
};

export default PopupWarning;
