import {LinkCard} from '../../components/LinkCard';

export default function Events() {
	return (
        <main className='flex flex-col gap-y-3 place-items-center p-3'>
            <LinkCard
                title='MUN Engineering Society'
                description='The official website of the MUN Engineering Society'
                link='https://munengsociety.ca'
                image='../res/team_logos/chemecar.png'
            />
            <LinkCard
                title='MUN Engineering Society'
                description='The official website of the MUN Engineering Society'
                link='https://munengsociety.ca'
                image=''
            />
            <LinkCard
                title='MUN Engineering Society'
                description='The official website of the MUN Engineering Society'
                link='https://munengsociety.ca'
                image=''
            />
        </main>
    )
}