import Image from 'next/image'
import {MemberCard} from '../../components/MemberCard';
import jsonData from 'public/res/research/pastsociety.json';

const data = jsonData;

export default function AboutUs() {
	return (
        <main>
            <section id='current_society' className='lg:flex'>
                <div id='soca' className='p-5 md:p-20 lg:w-1/2 space-y-4'>
                    <h1 className='text-black font-ops text-5xl text-center'>24th Society A</h1>
                    <h2 className='text-black font-ops text-3xl text-center'>2023 - 2025</h2>
                    <MemberCard
                        title='President'
                        name='Ava Gogal'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/a2023/ava.jpeg'
                        link=''
                        linkedin=''
                        instagram='https://www.instagram.com/avaflorencegogal'
                    />
                    <MemberCard
                        title='VP Academic'
                        name='Hannah Doyle'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/a2023/hannah.jpg'
                        link=''
                        linkedin=''
                        instagram='https://www.instagram.com/hannahclairedoyle'
                    />
                    <MemberCard
                        title='VP Finance'
                        name='Michael Mallay'
                        program='Electrical Engineering'
                        about=''
                        photo='/res/members/a2023/michael.jpg'
                        link=''
                        linkedin=''
                        instagram='https://www.instagram.com/michael_mallay18'
                    />
                    <MemberCard
                        title='VP External'
                        name='Sophia White'
                        program='Electrical Engineering'
                        about=''
                        photo='/res/members/a2023/sophia.png'
                        link=''
                        linkedin=''
                        instagram='https://www.instagram.com/sophiacwhite'
                    />
                    <MemberCard
                        title='VP Internal'
                        name='Jacob Gillis'
                        program='Electrical Engineering'
                        about=''
                        photo='/res/members/a2023/jacob.PNG'
                        link=''
                        linkedin=''
                        instagram='https://www.instagram.com/jacobgillis13'
                    />
                    <MemberCard
                        title='Director of Communications'
                        name='Russell Corbett'
                        program='Computer Engineering'
                        // about='Meet Russell Corbett, a dedicated Term IV Computer Engineering student at Memorial University of Newfoundland. With a strong problem-solving mindset and a curious nature, Russell values time management and organization to effectively balance his academic and extracurricular commitments. He thrives on new challenges and enjoys finding innovative solutions. As a team player, he highly regards the ideas and experiences of others. Russell has gained valuable technical experience through his roles as a System Analyst at Bell Canada Enterprises, a Co-op Engineering Student at Avalon Controls Ltd., and a High School Summer Intern at Celtx. In these positions, he contributed to automation, system documentation, networking upgrades, and IT hardware installations. Russells passion for engineering extends to his involvement in various engineering teams, including Eastern Edge Robotics, MUN E-Motorsports, and the Engineering Student Society, where he holds positions such as Chief Technology Officer - Software, Software Team Member, and Director of Communications, respectively. Furthermore, Russell has undertaken several personal projects, such as designing a Smart Home system, creating his personal portfolio website using AstroJS and Tailwind, developing a poker score tracker application, establishing a makerspace for 3D printing and electronics testing, and designing an Engineering One survival game. Outside of his academic and technical pursuits, Russell actively participates in volunteering initiatives like Relay for Life, dedicating his efforts to honoring his loved ones affected by cancer. Through his dedication to engineering, technical expertise, and commitment to making a positive impact, Russell Corbett embodies a driven and versatile individual with a promising future.'
                        photo='/res/members/a2023/russell.jpg'
                        link='https://russellcorbett.ca/'
                        linkedin='https://www.linkedin.com/in/russell-corbett'
                        instagram='https://www.instagram.com/russell_corbett'
                    />
                    <MemberCard
                        title='Director of Outreach'
                        name='Kate Williams'
                        program='Electrical Engineering'
                        about=''
                        photo='/res/members/a2023/kate.jpg'
                        link=''
                        linkedin=''
                        instagram='https://www.instagram.com/katewilliams13'
                    />
                    <MemberCard
                        title='Director of Social Events'
                        name='Kait Abbott'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/a2023/kait.jpg'
                        link=''
                        linkedin=''
                        instagram='https://www.instagram.com/kait.abbott'
                    />
                    <MemberCard
                        title='Director of Sports'
                        name='Eli Brown'
                        program='Electrical Engineering'
                        about=''
                        photo='/res/members/a2023/eli.JPG'
                        link=''
                        linkedin=''
                        instagram='https://www.instagram.com/elibrown.4'
                    />
                    <MemberCard
                        title='Director of Co-op'
                        name='Harnoor Singh'
                        program='Computer Engineering'
                        about=''
                        photo='/res/members/a2023/harnoor.jpg'
                        link=''
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='Director of International Representation'
                        name='Abdelrahman Mohamed'
                        program='Process Engineering'
                        about=''
                        photo=''
                        link=''
                        linkedin=''
                        instagram=''
                    />
                </div>
                <div id='socb' className='p-5 md:p-20 lg:w-1/2 space-y-4'>
                    <h1 className='text-black font-ops text-5xl text-center'>23rd Society B</h1>
                    <h2 className='text-black font-ops text-3xl text-center'>2022 - 2024</h2>
                    <MemberCard
                        title='President'
                        name='Ben Oates'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/b2022/ben_oates.jpeg'
                        link=''
                        contact='president.munengsocb@gmail.com'
                        linkedin='https://www.linkedin.com/in/benjamin-oates-02/'
                        instagram='https://www.instagram.com/boates02'
                    />
                    <MemberCard
                        title='VP Academic'
                        name='Fares Khalil'
                        program='Computer Engineering'
                        about=''
                        photo='/res/members/b2022/fares_khalil.jpeg'
                        link=''
                        contact='academic.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='VP Finance'
                        name='Nadia Marmouche'
                        program='Process Engineering'
                        about=''
                        photo='/res/members/b2022/nadia_marmouche.jpeg'
                        link=''
                        contact='finance.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='VP External'
                        name='Kathleen Curran'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/b2022/kathleen_curran.jpeg'
                        link=''
                        contact='external.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='VP Internal'
                        name='Matthew Rogers'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/b2022/matthew_rogers.jpeg'
                        contact='internal.munengsocb@gmail.com'
                        link=''
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='Director of Communications'
                        name='Veronica Naterer'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/b2022/veronica_naterer.png'
                        link=''
                        contact='communications.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='Director of Outreach'
                        name='Paige Bodnar'
                        program='Ocean and Naval Architectural Engineering'
                        about=''
                        photo='/res/members/b2022/paige_bodnar.jpeg'
                        link=''
                        contact='outreach.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='Director of Social Events'
                        name='Abby Sparrow'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/b2022/abby_sparrow.jpeg'
                        link=''
                        contact='events.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='Director of Sports'
                        name='Nathan Flynn'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/b2022/nathan_flynn.jpeg'
                        link=''
                        contact='sports.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='Director of Co-op'
                        name='Jordan Careen'
                        program='Mechanical Engineering'
                        about=''
                        photo='/res/members/b2022/jordan_careen.jpeg'
                        link=''
                        contact='coop.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                    <MemberCard
                        title='Director of International Representation'
                        name='Sayed Ahmed'
                        program='Civil Engineering'
                        about=''
                        photo='/res/members/b2022/sayed_ahmed.jpeg'
                        link=''
                        contact='outreach.munengsocb@gmail.com'
                        linkedin=''
                        instagram=''
                    />
                </div>
            </section>
            <section id='past_society'>
                <div id='A&B' className='lg:flex lg:justify-evenly'>
                    <SocietyData societies={data.societyA} />
                    <SocietyData societies={data.societyB} />
                </div>
                <div id='pre-degree' className='lg:flex lg:justify-center'>
                    <SocietyData societies={data.society} className='w-1/3' />
                </div>
            </section>
        </main>
    )
}

function SocietyData({ societies }) {
    return (
      <div>
        {Object.entries(societies).map(([society, societyData]) => {
            console.log(society)
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
  

