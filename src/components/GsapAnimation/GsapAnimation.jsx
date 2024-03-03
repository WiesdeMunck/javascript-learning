import React, { useEffect } from 'react';
import { gsap } from 'gsap';
// import

export default function GsapAnimation() {
	useEffect(() => {


		gsap.to('.js-gsap-animation__ball', {
			y: 400,

			// Option 1
			duration: 0.75,
			ease: "Power2.easeIn",
			// option 2
			// duration: 1.75,
			// ease: "Bounce.easeOut",
			//
			yoyo: true,
			repeat: -1,
			transformOrigin: "center center",
			scale: 1.4,
		 });


		 gsap.to('.js-gsap-animation__ball', {
			rotation: 3600,
			repeat: -1,
			duration: 25,
			ease: "linear",
			transformOrigin: 'center center',
		 });
		}, []);

	return (
		<section className="grid-item">
			<div>
				<h1 className="">GsapAnimation</h1>
				<svg
					className="gsap-animation__ball js-gsap-animation__ball"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M40 20C40 16.0444 38.827 12.1776 36.6294 8.8886C34.4318 5.59962 31.3082 3.03617 27.6537 1.52242C23.9991 0.00866496 19.9778 -0.387402 16.0982 0.384302C12.2186 1.15601 8.65492 3.06082 5.85787 5.85787C3.06082 8.65492 1.15601 12.2186 0.384304 16.0982C-0.387401 19.9778 0.00866567 23.9991 1.52242 27.6537C3.03617 31.3082 5.59962 34.4318 8.8886 36.6294C12.1776 38.827 16.0444 40 20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20V20ZM11.3286 34.7714C11.39 34.6166 11.4238 34.4522 11.4286 34.2857L11.4286 27.9143L14.4571 25.8857L20.4857 28.3L22.8571 31.7857L18.8286 37.1429C16.1786 36.9444 13.611 36.1325 11.3286 34.7714V34.7714ZM11.4286 5.71429C11.4238 5.5478 11.39 5.38341 11.3286 5.22858C13.1788 4.1493 15.2132 3.42272 17.3286 3.08572L21.4286 8.41429L20.3143 11.7714L14.4857 14.1143L11.4286 12.0857L11.4286 5.71429ZM28.2571 4.98572L23.7429 6.77143L20.7857 2.85715C23.4074 2.97842 25.9651 3.7071 28.2571 4.98572V4.98572ZM15.7143 16.6857L21.0857 14.5286L26.5571 20L21.0857 25.4714L15.7143 23.3143L15.7143 16.6857ZM25.2143 33.3286L28.7429 34.7571C26.8283 35.9024 24.707 36.6597 22.5 36.9857L25.2143 33.3286ZM31.4286 32.7143L25.2143 30.2714L23.2571 27.3286L29.1571 21.4286L32.3714 21.4286L35.8286 26.5571C34.8389 28.9117 33.3356 31.0153 31.4286 32.7143V32.7143ZM36.8714 22.9857L34.8143 20L36.9 17.1429C37.0566 18.0873 37.1378 19.0427 37.1429 20C37.1397 21.0013 37.0489 22.0003 36.8714 22.9857V22.9857ZM35.9429 13.7286L32.2714 18.5714L29.1571 18.5714L23.0571 12.4714L23.9714 9.75715L31.1143 6.90001C33.2594 8.74586 34.9176 11.0909 35.9429 13.7286V13.7286ZM8.57144 7.25715L8.57144 11.7714L4.40001 12.9286C5.38313 10.7699 6.80356 8.83867 8.57144 7.25715V7.25715ZM3.30001 16.2L9.75715 14.4143L12.8571 16.4857L12.8571 23.5143L9.75715 25.5857L3.28572 23.7714C3.00451 22.5339 2.86078 21.2691 2.85715 20C2.85922 18.7206 3.00781 17.4456 3.30001 16.2V16.2ZM4.40001 27.0571L8.57143 28.2286L8.57143 32.7429C6.80534 31.1541 5.38537 29.2187 4.40001 27.0571V27.0571Z"
						fill="#007EB5"
					/>
				</svg>
			</div>
		</section>
	);
}
