export function LinkCard(props) {
	return (
        <a href={props.link} className='group border border-white hover:bg-white rounded-3xl p-5 lg:w-1/3 transition-colors'>
            <div className="flex items-center justify-evenly">
                {props.image ? 
                <img src={props.image} className="h-12 lg:h-24"/>
                : null}
                <div className="text-center">
                    <h1 className="text-white text-lg lg:text-2xl font-bold font-ops group-hover:text-black">{props.title}</h1>
                    {props.description ? 
                    <p className="text-white text-md lg:text-xl font-gold group-hover:text-black">{props.description}</p>
                    : null} 
                </div>
            </div>
        </a>
    )
}