import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ChartComponent(props) {
    return (
    			<div className="flex flex-col justify-evenly items-center border-black border-4 bg-stone-400 rounded-3xl ml-2 mr-2 mt-10 sm:ml-8 sm:mr-8 lg:ml-20 lg:mr-20 ">
				<h3 className="text-black font-bold text-2xl mt-5">Engineering Society Organizational Charts</h3>
				<div className="flex gap-x-5 pt-6 pb-10 pr-10 pl-10 xl:flex-row w-7/9 m-auto">
						<div className="h-auto items-center flex" >
							<img src="/res/members/group/org_chart_soc_2029.jpg"/>
						</div>
						<div className="h-auto items-center flex" >
							<img src="/res/members/group/org_chart_soc_2028.jpg"/>
						</div>
				</div>
			</div>
    )
}