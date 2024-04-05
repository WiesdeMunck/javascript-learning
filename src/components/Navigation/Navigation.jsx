import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const menuItems = [
		{
			name: 'Home',
			url: '/',
		},
		{
			name: 'Movie Card',
			url: '/movie-card'
		},
		{
			name: 'Aos Animation',
			url: '/aos-animation',
		},
		{
			name: 'Gsap Animation',
			url: '/gsap-animation',
		},
		{
			name: 'Swiper Animation',
			url: '/swiper-animation',
		},
		{
			name: 'Svg Animation',
			url: '/svg-animation',
		},
		{
			name: 'Zero-point',
			url: '/zero-point',
		},
	];

	// <Route path="/gsap-animation" element={<GsapAnimation />} />
	// <Route path="/aos-animation" element={<AosAnimation />} />
	// <Route path="/svg-animation" element={<SvgAnimation />} />
	// <Route path="/swiper-animation" element={<SwiperAnimation/>} />
	// <Route path="/zero-point" element={<NumberOne />} />

	const toggleMenuDialog = () => {
		setIsDialogOpen(!isDialogOpen);
	};

	return (
		<>
			<button className="navigation-hamburger" onClick={toggleMenuDialog}>
				<span className="sr-only">Menu</span>
				<svg
					className="navigation-hamburger__svg"
					width="40px"
					height="35px"
					viewBox="0 0 40 35"
				>
					<rect x="0" y="0" width="40" height="5" fill="#000" />
					<rect x="0" y="15" width="40" height="5" fill="#000" />
					<rect x="0" y="30" width="40" height="5" fill="#000" />
				</svg>
			</button>
			{isDialogOpen && (
				<dialog
					className="navigation-takeover"
					open
					onClick={toggleMenuDialog}
				>
					<ul className="navigation-takeover__list">
						{menuItems.map((item) => (
							<li className="navigation-takeover__item">
								<Link
									key={item.name}
									className="navigation-takeover__link"
									to={item.url}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</dialog>
			)}
		</>
	);
}
