import { useState } from "react";
import Image from "next/image";
import { NothingHereYet } from "../../components/NothingHereYet";
import Parallax from "../../components/Parallax";
import Head from 'next/head'

export default function GetInvolved() {
	return (
		<main className="repeating-bg">
			<Head>
				<title> MUN Eng Society | Academics</title>
			</Head>
			<Parallax image="../res/academics/essc-f2022.png">
				<div className="flex flex-col items-center pt-5 text-center text-white lg:pt-20">
					<h3 className="font-norwester text-4xl font-bold lg:text-6xl xl:text-7xl 2xl:text-8xl">ACADEMICS</h3>
					<div className="text-center text-md space-y-5 p-8 font-maven md:text-xl lg:p-20 xl:text-xl 2xl:text-xl lg:w-4/5 w-6/7">
						<p className="text-shadow-lg text-justify">&emsp;The Memorial University Engineering Society is more than just a student leadership group - it's a community dedicated to supporting its members throughout their engineering journey.</p>
						<p className="text-shadow-lg text-justify hidden lg:block">&emsp;From the moment you join, the society provides a wealth of resources designed to enhance your learning experience. This includes access to academic support services, mentorship programs, and opportunities to engage in innovative projects. Moreover, the society fosters a collaborative environment where students can share ideas, learn from each other, and build lasting relationships. Through various events and activities, students can connect with their peers, network with industry professionals, and gain valuable insights into the engineering field. Ultimately, the society is committed to helping you succeed, providing the tools, guidance, and support you need to reach your academic and career goals.</p>
					</div>
				</div>
			</Parallax>
			<div id="paralaxdivider" className="h-5 border-t-4 border-black bg-gradient-to-b  from-mun-burgundy to-stone-400" />
			<Navigation />
		</main>
	);
}

function Navigation() {
	const [currentButton, setCurrentButton] = useState(1);

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
			<div className="sticky top-[76px] z-40 flex w-full justify-evenly gap-x-3 rounded-b-3xl border-b-2 border-black bg-stone-400 lg:pb-5 lg:pl-20 lg:pr-20 lg:pt-3 xl:top-[92px]">
				<button className={`hidden font-norwester font-extrabold transition-transform lg:block xl:w-1/3 xl:text-3xl ${currentButton === 1 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(1)}>
					Co-op
				</button>
				<button className={`hidden font-norwester font-extrabold transition-transform lg:block xl:w-1/3 xl:text-3xl ${currentButton === 2 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(2)}>
					Support
				</button>
				<button className={`hidden font-norwester font-extrabold transition-transform lg:block xl:w-1/3 xl:text-3xl ${currentButton === 3 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(3)}>
					Equity, Diversity, and Inclusion
				</button>
				<button className={`pt-2 font-norwester font-extrabold transition-transform lg:hidden xl:w-1/3 xl:text-3xl ${currentButton === 1 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(1)}>
					<span className="material-icons pointer-events-none" style={{ fontSize: "40px" }}>
						work
					</span>
				</button>
				<button className={`pt-2 font-norwester font-extrabold transition-transform lg:hidden xl:w-1/3 xl:text-3xl ${currentButton === 2 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(2)}>
					<span className="material-icons  pointer-events-none" style={{ fontSize: "40px" }}>
						contact_support
					</span>
				</button>
				<button className={`pt-2 font-norwester font-extrabold transition-transform lg:hidden xl:w-1/3 xl:text-3xl ${currentButton === 3 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(3)}>
					<span className="material-icons pointer-events-none" style={{ fontSize: "40px" }}>
						diversity_2
					</span>
				</button>
			</div>

			<div className="lg:mt-16 flex justify-center w-full">
				<div className={`transition-opacity ${currentButton === 1 ? "block" : "hidden"} delay-200 w-5/6 lg:w-2/3`}>
					<div className="p-6 min-h-fit  justify-center">
						<h3 className="mb-4 text-2xl font-bold text-black">Get the most out of your co-op experience</h3>
						<p className="mb-4 text-black">Students from Memorial University's Bachelor of Engineering co-operative program are fortunate to have the opportunity to combine academic and practical education through a series of 4 month work terms. While the Co-op Handbook contains most information, this page is to be used as an additional resource to help you navigate the co-op office's expectations.</p>

						<p className="mb-4 text-black">Information regarding important dates for Work Terms and their course outlines can be found in the following link:</p>
						
						<div className="w-full justify-center flex mt-6 mb-6">
							<button className="justify-center rounded-full w-fit bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-700" onClick={() => window.open("https://www.mun.ca/coop/programs/engineering/work-term-dates-and-forms/", "_blank")}>
								Work Term Dates and Forms
							</button>
						</div>

						<p className="mb-4 text-black">If you want to do a Work Term outside of the province (even internationally), we recommend contacting the ASMs-CE (Co-op Office staff) responsible for the province or country you aim to work with. They can provide more information on things you may need to do before going there, work terms available there, acommodations, etc. Their contact information can be found in the Co-op office website linked above.</p>
						<div className="w-full justify-center flex mb-7">
							<img src="../res/academics/asmce.png" alt="Map with the FEAS Co-op representatives" width="600"></img>
						</div>

						<h2 className="mb-2 text-lg font-semibold text-black">How to claim Work Terms towards your P.Eng</h2>
						<p className="mb-4 text-black">After half of your degree has been completed (term 4 for us at MUN), up to 12 months of Work Term experience can be claimed for your licensure. 48 months of engineering experience is required for a graduate of the engineering program to receive their professional engineering license with PEGNL. In the past, this required the use of logbooks and an experience evaluation, which have both now been replace by a Competency Based Assesment (CBA). PEGNL conducts presentations in latter terms to explain this process to engineering students, but for the Work Term experience to count, you will have to collect some information necessary for them to assess your experience. They have mentioned these details:</p>
						<ul className="mb-4 list-inside list-disc text-black">
							<li>Employer Name</li>
							<li>Supervisor Name</li>
							<li>Title</li>
							<li>Contact Information</li>
							<li>Descriptions of the main projects and responsibilities you had</li>
						</ul>
						<p className="text-black">As students, we do not yet have access to the CBA system, but once you apply for your license, you will be able to add the experience you have gathered in your Work Terms. For more information, please look at the <a className="text-blue-500 underline hover:no-underline hover:text-blue-800" href="https://pegnl.ca/applicant/competency-based-assessment/" target="_blank">CBA site</a> and the <a className="text-blue-500 underline hover:no-underline hover:text-blue-800" href="https://pegnl.ca/faq/registration-faq/" target="_blank">FAQ</a> by PEGNL.</p>
					</div>
				</div>
				<div className={`transition-opacity ${currentButton === 2 ? "block" : "hidden"} delay-200 w-5/6 lg:w-2/3 `}>
					<div className="p-6">
						<h3 className="mb-4 text-2xl font-bold text-black">Cahill Engineering One Student Success Centre</h3>
						<p className="mb-4 text-black">There's a reason everyone gets the 'look to your left, look to your right' speech when you join engineering... do not be those guys! The Engineering One Help Centre is a great chance to learn all that course material that you're struggling with. (Pro tip: start trying to actually learn that material, oh, you know, not the night before your big midterm or final... just trust me on this).</p>

						<h2 className="mb-2 text-lg font-semibold text-black">Math Help Centres</h2>
						<p className="mb-4 text-black">For those in EO or Naval or maybe those just doing a bitta extra math courses for fun, this is a great opportunity to get help on your assignments and understand your courses.</p>

						<h2 className="mb-2 text-lg font-semibold text-black">Chemistry Help Centre / Resource Room</h2>
						<p className="mb-4 text-black">For those in EO or Process, these are located in the Chemistry-Physics building in rooms C 2022 and C 2012 respectively.</p>

						<h2 className="mb-2 text-lg font-semibold text-black">The Writing Centre</h2>
						<p className="mb-4 text-black">This is a fantastic resource you can use throughout your entire degree. The Writing Centre is not only useful for your English courses, they can help you with your reports and term papers too. Also, for those work term reports, the staff at the Writing Centre can help you by distance as well.</p>

						<h2 className="mb-2 text-lg font-semibold text-black">The Physics Help Centre</h2>
						<p className="mb-4 text-black">This centre is designed specifically for first-year physics students and is staffed by professors, assistants, and physics majors. The staff schedule is posted at the beginning of each semester so students can check when their professor is scheduled to work.</p>

						<h2 className="mb-2 text-lg font-semibold text-black">MUNSU Resource Centres</h2>
						<p className="mb-2 text-black">Many of these resource centres were started to help represent minorities on campus. These are amazing places to go if you would like some peer support or information. Currently, there are 7 resource centres supported by the student union:</p>
						<ul className="mb-4 list-inside list-disc text-black">
							<li>Aboriginal Resource Centre (ARC)</li>
							<li>Disability Information and Support Centre (DISC)</li>
							<li>International Students’ Centre (ISC)</li>
							<li>Lesbian, Bisexual, Gay and Transgender (LBGT-MUN)</li>
							<li>Student Parents’ Resource Centre (SPRC)</li>
							<li>Students Older Than Average (SOTA)</li>
							<li>Women’s Resource Centre (WRC)</li>
						</ul>

						<h2 className="mb-2 text-lg font-semibold text-black">Walk-safe Drive-safe</h2>
						<p className="mb-4 text-black">WalkSafe is a student-run program that offers students, faculty, staff, and guests of the university accompaniment when walking around campus after dark. Just call 864-6464! SafeDrive is a free service offered for students by MUNSU, providing rides home from campus during the Fall and Winter semesters. It operates from 7pm to 12am, Sunday to Thursday, with extended hours during exam periods. The SafeDrive van leaves every hour on the hour from the base of the clocktower, just outside the Queen Elizabeth II Library.</p>

						<h2 className="mb-2 text-lg font-semibold text-black">Counselling Centre</h2>
						<p className="mb-4 text-black">Through individualized personal counselling, outpatient psychiatric services, and a wide range of group counselling, professional staff and faculty at the Centre, with the assistance of supervised doctoral residents and practicum students from the various training programs on campus, help students to develop their own unique resources. The Counselling Centre helps students develop their study strategies, support for study problems, and help students learn to apply strategies for managing university-level academic work more effectively.</p>

						<h2 className="mb-2 text-lg font-semibold text-black">Scholarships and Awards Program</h2>
						<p className="mb-4 text-black">Student Affairs and Services administers the Scholarships and Awards Program for the University, distributes out-of-Province Financial Aid, and emergency financial aid.</p>
					</div>
				</div>
				<div className={`transition-opacity ${currentButton === 3 ? "block" : "hidden"} min-h-fit lg:pt-0 pt-20 mb-10 pb-10 delay-200 `}>
					<NothingHereYet />
				</div>
			</div>
		</div>
	);
}

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
