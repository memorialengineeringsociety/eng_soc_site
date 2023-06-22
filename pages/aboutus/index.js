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
                        about="Hello! I'm Ava, and I'm thrilled to announce that I will be serving as the President of Society 'A' for the next two years. I feel incredibly fortunate to have the opportunity to work with such a passionate and motivated group of individuals. Allow me to introduce myself further. In high school, I was elected as the student council president, where I gained valuable experience in this leadership position. During my time at MUN, I have actively participated in multiple technical student design teams, which have greatly contributed to my personal growth as a student. I have always been an adventurous person, seeking experiences that push me out of my comfort zone. Whether it's performing on stage or indulging in exhilarating activities like skydiving, I thrive on the thrill of new challenges. As the President of Society 'A', I am brimming with exciting ideas and initiatives. My goal is to make the next few years the most memorable and successful for our society.. I cannot wait to see what we will achieve together!"
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
                        about="Hello! My name is  Michael Mallay. Currently, I serve as the Vice President of Finance for MUN Engineering Society 'A', where I play a crucial role in managing the organization's financial aspects. Additionally, I am the Electrical and Finance Lead for MUN E-Motorsports, where I'm involved in the exciting project of designing an autonomous go-kart. Apart from my professional endeavors, I have a passion for cooking, finding joy in experimenting with new recipes and flavors. Sports have always been a significant part of my life, and I relish the thrill of competition and teamwork. Moreover, I have an ardent love for cars and electronics, fascinated by their engineering and technological advancements. I want to leverage my strong organizational skills to benefit the Society and contribute to its growth and success. Drawing from my previous experience, I have honed my financial expertise while building budgets for FMUNTENTH. During that time, I booked flights, arranged accommodations, managed transportation, and handled various other financial responsibilities. Being part of teams has been a consistent theme throughout my life, whether it is sports, student council, or design teams. I believe in the power of collaboration and understand the value of working together towards a common goal. With my dedication, leadership qualities, and diverse background, I am committed to making a positive impact in both my professional and personal pursuits."
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
                        about="Hello! My name is Russell Corbett. I enjoy finding innovative solutions while balancing my academic pursuits and extracurricular commitments. I am a tech enthusiast and an avid basketball player, I mean, with this height, it's mandatory. The weather is fine up here and yes, I can reach the top shelf for you. In my free time, I enjoy going on drives, biking, and investigating history (Fun fact: I have traced my family back to 1590!) I strive to develop my technical skills in engineering teams like Eastern Edge Robotics and MUN E-Motorsports as Software Lead and a member of the software team respectively. I am the Technical Lead of the MUN Relay for Life Committee where I volunteer my time to fundraise for cancer research. Additionally, I actively engage in other volunteering initiatives like Mount Pearl Lions Club, First Lego League, and the MATE ROV Regional. I undertake personal projects such as designing Smart Home systems and creating websites for my own portfolio as well as many student organizations. My goal in society will be to connect more students to events going on throughout the campus and keep you up to date on all the fun stuff coming up!"
                        photo='/res/members/a2023/russell.jpg'
                        link='https://russellcorbett.ca/'
                        linkedin='https://www.linkedin.com/in/russell-corbett'
                        instagram='https://www.instagram.com/russell_corbett'
                    />
                    <MemberCard
                        title='Director of Outreach'
                        name='Kate Williams'
                        program='Electrical Engineering'
                        about="Hi everyone! My name is Kate Williams, term 4 Electrical Engineering and I'm the Director of Outreach for 2023-2025 Society 'A'! I'm a busy body so I'm involved in a couple other things besides society here on campus. To start, I'm on the MUN Seahawks Swim Team. We practice here on campus either in the Aquarina or the MUN pool. I love being a part of the varsity program here at school, the team is like my second family. I also get super cool travel opportunities because of swimming as well! Just this past season I was able to compete at Acadia, Dalhousie, and at the University of Victoria! To stay on the train of cool travel opportunities, I am also on an engineering student design team here at MUN called MUN E-Motorsports, formerly known as FMUNTENTH. We just competed in an international autonomous vehicle competition in San Antonio, Texas, where our team built a small autonomous car that was able to drive itself around a track and race other cars. We have our goals set higher for this year, and are planning to compete at the EV Grand Prix held by Perdue University that will require us to build an autonomous Go-kart. On another note, some fun facts about me are that my favorite artist is Taylor Swift (please come to Canada), my favorite food is a dynamite roll from Sun Sushi, and my dream vacation destination is the Amalfi Coast, Italy. I'm really looking forward to helping plan fun events, bringing new exciting things to our awesome faculty, and making these the best 2 years possible!"
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
                        photo='/res/members/a2023/abdelrahman.jpg'
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
                        about='Hey guys! I’m proud to serve as your President of Society B. I’m in Mechanical, class of 2025. If I’m not in the Society room or studying in the basement of the engineering building, you can find me in the Baja garage, out for a hike, at the cabin, or down at Quidi Vidi Brewery. Fun fact about me is that I can play the accordion! If you ever have any questions or concerns about all things Soc B, please feel free to shoot me an email or come see me in person. Looking forward to serving you & delivering good times!'
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
                        about='I like travelling so much. When I was in Egypt, I visited a lot of places all the way to Aswan in Upper Egypt and Sharm El Sheikh in Sinai. When I came to Canada, I still visited a lot of placed from St. John’s to Calgary. I am hoping I will be able to go all the way to Vancouver and visit more places all around the world!'
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
                        about="Hi! I'm the Vice President External of Society B. I'm in the Mechanical Engineering class of 2025, and I'm also the class representative! I travel across Canada to represent the best interests of MUN Engineering at conferences and meetings. You'll usually find me studying in the mech room, or at the rink - I love to figure skate. Shoot me an email anytime with questions or concerns, or to attend a conference!"
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
                        about="Hi! I’m Paige Bodnar - director of outreach! I’m a senior ONAE student who is maybe slightly obsessed with boats and the ocean. My hobbies are centered around cool things outside. My job is to spread the word about MUN engineering and make it as accessible as possible. You can usually find me in the ONAE room, I promise I’m not that far out(of)reach!"
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
  

