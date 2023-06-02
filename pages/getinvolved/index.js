import Image from 'next/image'
import {TeamCard} from '../../components/TeamCard';

export default function GetInvolved() {
	return (
		<main>
			<h1 className='font-mono text-black text-5xl font-extrabold underline pt-10'>Competitive Teams</h1>
    		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-5 pb-10'>
    		    <TeamCard
    		        name='Eastern Edge Robotics'
    		        title='Underwater Remotely Operated Vehicle'
    		        logo='/res/team_logos/eastern_edge.png'
    		        text="Eastern Edge designs, builds, and operates remotely operated vehicles (ROVs) to complete a series of challenging tasks. The competition encourages innovation, problem-solving, and teamwork, as members navigate the ROV through complex underwater missions. From engineering the ROV's structure and electronics to programming its controls, Eastern Edge demonstrates a wide range of technical expertise."
    		        link='https://easternedgerobotics.com'
    		        linkedin='https://www.linkedin.com/company/easternedgerobotics/'
    		        instagram='https://www.instagram.com/easternedgerobo/'
    		        facebook='https://www.facebook.com/easternedgerobotics'
    		        twitter='https://twitter.com/easternedgerobo'
    		        date="2002"
    		    />
    		    <TeamCard
    		        name='Memorial Baja Racing'
    		        title='Single Seat Off-Road Vehicle'
    		        logo='/res/team_logos/baja.png'
    		        text='Memorial Baja is a student team building an off-road racing vehicle. They handle marketing, engineering design, and provide a positive learning experience. A Baja SAE vehicle is a lightweight racer under 500 pounds, reaching speeds up to 50 km/h. Teams design and build the vehicle from scratch, following sound engineering practices.'
    		        link='https://memorialbaja.ca/'
    		        linkedin='https://www.linkedin.com/company/memorialbaja/'
    		        instagram='https://www.instagram.com/memorialbaja/'
    		        facebook='https://www.facebook.com/memorialbaja/'
    		        date="2009"
    		    />
    		    <TeamCard
    		        name='Concrete Toboggan'
    		        title=''
    		        logo='/res/team_logos/concrete.png'
    		        text=''
    		        link='https://www.engr.mun.ca/ConcreteToboggan/'
    		    />
    		    <TeamCard
    		        name='Paradigm Engineering'
    		        title=''
    		        logo='/res/team_logos/paradigm.png'
    		        text=''
    		        link=''
    		        instagram='https://www.instagram.com/paradigm_engineering/'
    		    />
    		    <TeamCard
    		        name='MUN E-Motorsports'
    		        title='Autonomous Electric Vehicle'
    		        logo='/res/team_logos/munemotorsports.png'
    		        text=''
    		        link='https://munemotorsports.com'
    		        linkedin='https://www.linkedin.com/company/fmuntenth/'
    		        date='2022'
    		    />
    		    <TeamCard
    		        name='MUN RoboSub'
    		        title='Autonomous Underwater Vehicle'
    		        logo='/res/team_logos/robosub.png'
    		        text=''
    		        link='https://sites.google.com/mun.ca/mun-robosub/home'
    		    />
    		    <TeamCard
    		        name='Sailbot'
    		        title='Autonomous Sailboat'
    		        logo='/res/team_logos/sailbot.png'
    		        text=''
    		        link=''
    		    />
    		    <TeamCard
    		        name='Phoenix Aerospace'
    		        title='Drones'
    		        logo='/res/team_logos/phoenix.png'
    		        text=''
    		        link=''
    		        date='2021'
    		    />
    		    <TeamCard
    		        name='Chem-E-Car'
    		        title='Chemical Powered Car'
    		        logo='/res/team_logos/chemecar.png'
    		        text=''
    		        link=''
    		    />
    		    <TeamCard
    		        name='Iceberg ASV'
    		        title='Autonomous Surface Vehicle'
    		        logo='/res/team_logos/icebergasv.png'
    		        text=''
    		        link='https://www.icebergasv.ca'
    		        date='2021'
    		    />
    		    <TeamCard
    		        name='F1 Electric'
    		        title='Electric Formula 1 Car'
    		        logo='/res/team_logos/fsae.jpg'
    		        text=''
    		        link=''
    		        date='2023'
    		    />
    		</div>
		</main>
	)
}
