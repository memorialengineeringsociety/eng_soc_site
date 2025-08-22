import Image from "next/image";
import React, { Component } from "react";
import Parallax from "/components/Parallax";
import Disciplines from "/components/Disciplines";
import SlideshowComponent from "/components/SlideshowCard";
import getImagePaths from "/components/getImagePaths";
import Head from "next/head";

export default function Home() {
	return (
		<main className="repeating-bg flex min-h-screen flex-col overflow-hidden">
			<Head>
				<title> MUN Engineering Society</title>
			</Head>
			<Parallax image="/res/location/engineering_building.jpeg">
				<div className="flex flex-col justify-between md:flex-row">
					<div className="flex flex-col">
						<img src="/res/logos/full.png" className="object-contain p-5 transition-all hover:scale-105 md:h-4/5 md:w-auto md:pl-20 md:pr-20 md:pt-10" />
					</div>
					<div className="space-y-5 p-10 md:mt-10 md:space-y-10">
						<h1 className="whitespace-nowrap text-center font-norwester text-3xl tracking-wider text-white md:text-right xl:text-5xl 2xl:text-7xl">1200+ Students</h1>
						<h1 className="whitespace-nowrap text-center font-norwester text-3xl tracking-wider text-white md:text-right xl:text-5xl 2xl:text-7xl">20+ Groups</h1>
						<h1 className="whitespace-nowrap text-center font-norwester text-3xl tracking-wider text-white md:text-right xl:text-5xl 2xl:text-7xl">7 Disciplines</h1>
						<h1 className="whitespace-nowrap text-center font-norwester text-3xl tracking-wider text-white md:text-right xl:text-5xl 2xl:text-7xl">2 Societies</h1>
						<h1 className="w-auto whitespace-nowrap text-center font-norwester text-4xl tracking-wider text-white md:text-right xl:text-6xl 2xl:text-8xl">1 Community</h1>
					</div>
				</div>
			</Parallax>
			<div className="h-10 border-b-4 border-t-4 border-black bg-mun-burgundy" />
			<Disciplines />
			<div className="ml-2 mr-2 mt-4 justify-evenly space-y-4 rounded-3xl border-4 border-black bg-stone-400 py-8 sm:ml-8 sm:mr-8 lg:ml-20 lg:mr-20 xl:flex">
				<div className="space-y-10">
					<h1 className="text-center font-norwester text-2xl font-semibold text-black underline sm:text-4xl">Welcome to Our Website!</h1>
					<p className="ml-7 mr-7 rounded-2xl font-sans text-lg text-black transition-transform lg:ml-20 lg:mr-20 lg:text-2xl ">Welcome to the Memorial University Engineering Society website, a vibrant and diverse community that brings together students from various engineering disciplines.</p>
					<p className="ml-7 mr-7 rounded-2xl font-sans text-lg text-black transition-transform lg:ml-20 lg:mr-20 lg:text-2xl ">Our society is a hub of innovation and learning, home to a multitude of groups each contributing to a dynamic and enriching environment.</p>
					<p className="ml-7 mr-7 rounded-2xl font-sans text-lg text-black transition-transform lg:ml-20 lg:mr-20 lg:text-2xl ">We are united by our shared passion for engineering and our commitment to fostering a collaborative and inclusive space.</p>
					<p className="ml-7 mr-7 rounded-2xl font-sans text-lg text-black transition-transform lg:ml-20 lg:mr-20 lg:text-2xl ">Whether you're a current student seeking to engage with like-minded peers, a prospective student exploring the possibilities of an engineering education, or simply an enthusiast interested in the field, we warmly invite you to explore our site.</p>
					<p className="ml-7 mr-7 rounded-2xl font-sans text-lg text-black transition-transform lg:ml-20 lg:mr-20 lg:text-2xl ">Delve into the wealth of resources we offer, learn more about our groups and their activities, and discover how you can get involved.</p>
					<p className="ml-7 mr-7 rounded-2xl font-sans text-lg text-black transition-transform lg:ml-20 lg:mr-20 lg:text-2xl ">Our mission is to foster innovation, collaboration, and excellence in the field of engineering. We believe in the power of community and the importance of shared knowledge.</p>
					<p className="ml-7 mr-7 rounded-2xl font-sans text-lg text-black transition-transform lg:ml-20 lg:mr-20 lg:text-2xl ">As you navigate through our site, we hope you will be inspired by the opportunities that await you here.</p>
					<p className="ml-7 mr-7 rounded-2xl font-sans text-lg text-black transition-transform lg:ml-20 lg:mr-20 lg:mb-10 lg:text-2xl ">Join us as we continue to shape the future of engineering, pushing boundaries and driving change. We look forward to welcoming you into our community and embarking on this exciting journey together.</p>
				</div>
				<div className="flex justify-evenly gap-x-5 p-16 xl:flex-col">
					<img src="/res/logos/soc_round_logo.png" className="h-24 rounded-full border-4 border-white xl:h-auto" />
					<img src="/res/logos/mun_logo.png" className="h-24 rounded-lg bg-white p-5 xl:h-auto" />
				</div>
			</div>
			<div className="ml-2 mr-2 mt-4 grid grid-cols-1 justify-between gap-y-5 pb-5 pt-5 sm:ml-8 sm:mr-8 md:grid-cols-2 md:place-items-center lg:ml-20 lg:mr-20 xl:flex xl:gap-x-3 xl:gap-y-0">
				<SlideshowComponent title="Academics" href="/academics" delay="0" images={["../res/academics/essc-f2022.png", "../res/academics/mech_boys.png", "../res/academics/deans_f2022.png"]} />
				<SlideshowComponent title="Events" href="/events" delay="2500" images={["../res/events/dday_f2022.jpg", "../res/events/softball_2014.jpeg", "../res/events/softball_2023.jpg"]} />
				<SlideshowComponent title="News" href="/news" delay="5000" images={["../res/news/eastern_edge_win_2023.JPG"]} />
				<SlideshowComponent title="Get Involved" href="/getinvolved" delay="7500" images={["../res/get_involved/eastern_edge_presentation_2023.jpg", "../res/get_involved/eastern_edge_deck_2023.jpg", "../res/get_involved/concrete_tbog_team.png"]} />
			</div>
		</main>
	);
}
