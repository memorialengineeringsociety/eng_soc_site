import Image from 'next/image'
import { useState } from 'react';
import {MemberCard} from '../../components/MemberCard';
import pastMembers from 'public/res/research/societymembers.json';
import currentMembers from 'public/res/current_society.json';

const past = pastMembers;
const current = currentMembers;

export default function AboutUs() {
	return (
        <main className="repeating-bg">
            <div id='descriptions'>
                <p className='text-black font-maven text-2xl hidden'>Our organization, as outlined in the provided bylaws, is a student society dedicated to fostering a vibrant academic and social community within the field of engineering. We operate under an executive structure comprised of various officers who are responsible for specific roles and responsibilities. The executive positions include Vice-Presidents in different domains such as Academic, External, Finance, and Internal, along with Junior Vice-Presidents and a Chief Returning Officer.</p>
                <p className='text-black font-maven text-2xl hidden'>Overall, our organization's mission is to provide a supportive and enriching environment for engineering students. Through our elected executives, dedicated volunteers, and engagement with the student body, we strive to enhance academic experiences, organize impactful events, and promote the welfare of our members. By adhering to our bylaws and fostering a culture of inclusivity and student involvement, we aim to create a thriving community within the field of engineering.</p>
            </div>
            <div className="relative z-10">
                <section id='current_society' className='lg:flex'>
                    <CurrentSociety society={current.socA} />
                    <CurrentSociety society={current.socB} />
                </section>
                <section id='documents' className='flex justify-center'>
                    <a href="../res/documents/Engineering Society Constitution.pdf" target='_blank' className='border-2 border-soc-red bg-white rounded-l-full text-black font-ops text-3xl p-4'>View Constitution</a>
                    <a href="../res/documents/Society Executive Position Descriptions 2023.pdf" target='_blank' className='border-2 border-soc-red bg-white rounded-r-full text-black font-ops text-3xl p-4'>View Execuitive Position Role Descriptions</a>
                </section>
                <section id='past_society' className='pb-4'>
                    <ShowPastSociety />
                </section>
            </div>
        </main>
    )
}

function ShowPastSociety() {
    const [currentView, setCurrentView] = useState(1);
    return (
        <div className="xl:flex xl:flex-col items-center">
          <div className="flex flex-center">
            <button
              className={`rounded-full p-1 border-2 bg-white border-soc-red mt-2 font-extrabold font-ops transition-transform ${
                currentView === 1 ? 'xl:scale-125 text-black' : 'hidden'
              }`}
              onClick={() => setCurrentView(2)}
            >
                Show Past Societies
            </button>
            <button
              className={`rounded-full p-1 border-2 bg-white border-soc-red mt-2 font-extrabold font-ops transition-transform ${
                currentView === 2 ? 'xl:scale-125 text-black' : 'hidden'
              }`}
              onClick={() => setCurrentView(1)}
            >
                Hide Past Societies
            </button>
            </div>
            <div className={`transition-opacity ${currentView === 2 ? 'block opacity-100' : 'hidden opacity-0'} delay-200`}>
                <div id='A&B' className='lg:flex lg:justify-evenly gap-x-5'>
                    <PastSocietyData societies={past.societyA} />
                    <PastSocietyData societies={past.societyB} />
                </div>
                <div id='pre-degree' className='lg:flex lg:justify-center'>
                    <PastSocietyData societies={past.society} className='w-1/3' />
                </div>
		    </div>
        </div>
)}
    

function PastSocietyData({ societies }) {
    return (
      <div>
        {Object.entries(societies).map(([society, societyData]) => {
          if (societyData.title !== '24th Society A' && societyData.title !== '23rd Society B') {
            return (
              <div key={society} className='bg-stone-400 rounded-3xl mt-3 p-2'>
                <h2 className="text-black text-4xl text-center font-ops">{societyData.title}</h2>
                <h3 className="text-black text-2xl text-center font-ops">{societyData.years}</h3>
                {Object.entries(societyData).map(([position, name]) => {
                    if (position !== 'title' && position !== 'years' && position !== 'members') {
                        return (
                            <p className="text-black text-xl font-gold text-center" key={position}>
                            <span>{position}: </span><span className='text-white'>{name}</span>
                            </p>
                        );
                    }
                    if (position === 'members') {
                        return (
                            <div>
                                <h3 className="text-black text-xl text-center font-gold">Members</h3>
                                {name.map((item, index) => (
                                <div className='text-white text-xl font-gold text-center' key={index}>{item}</div>
                                ))}
                            </div>
                        )
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

  function CurrentSociety ({ society }) {
    return (
        <div id={society} className='p-5 md:p-20 lg:w-1/2 space-y-4'>
        <div>
            <h1 className='text-black font-ops text-5xl bg-white border-t-4 border-l-4 border-r-4 rounded-t-3xl border-soc-red text-center'>{society.title}</h1>
            <h2 className='text-black font-ops text-3xl bg-white border-b-4 border-l-4 border-r-4 rounded-b-3xl border-soc-red text-center'>{society.years}</h2>
        </div>
        {Object.entries(society).map(([position, info]) => {
            if (position !== 'title' && position !== 'years') {
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
            )
            }
        })}
        </div>
    )
}
