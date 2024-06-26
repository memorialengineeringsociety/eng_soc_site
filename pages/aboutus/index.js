import Image from "next/image";
import { useState } from "react";
import { MemberCard } from "../../components/MemberCard";
import pastMembers from "public/json/societymembers.json";
import currentMembers from "public/json/current_society.json";
import Parallax from "../../components/Parallax";
import Head from 'next/head'

const past = pastMembers;
const current = currentMembers;

export default function AboutUs() {
	return (
		<main className="repeating-bg">
			<Head>
				<title> MUN Eng Society | About Us</title>
			</Head>
			<Parallax image="/res/members/group/aces_2022.png">
				<div className="flex h-full flex-col items-center pt-5 text-center text-white lg:pt-20">
					<h1 className="font-norwester text-4xl font-bold lg:text-6xl xl:text-7xl 2xl:text-8xl">About Us</h1>
					<div className="space-y-5 p-8 font-norwester text-sm font-bold md:text-lg lg:p-20 lg:text-xl xl:text-2xl 2xl:text-3xl">
						<p>MUN Engineering Society is a dynamic and motivated group that serves as a strong voice and support system for engineering students. Our society prioritizes effective communication and aims to foster transparent dialogue between students and faculty, ensuring a fulfilling and inclusive learning experience for all. With a strong dedication to making a positive impact, we aim to create an empowered and thriving engineering community at MUN.</p>
						<p>Internally, we cultivate a sense of unity and camaraderie among our members, providing a platform for students to collaborate, share ideas, and address their concerns. Externally, we actively engage with faculty, industry professionals, and student organizations, to advocate for the needs and aspirations of engineering students. We strive to enhance opportunities for internships, co-op placements, and networking events, facilitating academic and professional growth.</p>
					</div>
				</div>
			</Parallax>
			<div className="h-10 border-b-4 border-t-4 border-black bg-mun-burgundy" />
			<div className="">
				<section id="current_society" className="justify-evenly pt-5 lg:flex">
					<CurrentSociety society={current.socA} />
					<CurrentSociety society={current.socB} />
				</section>
				<section id="documents" className="mt-4 flex justify-center">
					<a href="../res/documents/Engineering Society Constitution.pdf" target="_blank" className="rounded-l-full border-2 border-mun-burgundy bg-white p-4 font-norwester text-black lg:text-3xl">
						View Constitution
					</a>
					<a href="../res/documents/Society Executive Position Descriptions 2023.pdf" target="_blank" className="rounded-r-full border-2 border-mun-burgundy bg-white p-4 font-norwester text-black lg:text-3xl">
						View Executive Position Role Descriptions
					</a>
				</section>
				<section id="past_society" className="flex justify-center pb-4">
					<ShowPastSociety />
				</section>
			</div>
		</main>
	);
}

function ShowPastSociety() {
	const [currentView, setCurrentView] = useState(1);
	return (
		<div className="items-center xl:flex xl:flex-col">
			<div className="flex-center flex">
				<button className={`mt-2 rounded-full border-2 border-mun-burgundy bg-white p-1 font-norwester font-extrabold transition-transform ${currentView === 1 ? "text-black xl:scale-125" : "hidden"}`} onClick={() => setCurrentView(2)}>
					Show Past Societies
				</button>
				<button className={`mt-2 rounded-full border-2 border-mun-burgundy bg-white p-1 font-norwester font-extrabold transition-transform ${currentView === 2 ? "text-black xl:scale-125" : "hidden"}`} onClick={() => setCurrentView(1)}>
					Hide Past Societies
				</button>
			</div>
			<div className={`transition-opacity ${currentView === 2 ? "block opacity-100" : "hidden opacity-0"} delay-200`}>
				<div id="A&B" className="gap-x-5 lg:flex lg:justify-evenly">
					<PastSocietyData societies={past.societyA} />
					<PastSocietyData societies={past.societyB} />
				</div>
				<div id="pre-degree" className="lg:flex lg:justify-center">
					<PastSocietyData societies={past.society} className="w-1/3" />
				</div>
			</div>
		</div>
	);
}

function PastSocietyData({ societies }) {
	return (
		<div>
			{Object.entries(societies).map(([society, societyData]) => {
				if (societyData.title !== "24th Society A" && societyData.title !== "24th Society B") {
					return (
						<div key={society} className="mt-3 rounded-3xl bg-stone-400 p-2">
							<h2 className="text-center font-norwester text-4xl text-black">{societyData.title}</h2>
							<h3 className="text-center font-norwester text-2xl text-black">{societyData.years}</h3>
							{Object.entries(societyData).map(([position, name]) => {
								if (position !== "title" && position !== "years" && position !== "members") {
									return (
										<p className="text-center font-norwester text-xl text-black" key={position}>
											<span>{position}: </span>
											<span className="text-white">{name}</span>
										</p>
									);
								}
								if (position === "members") {
									return (
										<div>
											<h3 className="text-center font-norwester text-xl text-black">Members</h3>
											{name.map((item, index) => (
												<div className="text-center font-norwester text-xl text-white" key={index}>
													{item}
												</div>
											))}
										</div>
									);
								}
								return null;
							})}
						</div>
					);
				}
				return null;
			})}
		</div>
	);
}

function CurrentSociety({ society }) {
	const myString = society.title;
	const targetCharacter = "A";
	const which = myString.includes(targetCharacter);
	return (
		<div id={society} className="space-y-4 p-2 lg:w-5/12">
			<div className="rounded-3xl border-4 border-mun-burgundy bg-white flex flex-col place-items-center">
				{which ? <img src="/res/logos/society-a.png" className="w-1/2"></img> : <img src="/res/logos/society-b.png" className="w-1/2"></img>}
				{/* <h2 className="text-center font-norwester text-2xl xl:text-3xl text-mun-burgundy">{society.years}</h2> */}
			</div>
			{Object.entries(society).map(([position, info]) => {
				if (position !== "title" && position !== "years") {
					return <MemberCard title={position} name={info.name} program={info.program} about={info.about} photo={info.photo} link={info.link} contact={info.contact} linkedin={info.linkedin} instagram={info.instagram} />;
				}
			})}
		</div>
	);
}
