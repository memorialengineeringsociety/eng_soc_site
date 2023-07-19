import { useState } from "react";
import Image from "next/image";
import { NothingHereYet } from "../../components/NothingHereYet";
import { Coop } from "@/components/academics/coop";
import { EDI } from "@/components/academics/edi";
import Parallax from "@/components/Parallax";

export default function GetInvolved() {
	return (
		<main className="repeating-bg min-h-screen">
			<Parallax image="../res/academics/essc-f2022.png">
				<div className="flex h-full flex-col items-center pt-5 text-center text-white lg:pt-20">
					<h1 className="font-ops text-4xl font-bold lg:text-8xl">Academics</h1>
					<div className="text-md space-y-5 p-8 font-gold font-bold md:text-lg lg:p-20 lg:text-3xl">
						<p>The Memorial University Engineering Society is more than just a student leadership group - it's a community dedicated to supporting its members throughout their engineering journey.</p>
						<p>From the moment you join, the society provides a wealth of resources designed to enhance your learning experience. This includes access to academic support services, mentorship programs, and opportunities to engage in innovative projects.</p>
						<p>Moreover, the society fosters a collaborative environment where students can share ideas, learn from each other, and build lasting relationships. Through various events and activities, students can connect with their peers, network with industry professionals, and gain valuable insights into the engineering field.</p>
						<p>Ultimately, the society is committed to helping you succeed, providing the tools, guidance, and support you need to reach your academic and career goals.</p>
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
			scrollToTopM();
		} else {
			scrollToTopM();
		}
	};

	return (
		<div className="items-center xl:flex xl:flex-col">
			<div className="sticky top-[76px] z-40 flex w-full justify-evenly gap-x-3 rounded-b-3xl border-b-2 border-black bg-stone-400 lg:pb-5 lg:pl-20 lg:pr-20 lg:pt-3 xl:top-[92px]">
				<button className={`hidden lg:block font-ops font-extrabold transition-transform xl:w-1/3 xl:text-3xl ${currentButton === 1 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(1)}>
					Co-op
				</button>
				<button className={`hidden lg:block font-ops font-extrabold transition-transform xl:w-1/3 xl:text-3xl ${currentButton === 2 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(2)}>
					Support
				</button>
				<button className={`hidden lg:block font-ops font-extrabold transition-transform xl:w-1/3 xl:text-3xl ${currentButton === 3 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(3)}>
					Equity, Diversity, and Inclusion
				</button>
				<button className={`lg:hidden font-ops pt-2 font-extrabold transition-transform xl:w-1/3 xl:text-3xl ${currentButton === 1 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(1)}>
					<span className="material-icons pointer-events-none" style={{ fontSize: "40px" }}>
						work
					</span>
				</button>
				<button className={`lg:hidden font-ops pt-2 font-extrabold transition-transform xl:w-1/3 xl:text-3xl ${currentButton === 2 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(2)}>
					<span className="material-icons  pointer-events-none" style={{ fontSize: "40px" }}>
						contact_support
					</span>
				</button>
				<button className={`lg:hidden font-ops pt-2 font-extrabold transition-transform xl:w-1/3 xl:text-3xl ${currentButton === 3 ? "text-black underline xl:scale-125" : "text-white"}`} onClick={() => handleButtonClick(3)}>
					<span className="material-icons pointer-events-none" style={{ fontSize: "40px" }}>
						diversity_2
					</span>
				</button>
			</div>

			<div className="mt-4">
				<div className={`transition-opacity ${currentButton === 1 ? "block opacity-100" : "hidden opacity-0"} delay-200`}>
					<Coop />
				</div>
				<div className={`transition-opacity ${currentButton === 2 ? "block opacity-100" : "hidden opacity-0"} delay-200`}>
					{/* <Support /> */}
				</div>
				<div className={`transition-opacity${currentButton === 3 ? "block opacity-100" : "hidden opacity-0"} delay-200`}>
					<EDI />
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
