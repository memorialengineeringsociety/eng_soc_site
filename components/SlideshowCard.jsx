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
		<div className="flex w-96 flex-col items-center space-y-4 rounded-2xl border-4 border-black bg-stone-400 p-6 shadow">
			<h2 className="font-gold_bold text-4xl font-bold text-white">{props.title}</h2>
			<button onClick={nextSlide} className="w-full rounded-2xl border-4 border-white">
				<motion.img src={images[slideIndex]} key={slideIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="h-60 w-full rounded-xl object-cover" />
			</button>
			<p className="text-center text-black">{props.description}</p>
			<Link href={props.href}>
				<p className="rounded-md bg-mun-burgundy px-4 py-2 font-gold text-white">Navigate to Page</p>
			</Link>
		</div>
	);
}
