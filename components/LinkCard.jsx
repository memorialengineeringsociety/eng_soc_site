export function LinkCard(props) {
	return (
        <a href={props.link} className='border border-mun-burgundy rounded-3xl p-5 lg:w-1/3'>
            <div className="flex items-center justify-evenly">
                {props.image ? 
                <img src={props.image} className="h-24"/>
                : null}
                <div className="text-center">
                    <h1 className="text-black text-lg lg:text-2xl font-bold font-ops">{props.title}</h1>
                    <p className="text-black text-md lg:text-xl font-gold">{props.description}</p>
                </div>
            </div>
        </a>
    )
}