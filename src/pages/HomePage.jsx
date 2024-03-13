
import React from "react";
import NumberOne from "../components/NumberOne";
import GsapAnimation from "../components/GsapAnimation/GsapAnimation";
import SwiperAnimation from "../components/SwiperAnimation/SwiperAnimation";
import AosAnimation from "../components/AosAnimation/AosAnimation";
import SvgAnimation from "../components/SvgAnimation/SvgAnimation";

export default function HomePage() {
	return (
		<div>
			<h1>Home</h1>
			{/* <SwiperAnimation /> */}
			<SvgAnimation />
			{/* <AosAnimation /> */}
			{/* <NumberOne />  */}
		</div>
	)
}
