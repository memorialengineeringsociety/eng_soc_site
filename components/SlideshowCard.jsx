import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SlideshowComponent(props) {
	const [slideIndex, setSlideIndex] = useState(0);

	const images = props.images;

	const nextSlide = () => {
		setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setSlideIndex((prevSlideIndex) => (prevSlideIndex - 1 + images.length) % images.length);
	};

	//automaticially change slides after 10 seconds
	useEffect(() => {
		const timeout = setTimeout(() => {
			const interval = setInterval(() => {
				setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % images.length);
			}, 10000);
			// Save the interval id to clear it when the component unmounts
			return () => clearInterval(interval);
		}, props.delay); // Delay of X seconds

		// Clear the timeout if the component unmounts within the first 2 seconds
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="p-6 w-96 bg-stone-400 shadow rounded-2xl flex flex-col items-center space-y-4 border-4 border-black">
			<h2 className="text-4xl font-bold font-gold_bold text-white">{props.title}</h2>
			<button onClick={nextSlide} className="w-full border-4 border-white rounded-2xl">
				<motion.img src={images[slideIndex]} key={slideIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="h-60 w-full object-cover rounded-xl" />
			</button>
			<p className="text-black text-center">{props.description}</p>
			<Link href={props.href}>
				<p className="bg-mun-burgundy text-white px-4 py-2 rounded-md font-gold">Navigate to Page</p>
			</Link>
		</div>
	);
}
