import { NothingHereYet } from "../../components/NothingHereYet";
import jsonData from "public/json/events.json";
import { EventCard } from "../../components/EventCard";
import Head from 'next/head'

const data = jsonData;
const organizer = {
	"enactus": "/res/team_logos/enactus.png",
	"edge": "/res/team_logos/eastern_edge.png",
	"baja": "/res/team_logos/baja.png",
	"paradigm": "/res/team_logos/paradigm.png",
	"concrete": "/res/team_logos/concrete.png",
	"chemecar": "/res/team_logos/chemecar.png",
	"iceberg": "/res/team_logos/icebergasv.png",
	"robosub": "/res/team_logos/robosub.png",
	"phoenix": "/res/team_logos/phoenix.png",
	"fsae": "/res/team_logos/fsae.png",
	"force": "/res/team_logos/force_seven.png",
	"engsoca": "/res/logos/society-a.png",
	"engsocb": "/res/logos/society-b.png"
}

export default function Events() {
	return (
		<main className="repeating-bg flex min-h-screen flex-col">
						<Head>
				<title> MUN Eng Society | Events</title>
			</Head>
			<section className="flex flex-col pt-5 pb-5 pl-2 pr-2 lg:pb-10 lg:pl-40 lg:pr-40 lg:pt-10 gap-5">

				{Object.entries(data).map(([event, event_data]) => {
					return <EventCard name={event_data.name} organizer={organizer[event_data.organizer]} alt_name={event_data.alt_name} age={event_data.age} date={event_data.date} location={event_data.location} cost={event_data.cost} available={event_data.available} description={event_data.description} image={event_data.image} />;
				})}
			</section>
		</main>
	);
}

/* 
format for json:
    "Dday": {
        "name": "Dday",
        "organizer": "engsoca",
        "alt_name": "Dday",
        "age": "19+",
        "date": "11/11/11",
        "location": "eng",
        "cost": "0"
    }
*/