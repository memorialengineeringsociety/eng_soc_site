import Image from 'next/image'
import {MemberCard} from '../../components/MemberCard';
import pastMembers from 'public/res/research/societymembers.json';
import currentMembers from 'public/res/current_society.json';

const past = pastMembers;
const current = currentMembers;

export default function AboutUs() {
	return (
        <main>
            
            <section id='current_society' className='lg:flex'>
                <CurrentSociety society={current.socA} />
                <CurrentSociety society={current.socB} />
            </section>
            <section id='past_society'>
                <div id='A&B' className='lg:flex lg:justify-evenly'>
                    <PastSocietyData societies={past.societyA} />
                    <PastSocietyData societies={past.societyB} />
                </div>
                <div id='pre-degree' className='lg:flex lg:justify-center'>
                    <PastSocietyData societies={past.society} className='w-1/3' />
                </div>
            </section>
        </main>
    )
}

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
            <h1 className='text-black font-ops text-5xl text-center'>{society.title}</h1>
            <h2 className='text-black font-ops text-3xl text-center'>{society.years}</h2>
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
