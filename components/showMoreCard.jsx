import React, { useState } from "react";

const ShowMoreText = (props) => {
	const [isTextShown, setIsTextShown] = useState(false);

	const textToDisplay = isTextShown ? props.text : props.text ? `${props.text.substring(0, 300)}...` : "";

	const toggleTextShown = () => {
		setIsTextShown(!isTextShown);
	};

	return (
		<div className="">
			<p className="pt-2 text-center font-norwester text-lg text-black underline lg:pt-0">Bio</p>
			<p className="pb-5 pl-5 pr-5 text-justify font-maven text-black">
				{textToDisplay}{" "}
				{
					<button className="text-white" onClick={toggleTextShown}>
						{isTextShown ? "Show Less" : "Show More"}
					</button>
				}
			</p>
		</div>
	);
};

export default ShowMoreText;
