import { useState } from 'react';
import Image from 'next/image'
import {TeamCard} from '../../components/TeamCard';
import jsonData from 'public/res/get_involved.json';

const data = jsonData;


export default function GetInvolved() {
	return (
		<main className=''>
			<Navigation />
		</main>
	)
}

function Groups({ type }) {
    return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-5 pb-10'>
			{Object.entries(type).map(([team_name, team_data]) => {
				return (
					<TeamCard
							name={team_name}
							title={team_data.title}
							logo={team_data.logo}
							text={team_data.text}
							link={team_data.link}
							linkedin={team_data.linkedin}
							instagram={team_data.instagram}
							facebook={team_data.facebook}
							twitter={team_data.twitter}
							discord={team_data.discord}
							contact={team_data.contact}
							date={team_data.date}
					/>
				);
			})}
      </div>
    );
  }

function Navigation() {
  const [currentButton, setCurrentButton] = useState(1);

  return (
    <div className="xl:flex xl:flex-col items-center">
      <div className="flex flex-col sticky top-20 z-50 lg:flex-row w-full justify-evenly bg-stone-400 pt-3 pb-5 rounded-b-3xl border-t-2 border-black">
        <button
          className={`xl:w-1/3 xl:text-3xl font-extrabold font-ops transition-transform ${
            currentButton === 1 ? 'xl:scale-125 underline text-black' : ''
          }`}
          onClick={() => setCurrentButton(1)}
        >
          Competitive Teams
        </button>
        <button
          className={`xl:w-1/3 xl:text-3xl font-extrabold font-ops transition-transform ${
            currentButton === 2 ? 'xl:scale-125 underline text-black' : ''
          }`}
          onClick={() => setCurrentButton(2)}
        >
          Organizations
        </button>
        <button
          className={`xl:w-1/3 xl:text-3xl font-extrabold font-ops transition-transform ${
            currentButton === 3 ? 'xl:scale-125 underline text-black' : ''
          }`}
          onClick={() => setCurrentButton(3)}
        >
          Volunteering Opportunities
        </button>
      </div>

      <div className="mt-4">
	  	<div className={`transition-opacity ${currentButton === 1 ? 'block opacity-100' : 'hidden opacity-0'} delay-200`}>
  			<Groups type={data.competitive} />
		</div>
        <div className={`transition-opacity ${currentButton === 2 ? 'block opacity-100' : 'hidden opacity-0'} delay-200`}>
		  <Groups type={data.organization} />
        </div>
        <div className={`transition-opacity flex justify-center ${currentButton === 3 ? 'block opacity-100' : 'hidden opacity-0'} delay-200`}>
			<div className='w-1/2'>
				<h2 className='text-black text-2xl font-bold font-ops text-center'>Engineering Volunteer Network</h2>
				<p className='text-black'>Memorial Engineering Student Society is dedicated to uplifting not only our student body but also our community. We believe one of the fundamental ways of giving back comes through volunteering. We want to ensure it is always an accessible option for our students. We've created a space for students, clubs, companies, or individuals to bring forward volunteering opportunities or any little thing they need help with! You’ll fill the below form, giving us dates, number of volunteers required and any other relevant info! We’ll take this information and contact the keen students who have signed up and get back to you.​</p>
				<div className='flex justify-center pt-5 pb-5 gap-x-10'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6bapES16a9c40zQUhLsR4OoZJD2FBJ_PfZA6cje3WJosRXw/viewform', '_blank')}>Volunteer Request Form</button>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeneWqIDHKuxzMUeHK9Zz7jpy0DBfJN4ZwlPBustCRZR1b1-A/viewform', '_blank')}>Volunteer Sign-Up Form</button>
				</div>
				<p className='text-black'>Volunteers from MUN Engineering Societies A and B had the distinct honour of helping Make a Wish Canada grant Jenna’s wish - a wheelchair accessible swing set! After a couple phone calls, a group of volunteers came together and managed to assemble Jenna’s swing in one evening. Many, many thanks to Dr. Stephen Bruneau with the Faculty and Natalie Ryan of Make a Wish for bringing this opportunity our students.</p>
			</div>
		</div>
      </div>
    </div>
  );
}
