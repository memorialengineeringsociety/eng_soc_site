import { useState } from "react";
import Image from "next/image";
import { TeamCard } from "../../components/TeamCard";
import Parallax from "../../components/Parallax";
import jsonData from "public/json/get_involved.json";
import Head from 'next/head'

const data = jsonData;

export default function GetInvolved() {
	return (
		<main className="repeating-bg">
						<Head>
				<title> MUN Eng Society | Get Involved</title>
			</Head>
			<Parallax image="../res/get_involved/eastern_edge_presentation_2023.jpg">
				<div className="flex h-fit flex-col items-center pt-5 text-center text-white lg:pt-20">
					<h3 className="font-norwester text-4xl font-bold lg:text-6xl xl:text-7xl 2xl:text-8xl">GET INVOLVED</h3>
					<div className="text-center text-md space-y-5 p-8 font-maven md:text-xl lg:p-20 xl:text-2xl 2xl:text-3xl">
						<p className="text-shadow-lg text-justify">&emsp;As technology continues to advance at an accelerated pace, student-led initiatives play a pivotal role in fostering innovation and inspiring the next generation of engineers and scientists.</p>
						<p className="text-shadow-lg text-justify">&emsp;These multidisciplinary teams undertake a wide array of projects, ranging from the construction of sustainable sailboats, development of autonomous vehicles, to the design of lightweight racers and chemical-powered cars. Such endeavors not only enhance technical skills, but also encourage teamwork, problem-solving, and communication abilities, preparing students for future careers in various industries.</p>
					</div>
					<h2 className="hidden lg:mb-10 font-maven_medium text-4xl lg:block">Join a team, organization, or volunteer!</h2>
				</div>
			</Parallax>
			<div id="paralaxdivider" className="h-5 border-t-4 border-black bg-gradient-to-b  from-mun-burgundy to-stone-400" />
			<Navigation />
		</main>
	);
}

function Groups({ type }) {
	return (
		<div className="grid grid-cols-1 gap-5 pb-10 pt-5 md:grid-cols-2 xl:grid-cols-3">
			{Object.entries(type).map(([team_name, team_data]) => {
				return <TeamCard name={team_name} title={team_data.title} logo={team_data.logo} text={team_data.text} link={team_data.link} linkedin={team_data.linkedin} instagram={team_data.instagram} facebook={team_data.facebook} twitter={team_data.twitter} discord={team_data.discord} contact={team_data.contact} date={team_data.date} disciplines={team_data.disciplines} />;
			})}
		</div>
	);
}

function Navigation() {
	const [currentButton, setCurrentButton] = useState(1);
	const [showPastTeams, setShowPastTeams] = useState(false);

	const handleButtonClick = (buttonNumber) => {
		setCurrentButton(buttonNumber);
		if (window.innerWidth >= 1024) {
			scrollToTopD();
		} else {
			scrollToTopM();
		}
	};

	return (
		<div className="items-center xl:flex xl:flex-col">
			<div id="subnavbar" className="sticky top-[76px] z-40 flex w-full justify-evenly gap-x-3 rounded-b-3xl border-b-2 border-black bg-stone-400 lg:pb-5 lg:pl-20 lg:pr-20 lg:pt-3 xl:top-[92px]">
				<button className={`hidden w-1/3 whitespace-nowrap p-2 font-norwester text-sm font-extrabold transition-transform md:text-xl lg:block xl:text-3xl ${currentButton === 1 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(1)}>
					Competitive Teams
				</button>
				<button className={`hidden w-1/3 whitespace-nowrap p-2 font-norwester text-sm font-extrabold transition-transform md:text-xl lg:block xl:text-3xl ${currentButton === 2 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(2)}>
					Organizations
				</button>
				<button className={`hidden w-1/3 whitespace-nowrap p-2 font-norwester text-sm font-extrabold transition-transform md:text-xl lg:block xl:text-3xl ${currentButton === 3 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(3)}>
					Volunteering Opportunities
				</button>

				<button className={`w-1/3 p-2 font-norwester text-sm font-extrabold transition-transform md:text-xl lg:hidden xl:text-3xl ${currentButton === 1 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(1)}>
					<span className="material-icons pointer-events-none" style={{ fontSize: "40px" }}>
						emoji_events
					</span>
				</button>
				<button className={`w-1/3 p-2 font-norwester text-sm font-extrabold transition-transform md:text-xl lg:hidden xl:text-3xl ${currentButton === 2 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(2)}>
					<span className="material-icons pointer-events-none" style={{ fontSize: "40px" }}>
						diversity_3
					</span>
				</button>
				<button className={`w-1/3 p-2 font-norwester text-sm font-extrabold transition-transform md:text-xl lg:hidden xl:text-3xl ${currentButton === 3 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(3)}>
					<span className="material-icons pointer-events-none" style={{ fontSize: "40px" }}>
						volunteer_activism
					</span>
				</button>
			</div>

			<div className="mt-4 w-full">
				<div className={`transition-opacity ${currentButton === 1 ? "block opacity-100" : "hidden opacity-0"} delay-200`}>
					<h3 className="text-center font-norwester text-4xl text-black underline lg:hidden">Competitive Teams</h3>
					<Groups type={data.current_competitive} />
					<div className="flex flex-col justify-center place-items-center">
						<button className='bg-black lg:w-1/3 rounded-full p-5 text-xl lg:text-3xl font-norwester mb-5' onClick={() => setShowPastTeams(!showPastTeams)}>{showPastTeams ? "Hide Past Teams" : "Show Past Teams"}</button>
						{showPastTeams && <Groups type={data.past_competitive} />}
					</div>
				</div>
				<div className={`transition-opacity ${currentButton === 2 ? "block opacity-100" : "hidden opacity-0"} delay-200`}>
					<h3 className="text-center font-norwester text-4xl text-black underline lg:hidden">Organizations</h3>
					<Groups type={data.organization} />
				</div>
				<div className={`transition-opacity ${currentButton === 3 ? "block opacity-100" : "hidden opacity-0"} delay-200 justify-items-center`}>
					<h3 className="text-center font-norwester text-4xl text-black underline lg:hidden">Volunteering Opportunities</h3>
					<div className="ml-5 mr-5 pb-10 flex min-h-fit flex-col pt-5 w-3/4 lg:w-3/5">
						<h2 className="text-center pb-5 font-norwester text-2xl font-bold text-black">Student Volunteer Bureau</h2>
						
						<p className="text-black">Volunteering is an excellent opportunity for students to build their experience in leadership roles while also providing a beneficial service to others in their communities. It is a fulfilling pursuit that has also proven useful when looking for Work Terms, as it is experience recognized by employers. Volunteering is simple; give it a shot!</p><br></br>
						<p className="text-black">The Student Volunteer Bureau is an organization within MUN that organizes the Volunteer Incentive Program (VIP), which aims to recognize and reward student efforts to volunteer. Students can unlock different tiers depending on their volunteering experience and involvement. Find more about it in the link below:</p>
						
						<div className="w-full justify-center flex mt-5 mb-2">
							<button className="justify-center rounded-full lg:w-1/3 md:w-1/3 w-3/4 bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-700" onClick={() => window.open("https://www.mun.ca/volunteer/", "_blank")}>
								Volunteer Incentive Program
							</button>
						</div>
						
						
					</div>
				</div>
			</div>
		</div>
	);
}

/*	
	old volunteering text
	<h2 className="text-center font-norwester text-2xl font-bold text-black">Engineering Volunteer Network</h2>
						<p className="text-black">Memorial Engineering Student Society is dedicated to uplifting not only our student body but also our community. We believe one of the fundamental ways of giving back comes through volunteering. We want to ensure it is always an accessible option for our students. We've created a space for students, clubs, companies, or individuals to bring forward volunteering opportunities or any little thing they need help with! You’ll fill the below form, giving us dates, number of volunteers required and any other relevant info! We’ll take this information and contact the keen students who have signed up and get back to you.​</p>
						<div className="flex justify-center gap-x-10 pb-5 pt-5">
							<button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-700" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd6bapES16a9c40zQUhLsR4OoZJD2FBJ_PfZA6cje3WJosRXw/viewform", "_blank")}>
								Volunteer Request Form
							</button>
							<button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-700" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeneWqIDHKuxzMUeHK9Zz7jpy0DBfJN4ZwlPBustCRZR1b1-A/viewform", "_blank")}>
								Volunteer Sign-Up Form
							</button>
						</div>
						<p className="text-black">Volunteers from MUN Engineering Societies A and B had the distinct honour of helping Make a Wish Canada grant Jenna’s wish - a wheelchair accessible swing set! After a couple phone calls, a group of volunteers came together and managed to assemble Jenna’s swing in one evening. Many, many thanks to Dr. Stephen Bruneau with the Faculty and Natalie Ryan of Make a Wish for bringing this opportunity our students.</p>
*/

const scrollToTopD = () => {
	const element = document.getElementById("paralaxdivider");
	element.scrollIntoView({
		behavior: "smooth",
	});
};

const scrollToTopM = () => {
	const element = document.getElementById("paralaxdivider");
	const rect = element.getBoundingClientRect();
	const offset = rect.top + window.scrollY;
	window.scrollTo({
		top: offset - 50, // 50 pixels above the element
		behavior: "smooth",
	});
};
