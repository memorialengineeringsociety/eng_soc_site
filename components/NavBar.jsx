/* ./components/Navbar.jsx */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const Navbar = () => {
	const router = useRouter();
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	const handleClickClose = () => {
		if (window.innerWidth <= 1024) {
			setActive(false);
		} else {
			setActive(true);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (window.innerWidth <= 1024) {
				setActive(false);
			} else {
				setActive(true);
			}
		}, 1000); // 2000 milliseconds = 2 seconds

		// Cleanup function to clear the timeout if the component is unmounted before the 2 seconds
		return () => clearTimeout(timer);
	}, []);

	const navVariants = {
		open: {
			height: "auto",
			opacity: 1,
			display: "block", // Ensuring the element is shown in open state
			transition: {
				duration: 0.3,
				when: "beforeChildren",
				staggerChildren: 0.1, // Delay between each item
			},
		},
		closed: {
			height: 0,
			opacity: 0,
			transition: {
				duration: 0.3,
				when: "afterChildren",
				
			},
			transitionEnd: {
				display:"none", // Hide the element after transition
			},
		},
	};

	const itemVariants = {
		open: {
			opacity: 1,
			y: 0,
		},
		closed: {
			opacity: 0,
			y: -20,
		},
	};

	return (
		<>
			<nav className="sticky top-0 z-50 flex flex-wrap items-center lg:justify-between border-b-4 border-black bg-mun-burgundy p-3">
				<Link href="/" onClick={handleClickClose}>
					<div className="mr-4 inline-flex items-center p-4">
						<span className="text-md font-ops font-bold tracking-wide text-white md:text-lg lg:text-xl xl:text-3xl">MUN ENGINEERING SOCIETY</span>
					</div>
				</Link>
				<motion.div className="ml-auto" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<button className="inline-flex rounded p-3 text-white outline-none hover:bg-mun-burgundy lg:hidden" onClick={handleClick}>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<NavbarHamburger isOpen={active} />
						</svg>
					</button>
				</motion.div>
				<motion.div className="w-full lg:inline-flex lg:w-auto justify-end" variants={navVariants} initial="closed" animate={active ? "open" : "closed"}>
					<div className="z-50 flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:w-auto lg:flex-row lg:items-center lg:justify-end">
						<motion.div className="py-2" variants={itemVariants}>
							<Link href="/aboutus">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white transition-transform hover:scale-110 hover:bg-mun-burgundy hover:text-white active:scale-100 lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`} onClick={handleClickClose}>
									About
								</div>
							</Link>
						</motion.div>
						<motion.div className="py-2" variants={itemVariants}>
							<Link href="/academics">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white transition-transform hover:scale-110 hover:bg-mun-burgundy hover:text-white active:scale-100 lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`} onClick={handleClickClose}>
									Academics
								</div>
							</Link>
						</motion.div>
						<motion.div className="py-2" variants={itemVariants}>
							<Link href="/events">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white transition-transform hover:scale-110 hover:bg-mun-burgundy hover:text-white active:scale-100 lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`} onClick={handleClickClose}>
									Events
								</div>
							</Link>
						</motion.div>
						<motion.div className="py-2" variants={itemVariants}>
							<Link href="/news">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white transition-transform hover:scale-110 hover:bg-mun-burgundy hover:text-white active:scale-100 lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`} onClick={handleClickClose}>
									News
								</div>
							</Link>
						</motion.div>
						<motion.div className="py-2" variants={itemVariants}>
							<Link href="/getinvolved">
								<div className={`w-full items-center justify-center rounded px-3 py-2 font-gold text-lg font-bold text-white transition-transform hover:scale-110 hover:bg-mun-burgundy hover:text-white active:scale-100 lg:inline-flex lg:w-auto xl:text-2xl ${router.pathname == "/" ? "text-mun-burgundy" : "text-brand-darkblue"}`} onClick={handleClickClose}>
									Get Involved
								</div>
							</Link>
						</motion.div>
					</div>
				</motion.div>
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
