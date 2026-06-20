export function EventCard(props) {
  return (
    console.log(props.image),
    (
      <div className="flex flex-col justify-center rounded-3xl bg-stone-400 p-5 lg:flex-row gap-5">
        {props.image ? <img className="rounded-xl lg:w-80 lg:h-auto object-cover self-stretch" src={props.image}></img> : null}
        <div className="flex w-full flex-col justify-center relative">
          {props.organizer ? <img className="h-20 object-contain absolute top-0 right-0" src={props.organizer}></img> : null}
          <h3 className="text-center font-norwester text-3xl lg:text-5xl">{props.name}</h3>
          <h2 className="text-center font-norwester text-lg text-stone-600 lg:text-2xl">{props.alt_name ? `${props.age} • ${props.alt_name} • ${props.date}` : `${props.age} • ${props.date}`}</h2>
          <h3 className="text-md text-center font-norwester text-stone-700 lg:text-xl">
            {props.location} &#x2022; {props.cost}
          </h3>
          {props.description ? (
            <p className="text-center text-stone-800 md:text-sm lg:pl-20 lg:pr-20 lg:text-lg">{props.description}</p>
          ) : null}
          {Array.isArray(props.details) ? (
            <ul className="list-disc list-inside text-stone-800 md:text-sm lg:pl-20 lg:pr-20 lg:text-lg">
              {props.details.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          ) : null}
          <div className="flex flex-row justify-center gap-4 mt-4">
            {props.registerLink ? (
              <a href={props.registerLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-xl bg-stone-600 text-white font-norwester hover:bg-stone-800">
                Register
              </a>
            ) : null}
            {props.contactEmail ? (
              <a href={`mailto:${props.contactEmail}`} className="px-6 py-2 rounded-xl border-2 border-stone-600 text-stone-700 font-norwester hover:bg-stone-300">
                Contact
              </a>
            ) : null}
          </div>
        </div>
      </div>
    )
  );
}