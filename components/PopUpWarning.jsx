import { useState } from "react";

const PopupWarning = (props) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => {
		setIsOpen(false);
		window.scrollTo(0, 0);
	};

	return (
		<div className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl transition-opacity ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`} style={{ transition: "opacity 0.5s ease-out" }}>
			<div className="flex w-10/12 md:w-3/4 flex-col rounded-2xl bg-white p-4 text-center lg:w-1/2 2xl:w-2/5">
				<h2 className="text-2xl font-bold text-black underline">{props.title}</h2>
				<p className="text-center text-lg font-semibold text-black">{props.text}</p>
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
