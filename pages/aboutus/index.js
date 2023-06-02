import Image from 'next/image'
import {MemberCard} from '../../components/MemberCard';

export default function AboutUs() {
	return (
        <main className='flex'>
            <div id='soca' className='p-20 w-1/2'>
                <h1 className='text-black'>Society A</h1>
                <MemberCard
                    title='Director of Communications'
                    name='Russell Corbett'
                    program='Computer Engineering'
                    about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit vehicula, tincidunt lacus eget, fringilla lorem. Etiam at fermentum lorem. Vivamus eleifend ex vitae nulla gravida, eget ultrices est luctus. Donec elit metus, sagittis in sapien ac, tincidunt tincidunt enim. Nam ullamcorper nibh nulla, sit amet faucibus turpis euismod eget. Donec arcu ipsum, dapibus a eleifend at, pellentesque id magna. Nam quis hendrerit mauris, vel commodo justo. Nam accumsan lectus vulputate lorem sagittis pretium a quis nisi. Praesent consequat lacus rutrum ante suscipit, nec porttitor sapien consequat. Vestibulum interdum tristique sodales. Maecenas suscipit id metus a facilisis. Nam vitae nulla sit amet eros molestie faucibus id et dui. Etiam dictum odio nec velit ornare pharetra. Pellentesque facilisis nisi quis aliquam mollis. Proin id sapien ut arcu varius feugiat eget at leo. Vestibulum vitae arcu faucibus, dictum lorem non, blandit lectus. '
                    photo='/res/members/russell_white_bg.jpg'
                    link='https://russellcorbett.ca/'
                    linkedin='https://www.linkedin.com/in/russell-corbett'
                    instagram='https://www.instagram.com/russell_corbett'
                />
            </div>
            <div id='socb' className='p-20 w-1/2'>
                <h1 className='text-black'>Society B</h1>
                <MemberCard
                        title='Director of Communications'
                        name='Veronica Naterer'
                        program='Mechanical Engineering'
                        about=''
                        photo=''
                        link=''
                        linkedin=''
                        instagram=''
                    />
            </div>
        </main>
        )
}