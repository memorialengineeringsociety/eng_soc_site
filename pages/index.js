import Image from 'next/image'
import React, { Component } from 'react';
import Parallax from '/components/Parallax';
import Disciplines from '/components/Disciplines';
import SlideshowComponent from '/components/HomeNavCard';
import getImagePaths from '/components/getImagePaths';

  

export default function Home() {
	return (
		<main className='flex flex-col repeating-bg min-h-screen'>
			<Parallax image='/res/location/engineering_building.jpeg'>
				<div className='flex flex-col md:flex-row justify-between'>
					<div className=''>
						<img src='/res/logos/soc_round_logo.png' className='rounded-full h-4/5 p-5 md:p-20' />
					</div>
					<div className='space-y-5 md:space-y-10 p-10 md:mt-10'>
						<h1 className='text-white font-gold text-3xl xl:text-5xl 2xl:text-7xl text-center md:text-right'>1200+ Students</h1>
						<h1 className='text-white font-gold text-3xl xl:text-5xl 2xl:text-7xl text-center md:text-right'>20+ Groups</h1>
						<h1 className='text-white font-gold text-3xl xl:text-5xl 2xl:text-7xl text-center md:text-right'>7 Diciplines</h1>
						<h1 className='text-white font-gold text-3xl xl:text-5xl 2xl:text-7xl text-center md:text-right'>2 Societies</h1>
						<h1 className='text-white font-gold_bold text-4xl w-auto xl:text-6xl 2xl:text-8xl text-center md:text-right'>1 Community</h1>
					</div>
				</div>
			</Parallax>
			<div className='h-10 bg-soc-red border-t-4 border-b-4 border-black'/>
			<Disciplines />
			{/* <div className="text-center py-8 space-y-4">
				<h1 className="text-2xl sm:text-4xl font-semibold text-black">Welcome to Our Website</h1>
				<p className="text-base sm:text-lg text-black">We are delighted to have you here. Explore and enjoy our cool features!</p>
				<button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all">Explore Now</button>
			</div> */}
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-y-5 xl:gap-y-0 pb-5 pt-5 justify-evenly'>
				<SlideshowComponent 
					title='Academics'
					href='/academics'
					delay='0'
					images={[        
						'../res/academics/essc-f2022.png',
						'../res/academics/mech_boys.png',
						'../res/academics/deans_f2022.png'
					]}
					/>
				<SlideshowComponent 
					title='Events'
					href='/events'
					delay='2500'
					images={[        
						'../res/events/dday_f2022.jpg',
						'../res/events/softball_2014.jpeg',
						'../res/events/softball_2023.jpg',
					]}
					/>
				<SlideshowComponent 
					title='News'
					href='/news'
					delay='5000'
					images={[]}
					/>
				<SlideshowComponent 
					title='Get Involved'
					href='/getinvolved'
					delay='7500'
					images={[        
						'../res/get_involved/eastern_edge_presentation_2023.jpg',
						'../res/get_involved/eastern_edge_deck_2023.jpg',
						'../res/get_involved/concrete_tbog_team.png',
					]}
					/>
			</div>
		</main>
	)
}





