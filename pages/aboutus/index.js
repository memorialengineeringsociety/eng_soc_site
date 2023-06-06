import Image from 'next/image'
import {MemberCard} from '../../components/MemberCard';

export default function AboutUs() {
	return (
        <main className='lg:flex'>
            <div id='soca' className='p-20 lg:w-1/2 space-y-4'>
                <h1 className='text-black font-ops text-5xl text-center'>Society A</h1>
                <MemberCard
                    title='President'
                    name='Ava Gogal'
                    program='Mechanical Engineering'
                    about=''
                    photo=''
                    link=''
                    linkedin=''
                    instagram='https://www.instagram.com/avaflorencegogal'
                />
                <MemberCard
                    title='VP Academic'
                    name='Hannah Doyle'
                    program='Mechanical Engineering'
                    about=''
                    photo=''
                    link=''
                    linkedin=''
                    instagram='https://www.instagram.com/hannahclairedoyle'
                />
                <MemberCard
                    title='VP Finance'
                    name='Michael Mallay'
                    program='Electrical Engineering'
                    about=''
                    photo=''
                    link=''
                    linkedin=''
                    instagram='https://www.instagram.com/michael_mallay18'
                />
                <MemberCard
                    title='VP External'
                    name='Sophia White'
                    program='Electrical Engineering'
                    about=''
                    photo='/res/members/a2023/sophia_white.png'
                    link=''
                    linkedin=''
                    instagram='https://www.instagram.com/sophiacwhite'
                />
                <MemberCard
                    title='VP Internal'
                    name='Jacob Gillis'
                    program='Electrical Engineering'
                    about=''
                    photo=''
                    link=''
                    linkedin=''
                    instagram='https://www.instagram.com/jacobgillis13'
                />
                <MemberCard
                    title='Director of Communications'
                    name='Russell Corbett'
                    program='Computer Engineering'
                    about=''
                    photo='/res/members/a2023/russell_corbett.jpg'
                    link='https://russellcorbett.ca/'
                    linkedin='https://www.linkedin.com/in/russell-corbett'
                    instagram='https://www.instagram.com/russell_corbett'
                />
                <MemberCard
                    title='Director of Outreach'
                    name='Kate Williams'
                    program='Electrical Engineering'
                    about=''
                    photo=''
                    link=''
                    linkedin=''
                    instagram='https://www.instagram.com/katewilliams13'
                />
                <MemberCard
                    title='Director of Social Events'
                    name='Kait Abbott'
                    program='Mechanical Engineering'
                    about=''
                    photo=''
                    link=''
                    linkedin=''
                    instagram='https://www.instagram.com/kait.abbott'
                />
                <MemberCard
                    title='Director of Sports'
                    name='Eli Brown'
                    program='Electrical Engineering'
                    about=''
                    photo=''
                    link=''
                    linkedin=''
                    instagram='https://www.instagram.com/elibrown.4'
                />
                <MemberCard
                    title='Director of Co-op'
                    name='Harnoor Singh'
                    program='Computer Engineering'
                    about=''
                    photo=''
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
            <div id='socb' className='p-20 w-1/2 space-y-4'>
            <h1 className='text-black font-ops text-5xl text-center'>Society B</h1>
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
        </main>
        )
}