import React, { useState } from "react";

const ShowMoreText = (props) => {
	const [isTextShown, setIsTextShown] = useState(false);

	const textToDisplay = isTextShown ? props.text : (props.text ? `${props.text.substring(0, 300)}...` : '');

	const toggleTextShown = () => {
		setIsTextShown(!isTextShown);
	};

	return (
		<div className="">
            <p className="text-center font-gold_bold pt-2 lg:pt-0 text-black text-lg underline">Bio</p>
			<p className="text-black pl-5 pr-5 pb-5 text-justify font-maven">{textToDisplay} {<button className="text-white" onClick={toggleTextShown}>{isTextShown ? "Show Less" : "Show More"}</button>}</p>
		</div>
	);
};

export default ShowMoreText;
