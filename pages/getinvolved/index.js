import Image from 'next/image'
import {TeamCard} from '../../components/TeamCard';


export default function GetInvolved() {
	return (
		<main className=''>
			<div className='hidden xl:flex w-full justify-evenly'>
				<a className='w-1/3 flex justify-center p-5 border-4 border-black'><h1 className='text-black text-3xl font-extrabold underline font-ops'>Competitive Teams</h1></a>
				<a className='w-1/3 flex justify-center p-5 border-4 border-black'><h1 className='text-black text-3xl font-extrabold underline font-ops'>Non-Competitive Organizations</h1></a>
				<a className='w-1/3 flex justify-center p-5 border-4 border-black'><h1 className='text-black text-3xl font-extrabold underline font-ops'>Volunteering Oppertunities</h1></a>
			</div>
			<div className='xl:flex overflow-auto snap-mandatory snap-x'>
				<section id='team' className='min-w-full snap-center'>
					<h1 className='text-black text-5xl font-extrabold underline pt-10 font-ops text-center'>Competitive Teams</h1>
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
							contact='easternedgerobo@gmail.com'
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
							contact='memorialbaja@gmail.com'
						/>
						<TeamCard
							name='MUN Sailbot'
							title='Autonomous Sailboat'
							logo='/res/team_logos/sailbot.png'
							text=''
							link=''
							contact='munsailbot@gmail.com'
							facebook='https://www.facebook.com/munsailbot/'
							instagram='https://www.instagram.com/munsailbot/'
							linkedin='https://www.linkedin.com/company/mun-sailbot/?originalSubdomain=pe'
							date='2009'
						/>
						<TeamCard
							name='Paradigm Engineering'
							title=''
							logo='/res/team_logos/paradigm.png'
							text='Paradigm Engineering is a student group focused on has competing in the International Ground Vehicle Competition (IGVC). IGVC AutoNav competition tasks teams with building a fully autonomous vehicle to navigate around a track. Paradigm previously competed in the SpaceX Hyperloop Competition and the Boeing Company Boeing Competition, notably placing 2nd in 2017 and 8th in 2019.'
							link=''
							instagram='https://www.instagram.com/paradigm_engineering/'
							contact='hello@paradigmhyperloop.com'
							date='2016'
						/>
						<TeamCard
							name='Concrete Toboggan'
							title=''
							logo='/res/team_logos/concrete.png'
							text=''
							link='https://www.engr.mun.ca/ConcreteToboggan/'
							instagram='https://www.instagram.com/mun_concrete_toboggan'
							facebook='https://www.facebook.com/profile.php?id=100076112047631'
							contact='munconcretetoboggan@gmail.com'
							date='2018'
						/>
						<TeamCard
							name='Chem-E-Car'
							title='Chemical Powered Car'
							logo='/res/team_logos/chemecar.png'
							text='MUN Chem-E-Car is designing and building a shoe-box sized car that runs solely on chemical reactions. The car will then compete by travelling a set distance in a set time period. Besides competing in this competition, we are also striving to break barriers and stigmas to show both potential engineering students and the public what precisely the Process/Chemical engineering industry does to benefit their everyday lives.'
							link=''
							contact='memorialchemecar@gmail.com'
							instagram='https://www.instagram.com/memorialchemecar/'
							date='2020'
						/>
						<TeamCard
							name='Iceberg ASV'
							title='Autonomous Surface Vehicle'
							logo='/res/team_logos/icebergasv.png'
							text='Iceberg ASV is a student-led design team that designs and builds an autonomous surface vehicle (ASV) to compete in RoboBoat, an annual competition held by RoboNation. Hull design, controls, power distribution and computer vision are just some of the areas that RoboBoat entails. Consisting of thirteen members ranging across multiple engineering disciplines, commerce and marine institute, Iceberg encourages interdisciplinary work to maximize learning for all team members.'
							link='https://icebergasv.ca/'
							date='2021'
							contact='info@icebergasv.ca'
						/>
						<TeamCard
							name='MUN RoboSub'
							title='Autonomous Underwater Vehicle'
							logo='/res/team_logos/robosub.png'
							text=''
							link='https://sites.google.com/mun.ca/mun-robosub/home'
							contact='robosubmun@gmail.com'
							date='2021'
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
							name='Phoenix Aerospace'
							title='Radio Controlled Electric Aircraft'
							logo='/res/team_logos/phoenix.png'
							text='Phoenix Aerospace consists of a dedicated group of aspiring post-secondary students passionately involved in the design and manufacturing of aircrafts. Being the only aerospace student team at MUN, both classroom education and hands-on experience are combined to seamlessly navigate through challenges of aerodynamics, materials, and systems integration. With each prototype, the team gains invaluable insights and problem-solving skills, fostering a culture of innovation and resilience.'
							link=''
							contact='phoenixuav.mun@gmail.com'
							facebook='https://www.facebook.com/munphoenixareospace/'
							date='2022'
						/>
						<TeamCard
							name='Memorial FSAE'
							title='Fully Electric Formula Style Vehicle'
							logo='/res/team_logos/fsae.png'
							text='Memorial Formula SAE is responsible for the research, design, fabrication, and operation of Memorial Univeristy’s first all-electric human operated formula one vehicle. The team will be competing in an SAE international competition where they will undergo events including endurance, auto-cross, and skid pad tests as well as showcasing their design and cost evaluation presentations. This team has a diverse make-up of students across various disciplines and gives students an opportunity to apply what they learn in the classroom to a real project. This team gives students the opportunity to develop many needed skills such as their communication, teamwork, and technical abilities.'
							link=''
							linkedin='https://www.linkedin.com/company/memorial-racing-formula-sae-electric/'
							instagram='https://www.instagram.com/memorialfsae/'
							contact='memorialfsaee@gmail.com'
							date='2022'
						/>
					</div>
				</section>
				<section id='organization' className='min-w-full snap-center'>
					<h1 className='text-black text-5xl font-extrabold underline pt-10 font-ops text-center'>Non-Competitive Organizations</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-5 pb-10'>
						<TeamCard
							name='Engineers Without Borders'
							title=''
							logo='/res/team_logos/ewb.png'
							text='Engineers Without Borders is a non-profit organization that works to improve the quality of life in developing countries. The Memorial University chapter of EWB is a student-run organization that works to raise awareness of global issues and to raise funds for EWB projects.'
							link='https://www.ewb.ca/en/'
							contact='mun@ewb.ca'
							instagram='https://www.instagram.com/ewb_mun/'
							discord='https://discord.gg/vFs8GrN4N8/'
							facebook='https://www.facebook.com/ewbmun/'
						/>
						<TeamCard
							name='Robogals'
							// title='Engage, Inspire, Empower the Future of STEM'
							logo='/res/team_logos/robogals.png'
							text='Robogals is a student-led volunteer organization with chapters across the world, working with a common goal to increase the participation of female and gender diverse youth in engineering and technology-related industries. Through educational workshops and events, Robogals MUN Chapter seek to encourage female identifying and gender diverse youth to pursue higher education and careers in traditionally male-dominated fields by cultivating self confidence and providing mentorship.'
							link='https://robogals.org/locations/north-america-na/memorial-university-of-newfoundland-%E2%80%8B/'
							facebook='https://www.facebook.com/robogalsmun/'
							linkedin='https://www.linkedin.com/company/robogals-munchapter/'
							twitter='https://twitter.com/RobogalsM'
							instagram='https://www.instagram.com/mun.robogals/'
							date='2020'
						/>
						<TeamCard
							name='WISE Undergraduate Society'
							title=''
							logo='/res/team_logos/wise.png'
							text='The WISE Undergraduate Society (WISE US) is dedicated to supporting female engineers and scientists as they embark on their journey to becoming professionals in their field of interest. Through various workshops, lunch & learns, networking opportunities, mentoring activities, and social events, the goal of WISE US is to help students develop into successful women in the workplace after graduating.'
							link='https://wisenl.ca/wiseus/'
							facebook='https://www.facebook.com/WISEUndergradSociety/'
							contact='wiseus15@gmail.com'
							date='2008'
						/>
						<TeamCard
							name='Google Developers Club'
							title=''
							logo='/res/team_logos/google.png'
							text=''
							link='https://gdsc.community.dev/memorial-university-of-newfoundland/'
							discord='https://discord.gg/hr6gyCrjt5/'
							facebook='https://www.facebook.com/dscmun/'
							instagram='https://www.instagram.com/gdscmun/'
							linkedin='https://www.linkedin.com/company/dscmun/'
						/>
						<TeamCard
							name='National Society of Black Engineers'
							title=''
							logo='/res/team_logos/nsbe.png'
							text='NSBE MUN is the Memorial University chapter of the National Society of Black Engineers. At NSBE MUN, we hope to foster a community to support black identifying students (and ethnic minorities) participating in the Memorials Engineering program'
							link=''
							instagram='https://www.instagram.com/nsbe.mun'
							facebook='https://www.facebook.com/NSBE-MUN-102221058869179/'
							contact='nsbemun@gmail.com'
							date='2020'
						/>
						<TeamCard
							name='IEEE Student Branch'
							title=''
							logo='/res/team_logos/ieee.png'
							text=''
							link=''
							discord='https://discord.gg/Y737BCURTr/'
							facebook='https://www.facebook.com/MUNIEEEStundentBranch/'
							contact='kmali@ieee.org'
						/>
						<TeamCard
							name='Society of Petroleum Engineers Student Chapter'
							title=''
							logo='/res/team_logos/spe.png'
							text='The Society of Petroleum Engineers (SPE)-MUN Student Chapter was established to be a valuable resource for students and the benefits of joining are numerous. The opportunity to network with industry professionals is just one of numerous the benefits. For interested students, this can be a great chance to meet people and talk about the kinds of positions available and perhaps even secure future work-terms positions and jobs.'
							link=''
							facebook='https://www.facebook.com/MUNSSPE/'
							linkedin='https://linkedin.com/company/sspemun'
							contact='sspe@mun.ca'
							date='2002'
						/>
						<TeamCard
							name='Hackfrost NL'
							title=''
							logo='/res/team_logos/hackfrost.png'
							text='Hack Frost NL organized the first ever university-wide online hackathon at MUN with the goal of bridging the gap between the classroom and the workplace. Hack Frost continues to organize an annual hackathon for students at MUN while providing other events around the year.'
							link='https://hackfrostnl.ca/'
							date='2020'
							instagram='https://www.instagram.com/hackfrostnl/'
							facebook='https://www.facebook.com/hackfrostnl/'
							twitter='https://twitter.com/hackfrostnl/'
							discord='https://discord.gg/x5drWuwTT4/'
						/>
						<TeamCard
							name='Tetra Society'
							title=''
							logo='/res/team_logos/tetra.png'
							text='The Tetra Society is an award-winning charity dedicated to assisting people with disabilities achieve an independent and fulfilling life in the community. Tetra recruits skilled volunteer engineers, technicians, health professionals, and any “MacGyver types” to design, make, or modify assistive devices or the environment for people with disabilities.'
							link='https://tetrasociety.org/'
							facebook='https://www.facebook.com/groups/250387475027356/'
						/>
					</div>
				</section>
				<section id='volunteer' className='min-w-full flex justify-center snap-center'>
					<div className='w-1/2'>
						<h1 className='text-black text-3xl xl:text-5xl font-extrabold underline xl:pt-10 font-ops text-center'>Volunteering Oppertunities</h1>
						<h2 className='text-black text-2xl font-bold font-ops text-center'>Engineering Volunteer Network</h2>
						<p className='text-black'>Memorial Engineering Student Society is dedicated to uplifting not only our student body but also our community. We believe one of the fundamental ways of giving back comes through volunteering. We want to ensure it is always an accessible option for our students. We've created a space for students, clubs, companies, or individuals to bring forward volunteering opportunities or any little thing they need help with! You’ll fill the below form, giving us dates, number of volunteers required and any other relevant info! We’ll take this information and contact the keen students who have signed up and get back to you.​</p>
						<div className='flex justify-center pt-5 pb-5 gap-x-10'>
							<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6bapES16a9c40zQUhLsR4OoZJD2FBJ_PfZA6cje3WJosRXw/viewform', '_blank')}>Volunteer Request Form</button>
							<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeneWqIDHKuxzMUeHK9Zz7jpy0DBfJN4ZwlPBustCRZR1b1-A/viewform', '_blank')}>Volunteer Sign-Up Form</button>
						</div>
						<p className='text-black'>​Volunteers from MUN Engineering Societies A and B had the distinct honour of helping Make a Wish Canada grant Jenna’s wish - a wheelchair accessible swing set! After a couple phone calls, a group of volunteers came together and managed to assemble Jenna’s swing in one evening. Many, many thanks to Dr. Stephen Bruneau with the Faculty and Natalie Ryan of Make a Wish for bringing this opportunity our students.</p>
					</div>
				</section>
			</div>
		</main>
	)
}
