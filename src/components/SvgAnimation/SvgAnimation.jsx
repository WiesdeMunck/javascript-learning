import React from 'react';

export default function SvgAnimation() {
	return (
		<section className="grid-item">
			<h1>svg SvgAnimation</h1>
			{/* Loading svg */}
			<svg height="200" width="200" viewBox="-100 -100 200 200">
				<circle cx="0" cy="0" r="50" fill="#Ff4444" />
				{/* use a stroke dash array and increase it with js to make a loading animation with js */}
				<circle
					className="svg-animation__bal"
					cx="0"
					cy="0"
					r="50"
					fill="transparent"
					strokeWidth="20"
					stroke="#000"
					stroke-dasharray="100,2000"
					stroke-linecap="round"
				/>
			</svg>

			{/* Christmass ball animation */}
			<svg height="200" width="200" viewBox="-100 -100 200 200">
				<circle cx="0" cy="0" r="50" fill="#Ff4444" />
				{/* use a stroke dash array and increase it with js to make a loading animation with js */}
				<circle
					cx="0"
					cy="-70"
					r="15"
					fill="transparent"
					stroke="gold"
					strokeWidth="2"
				/>
				<rect x="-15" y="-60" width="30" height="15" fill="gold" />
			</svg>
			<svg height="360" width="200" viewBox="-140 190 360 150">
				<polygon points="0,100 130,300 -130,300" fill="#008800" />
				<polygon points="0,50 100,200 -100,200" fill="#00aa00" />
				<polygon points="0,0 80,120 -80,120" fill="#00dd00" />
				<rect y="300" x="-30" fill="#880000" width="60" height="50" />
			</svg>

			{/* Sleigh animation with tree added*/}
			<svg width="400" height="200" viewBox="-200 -100 400 200" fill="none">
				<path
					stroke="#E0CEB9"
					stroke-width="4"
					d="M-200 80 L -80 80 Q 80 80 70 -10 A 70 70 0 0 0 -70 -10 Q -80 80 80 80 L 200 80"
				/>

				<g class="svg-animation__sleigh">
					<path
						d="
      M -30 -2 L 30 -2 A 10 10 0 0 0 30 -22
      M -20 -2 L -20 -17
      M 20 -2 L 20 -17"
						stroke="#AF6455"
						stroke-width="5"
					/>
					<path d="M -27 -17 L 27 -17" stroke="#7A504F" stroke-width="6" />
				</g>
				{/* It needs to be inside the svg for it to correctly follow the path */}
				<g class="svg-animation__tree" transform="scale(0.33)">
					<polygon points="0,50 65,150 -65,150" fill="#008800" />
					<polygon points="0,25 50,100 -50,100" fill="#00aa00" />
					<polygon points="0,0 40,60 -40,60" fill="#00dd00" />
					<rect y="150" x="-15" fill="#880000" width="30" height="25" />
				</g>
			</svg>
		</section>
	);
}
