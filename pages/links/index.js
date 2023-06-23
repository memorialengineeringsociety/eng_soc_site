import {LinkCard} from '../../components/LinkCard';

export default function Events() {
	return (
        <main className='flex flex-col gap-y-3 place-items-center p-3 bg-gradient-to-b from-blue-400 to-blue-950 min-h-screen'>
            <LinkCard
                title='Summer Softball Registration'
                description=''
                link='https://docs.google.com/forms/d/e/1FAIpQLSdDcNQ2kFZEIcJgKsgIVRjHmg3FPk6cPRk0toGM3_DGH7APhA/viewform?usp=sf_link'
                image='../res/events/softball.png'
            />
            <LinkCard
                title='MUN Engineering Society'
                description='The official website of the MUN Engineering Society'
                link='https://munengsociety.ca'
                image=''
            />
            <LinkCard
                title='MUN Engineering Society'
                description=''
                link='https://munengsociety.ca'
                image=''
            />
        </main>
    )
}