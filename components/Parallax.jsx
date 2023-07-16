import React, { useState, useEffect } from "react";

const Parallax = ({ children, image }) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const onScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div className="relative h-screen w-screen overflow-hidden">
			<div
				className="absolute h-full w-full bg-cover bg-center"
				style={{
					backgroundImage: `url(${image})`,
					transform: `translateY(${scrollPosition * 0.5}px)`,
				}}
			/>
			<div className="relative h-full w-full bg-black bg-opacity-50">
				{children}
			</div>
		</div>
	);
};

export default Parallax;
