/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
	const router = useRouter();
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="sticky top-0 z-50 flex flex-wrap items-center border-b-4 border-black bg-mun-burgundy p-3">
				<Link href="/">
					<div className="mr-4 inline-flex items-center p-2 ">
						<span className="text-md font-ops font-bold tracking-wide text-white md:text-lg lg:text-xl xl:text-3xl">MUN ENGINEERING SOCIETY</span>
					</div>
				</Link>
				<motion.div className="ml-auto" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<button className=" inline-flex rounded p-3 text-white outline-none hover:bg-mun-burgundy lg:hidden" onClick={handleClick}>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<NavbarHamburger isOpen={active} />
						</svg>
					</button>
				</motion.div>
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:w-auto lg:flex-grow`}>
					<div className="z-50 flex w-full flex-col items-start lg:ml-auto lg:inline-flex  lg:h-auto lg:w-auto lg:flex-row lg:items-center">
						<motion.div className="py-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleClick}>
							<Link href="/aboutus">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white hover:bg-mun-burgundy hover:text-white lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`}>About</div>
							</Link>
						</motion.div>
						<motion.div className="py-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleClick}>
							<Link href="/academics">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white hover:bg-mun-burgundy hover:text-white lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`}>Academics</div>
							</Link>
						</motion.div>
						<motion.div className="py-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleClick}>
							<Link href="/events">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white hover:bg-mun-burgundy hover:text-white lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`}>Events</div>
							</Link>
						</motion.div>
						<motion.div className="py-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleClick}>
							<Link href="/news">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white hover:bg-mun-burgundy hover:text-white lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`}>News</div>
							</Link>
						</motion.div>
						<motion.div className="py-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleClick}>
							<Link href="/getinvolved">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white hover:bg-mun-burgundy hover:text-white lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`}>Get Involved</div>
							</Link>
						</motion.div>
					</div>
				</div>
			</nav>
		</>
	);
};

export const NavbarHamburger = (props) => {
	if (props.isOpen) {
		return (
			<>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
			</>
		);
	}
	return (
		<>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
		</>
	);
};
