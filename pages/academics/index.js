import { useState } from 'react';
import Image from 'next/image'
import {NothingHereYet} from '../../components/NothingHereYet';

export default function GetInvolved() {
	return (
		<main className='repeating-bg min-h-screen'>
			<Navigation />
		</main>
	)
}

function Navigation() {
    const [currentButton, setCurrentButton] = useState(1);
  
    return (
      <div className="xl:flex xl:flex-col items-center">
        <div className="flex flex-col sticky top-16 lg:top-20 pl-20 pr-20 z-40 lg:flex-row w-full justify-evenly bg-stone-400 border-b-2 border-black pt-1 lg:pt-3 pb-2 lg:pb-5 rounded-b-3xl">
          <button
            className={`xl:w-1/3 xl:text-3xl font-extrabold font-ops transition-transform ${
              currentButton === 1 ? 'xl:scale-125 underline text-black' : 'text-white'
            }`}
            onClick={() => setCurrentButton(1)}
          >
            Co-op
          </button>
          <button
            className={`xl:w-1/3 xl:text-3xl font-extrabold font-ops transition-transform ${
              currentButton === 2 ? 'xl:scale-125 underline text-black' : 'text-white'
            }`}
            onClick={() => setCurrentButton(2)}
          >
            Support
          </button>
          <button
            className={`xl:w-1/3 xl:text-3xl font-extrabold font-ops transition-transform ${
              currentButton === 3 ? 'xl:scale-125 underline text-black' : 'text-white'
            }`}
            onClick={() => setCurrentButton(3)}
          >
            Equity, Diversity, and Inclusion
          </button>
        </div>
  
        <div className="mt-4">
            <div className={`transition-opacity ${currentButton === 1 ? 'block opacity-100' : 'hidden opacity-0'} delay-200`}>
                <div className="bg-gray-100 p-6">
                    <h1 className="text-2xl font-bold mb-4 text-black">Get the most out of your co-op experience</h1>
                    <p className="mb-4 text-black">Students from Memorial University's Bachelor of Engineering co-operative program are fortunate to have the opportunity to combine academic and practical education through a series of 4 month work terms. While the Co-op Handbook contains most information, this page is to be used as an additional resource to help you navigate the co-op office's expectations.</p>

                    <p className="mb-2 text-black">You can also reference the co-op office's work term guides here:</p>
                    <ul className="list-disc list-inside mb-4 text-black">
                        <li>Work Term 1</li>
                        <li>Work Term 2</li>
                        <li>Work Term 3</li>
                        <li>Work Term 4</li>
                        <li>Work Terms 5/6</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2 text-black">Important Dates for FALL 2022 Work Term</h2>
                    <ul className="list-disc list-inside mb-4 text-black">
                        <li>Monday, 29 August 2022: Fall Work Term begins. Complete Work Term Confirmation online in MyMUNLife.</li>
                        <li>Friday, 23 September 2022: Deadline for submission of Work Term Objectives. Submit this form.</li>
                        <li>Friday, 21 October 2022: Deadline for submission of Work Report Outline. Complete online in MyMUNLife.</li>
                        <li>Wednesday, 21 December 2022: Work Term officially ends and deadline for the submission of evaluation forms and communications component documents. Note: If mailing forms/reports, the postmark date will be recorded as the received date.</li>
                        <li>Tuesday, 5 January 2023: Academic courses begin for Fall 2021.</li>
                        <li>5, 9-11 January 2023: Oral presentations. Students should be prepared to present at this time. Arrangements to be confirmed with your Academic Staff Member in Cooperative Education.</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2 text-black">How to claim work-terms towards your P.Eng</h2>
                    <p className="mb-4 text-black">On behalf of PEGNL, Mark Fewer held an information session on March 15, 2017, to talk about claiming undergraduate work experience towards your Professional License.</p>

                    <ul className="list-disc list-inside mb-4 text-black">
                        <li>Keep a PEGNL Logbook during your work-terms with bi-weekly entries (or at least monthly) between 8-10 lines each, and have a P.Eng (or equivalent) sign off on each entry.</li>
                        <li>You can claim up to 3 work-terms (a maximum of 12 months) of undergraduate work experience, starting after you complete academic Term 4 in the program. This means you can back-log the fall 2016 work-term, and have a P.Eng (or equivalent) that you worked with sign off on the entries, but it is unnecessary since we still have 3 work terms left.</li>
                        <li>If the person signing off on your entries is not a P.Eng, PEGNL will determine equivalency by having them submit their resume with your logbook, so make sure you supervisor is aware of this expectation.</li>
                        <li>Blank logbook pages, and example entries can be found on the PEGNL website. You can print the pages yourself or buy an actual logbook from the PEGNL office downtown. If you do not use their logbook, it is recommended that you at least follow their format.</li>
                        <li>Not looking to stay in NL for your entire career? Don't worry, your professional license is easily transferable between Canadian provinces.</li>
                        <li>The quality and type of experience you earn is also assessed, so be aware of PEGNL's definition of acceptable work experience.</li>
                    </ul>

                    <p className="mb-2 text-black">For more details, please reference Mark Fewer's presentation, the PEGNL website, or contact Jordan Careen, Director of Co-op at <a href="mailto:jecareen@mun.ca" className="text-black">jecareen@mun.ca</a>.</p>
                </div>
            </div>
            <div className={`transition-opacity ${currentButton === 2 ? 'block opacity-100' : 'hidden opacity-0'} delay-200`}>
                <div className="bg-gray-100 p-6">
                    <h1 className="text-2xl font-bold mb-4 text-black">Cahill Engineering One Student Success Centre</h1>
                    <p className="mb-4 text-black">There's a reason everyone gets the 'look to your left, look to your right' speech when you join engineering... do not be those guys! The Engineering One Help Centre is a great chance to learn all that course material that you're struggling with. (Pro tip: start trying to actually learn that material, oh, you know, not the night before your big midterm or final... just trust me on this).</p>

                    <h2 className="text-lg font-semibold mb-2 text-black">Math Help Centres</h2>
                    <p className="mb-4 text-black">For those in EO or Naval or maybe those just doing a bitta extra math courses for fun, this is a great opportunity to get help on your assignments and understand your courses.</p>

                    <h2 className="text-lg font-semibold mb-2 text-black">Chemistry Help Centre / Resource Room</h2>
                    <p className="mb-4 text-black">For those in EO or Process, these are located in the Chemistry-Physics building in rooms C 2022 and C 2012 respectively.</p>

                    <h2 className="text-lg font-semibold mb-2 text-black">The Writing Centre</h2>
                    <p className="mb-4 text-black">This is a fantastic resource you can use throughout your entire degree. The Writing Centre is not only useful for your English courses, they can help you with your reports and term papers too. Also, for those work term reports, the staff at the Writing Centre can help you by distance as well.</p>

                    <h2 className="text-lg font-semibold mb-2 text-black">The Physics Help Centre</h2>
                    <p className="mb-4 text-black">This centre is designed specifically for first-year physics students and is staffed by professors, assistants, and physics majors. The staff schedule is posted at the beginning of each semester so students can check when their professor is scheduled to work.</p>

                    <h2 className="text-lg font-semibold mb-2 text-black">MUNSU Resource Centres</h2>
                    <p className="mb-2 text-black">Many of these resource centres were started to help represent minorities on campus. These are amazing places to go if you would like some peer support or information. Currently, there are 7 resource centres supported by the student union:</p>
                    <ul className="list-disc list-inside mb-4 text-black">
                        <li>Aboriginal Resource Centre (ARC)</li>
                        <li>Disability Information and Support Centre (DISC)</li>
                        <li>International Students’ Centre (ISC)</li>
                        <li>Lesbian, Bisexual, Gay and Transgender (LBGT-MUN)</li>
                        <li>Student Parents’ Resource Centre (SPRC)</li>
                        <li>Students Older Than Average (SOTA)</li>
                        <li>Women’s Resource Centre (WRC)</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-2 text-black">Walk-safe Drive-safe</h2>
                    <p className="mb-4 text-black">WalkSafe is a student-run program that offers students, faculty, staff, and guests of the university accompaniment when walking around campus after dark. Just call 864-6464! SafeDrive is a free service offered for students by MUNSU, providing rides home from campus during the Fall and Winter semesters. It operates from 7pm to 12am, Sunday to Thursday, with extended hours during exam periods. The SafeDrive van leaves every hour on the hour from the base of the clocktower, just outside the Queen Elizabeth II Library.</p>

                    <h2 className="text-lg font-semibold mb-2 text-black">Counselling Centre</h2>
                    <p className="mb-4 text-black">Through individualized personal counselling, outpatient psychiatric services, and a wide range of group counselling, professional staff and faculty at the Centre, with the assistance of supervised doctoral residents and practicum students from the various training programs on campus, help students to develop their own unique resources. The Counselling Centre helps students develop their study strategies, support for study problems, and help students learn to apply strategies for managing university-level academic work more effectively.</p>

                    <h2 className="text-lg font-semibold mb-2 text-black">Scholarships and Awards Program</h2>
                    <p className="mb-4 text-black">Student Affairs and Services administers the Scholarships and Awards Program for the University, distributes out-of-Province Financial Aid, and emergency financial aid.</p>
                </div>
            </div>
            <div className={`transition-opacity${currentButton === 3 ? 'block opacity-100' : 'hidden opacity-0'} delay-200`}>
                <NothingHereYet/>
            </div>
        </div>
      </div>
    );
  }
  