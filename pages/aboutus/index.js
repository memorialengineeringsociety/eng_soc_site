import Image from "next/image";
import { useState } from "react";
import { MemberCard } from "../../components/MemberCard";
import pastMembers from "public/res/research/societymembers.json";
import currentMembers from "public/res/current_society.json";
import Parallax from "../../components/Parallax";

const past = pastMembers;
const current = currentMembers;

export default function AboutUs() {
	return (
		<main className="repeating-bg">
			<Parallax image="/res/members/group/aces_2022.png">
				<div className="flex flex-col items-center pt-5 lg:pt-20 h-full text-white text-center">
					<h1 className="text-4xl lg:text-8xl font-bold font-ops">About Us</h1>
					<div className="p-8 lg:p-20 space-y-5 text-lg lg:text-3xl font-bold font-gold">
						<p>
							MUN Engineering Society is a dynamic and motivated group that 
              serves as a strong voice and support system for engineering
							students. Our society prioritizes effective communication and aims
							to foster transparent dialogue between students and faculty,
							ensuring a fulfilling and inclusive learning experience for all.
							With a strong dedication to making a positive impact, we aim to
							create an empowered and thriving engineering community at MUN.
						</p>
						<p>
							Internally, we cultivate a sense of unity and camaraderie among
							our members, providing a platform for students to collaborate,
							share ideas, and address their concerns. Externally, we actively
							engage with faculty, industry professionals, and student
							organizations, to advocate for the needs and aspirations of
							engineering students. We strive to enhance opportunities for
							internships, co-op placements, and networking events, facilitating
							academic and professional growth.
						</p>
					</div>
				</div>
			</Parallax>

			<div className="">
				<section id="current_society" className="pt-5 lg:flex justify-evenly">
					<CurrentSociety society={current.socA} />
					<CurrentSociety society={current.socB} />
				</section>
				<section id="documents" className="flex justify-center mt-4">
					<a
						href="../res/documents/Engineering Society Constitution.pdf"
						target="_blank"
						className="border-2 border-mun-burgundy bg-white rounded-l-full text-black font-ops lg:text-3xl p-4">
						View Constitution
					</a>
					<a
						href="../res/documents/Society Executive Position Descriptions 2023.pdf"
						target="_blank"
						className="border-2 border-mun-burgundy bg-white rounded-r-full text-black font-ops lg:text-3xl p-4">
						View Execuitive Position Role Descriptions
					</a>
				</section>
				<section id="past_society" className="pb-4 flex justify-center">
					<ShowPastSociety />
				</section>
			</div>
		</main>
	);
}

function ShowPastSociety() {
	const [currentView, setCurrentView] = useState(1);
	return (
		<div className="xl:flex xl:flex-col items-center">
			<div className="flex flex-center">
				<button
					className={`rounded-full p-1 border-2 bg-white border-mun-burgundy mt-2 font-extrabold font-ops transition-transform ${
						currentView === 1 ? "xl:scale-125 text-black" : "hidden"
					}`}
					onClick={() => setCurrentView(2)}>
					Show Past Societies
				</button>
				<button
					className={`rounded-full p-1 border-2 bg-white border-mun-burgundy mt-2 font-extrabold font-ops transition-transform ${
						currentView === 2 ? "xl:scale-125 text-black" : "hidden"
					}`}
					onClick={() => setCurrentView(1)}>
					Hide Past Societies
				</button>
			</div>
			<div
				className={`transition-opacity ${
					currentView === 2 ? "block opacity-100" : "hidden opacity-0"
				} delay-200`}>
				<div id="A&B" className="lg:flex lg:justify-evenly gap-x-5">
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
				if (
					societyData.title !== "24th Society A" &&
					societyData.title !== "23rd Society B"
				) {
					return (
						<div key={society} className="bg-stone-400 rounded-3xl mt-3 p-2">
							<h2 className="text-black text-4xl text-center font-ops">
								{societyData.title}
							</h2>
							<h3 className="text-black text-2xl text-center font-ops">
								{societyData.years}
							</h3>
							{Object.entries(societyData).map(([position, name]) => {
								if (
									position !== "title" &&
									position !== "years" &&
									position !== "members"
								) {
									return (
										<p
											className="text-black text-xl font-gold text-center"
											key={position}>
											<span>{position}: </span>
											<span className="text-white">{name}</span>
										</p>
									);
								}
								if (position === "members") {
									return (
										<div>
											<h3 className="text-black text-xl text-center font-gold">
												Members
											</h3>
											{name.map((item, index) => (
												<div
													className="text-white text-xl font-gold text-center"
													key={index}>
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
	return (
		<div id={society} className="space-y-4 lg:w-5/12 p-2">
			<div>
				<h1 className="text-black font-ops text-5xl bg-white border-t-4 border-l-4 border-r-4 rounded-t-3xl border-mun-burgundy text-center">
					{society.title}
				</h1>
				<h2 className="text-black font-ops text-3xl bg-white border-b-4 border-l-4 border-r-4 rounded-b-3xl border-mun-burgundy text-center">
					{society.years}
				</h2>
			</div>
			{Object.entries(society).map(([position, info]) => {
				if (position !== "title" && position !== "years") {
					return (
						<MemberCard
							title={position}
							name={info.name}
							program={info.program}
							about={info.about}
							photo={info.photo}
							link={info.link}
							contact={info.contact}
							linkedin={info.linkedin}
							instagram={info.instagram}
						/>
					);
				}
			})}
		</div>
	);
}
