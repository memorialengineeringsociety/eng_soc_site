import Image from 'next/image'
import React, { Component } from 'react';
  

export default function Home() {
	return (
		<main className='flex flex-col place-items-center repeating-bg min-h-screen'>
			<div className=" flex p-2 lg:p-10 lg:w-3/4 ">
				<p className="text-md lg:text-2xl text-justify text-gray-500 bg-white ring-2 p-1 ring-soc-red rounded-xl">The Engineering Undergraduate Society is proud to represent over 1,200 engineering students across 7 different disciplines. Every engineering student at the Memorial University is a member of the Engineering Undergraduate society. Being entirely student-run, the Engineering Student Society continually strives to make your time at MUN the best it can be.</p>
			</div>
			<div id='academics' className='flex justify-evenly'>
				<img className='rounded-2xl w-1/3' src='/res/misc/mech_boys.png'></img>
				<div className=''>
					<h1 className='text-4xl text-center text-black font-gold_bold'>Academics</h1>
					<p className='text-2xl text-justify text-gray-500'></p>
				</div>
			</div>
			<div id='events' className='flex justify-evenly'>
				<div className=''>
					<h1 className='text-4xl text-center text-black font-gold_bold'>Events</h1>
					<p className='text-2xl text-justify text-gray-500'></p>
				</div>
				<img className='rounded-2xl w-1/6' src='/res/misc/dday_f2022.jpg'></img>
			</div>
		</main>
	)
}
