import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosAnimation() {
	useEffect(() => {
		AOS.init({
			duration: 2000, // values from 0 to 3000, with step 50ms
		});
	}, []);

	return (
		<section className="grid-item ">
			<div className="aos-animation">
				<div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
					<h1>Hello, world!</h1>
					<img src="/img/kitten1.png" alt="" />
				</div>
			</div>
			<div className="aos-animation">
				<div data-aos="fade-down" data-aos-anchor-placement="center-bottom">
					<h1>Hello, world!</h1>
					<img src="/img/kitten2.png" alt="" />
				</div>
			</div>
			<div className="aos-animation">
				<div data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
					<h1>Hello, world!</h1>
					<img src="/img/kitten3.png" alt="" />
				</div>
			</div>
			<div className="aos-animation">
				<div
					data-aos="zoom-out-up"
					data-aos-anchor-placement="center-bottom"
				>
					<h1>Hello, world!</h1>
					<img src="/img/kitten3.png" alt="" />
				</div>
			</div>
			<div className="aos-animation">
				<div
					data-aos="fade-left"
					data-aos-anchor="#example-anchor"
					data-aos-offset="500"
					data-aos-duration="500"
				>
					<h1>Hello, world!</h1>
					<img src="/img/kitten4.png" alt="" />
				</div>
			</div>
		</section>
	);
}
