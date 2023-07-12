import {NothingHereYet} from '../../components/NothingHereYet';
import {NewsCard} from '../../components/NewsCard'

export default function News() {
	return (
        <main className='flex repeating-bg min-h-screen'>
            <NothingHereYet/>
            <NewsCard
                image=''
                title='Eastern Edge wins multiple awards at MATE International!'
                date='July 7th'
                by='Russell Corbett'
                text=''
                link=''
            />
        </main>
    )
}