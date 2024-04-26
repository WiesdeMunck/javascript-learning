import React, { useState } from 'react';

export default function IframeSlideIn() {
	const [iframeToggle, setIframeToggle] = useState(
		'http://localhost:5173/movie-card'
	);
	const [iframeSlideToggle, setIframeSlideToggle] = useState(false);

	return (
		<section key={1} className="grid-item">
			<div className="iframe-slide-in">
				<div className="iframe-slide-in__content-wrapper">
				<h1 className='iframe-slide-in__title'>IframeSlideIn</h1>

				<ul className='iframe-slide-in__notes' >
					<li className='iframe-slide-in__notes-item'>
							maybe add load animation on everyclick ?
					</li>
					<li className='iframe-slide-in__notes-item'>
							Its really fast but wil it be the same on a lager site ?
					</li>
				</ul>
				</div>
				<div className="iframe-slide-in__button-wrapper">
					<button
						className="iframe-slide-in__btn"
						onClick={() => {
							setIframeToggle('http://localhost:5173/meester-hover');
							setIframeSlideToggle(() => !iframeSlideToggle);
						}}
					>
						Click me toggle movie card page
					</button>
					<button
						className="iframe-slide-in__btn"
						onClick={() => {
							setIframeToggle('http://localhost:5173/movie-card');
							setIframeSlideToggle(() => !iframeSlideToggle);
						}}
					>
						Click me toggle hover page
					</button>
					<button
						className="iframe-slide-in__btn"
						onClick={() => setIframeSlideToggle(() => !iframeSlideToggle)}
					>
						Click to slide in and out
					</button>
				</div>
			</div>
			{/* Start Iframe slide */}
			<div
				className={`iframe-slide-in__iframe-wrapper ${
					iframeSlideToggle
						? 'iframe-slide-in__iframe-wrapper--slide-in'
						: ''
				}   `}
			>
				<h2 className="iframe-slide-in__iframe-title">Header iframe</h2>
				<iframe
					src={iframeToggle}
					frameborder="0"
					className="iframe-slide-in__iframe"
				></iframe>
				<a href="" className="iframe-slide-in__iframe-btn">
					click me detail
				</a>
			</div>
		</section>
	);
}
