import React, { useState } from 'react';

export default function MovieCard() {
	const [seats, setSeats] = useState(0);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);

	return (
		<section key={1} className="grid-item --center-grid-item ">
			<div className="movie-card">
				{/* Section 1 */}
				<div className="movie-card__img-wrapper">
					<svg
						className="movie-card__img-svg-arrow"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
					</svg>
					<img className="movie-card__img" src="/img/kitten1.png" alt="" />
					<div className="movie-card__img-content-wrapper">
						<h3 className="movie-card__img-title">Lorem, ipsum.</h3>
						<span className="movie-card__img-subtitle">
							<svg
								className="movie-card__img-svg-location"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
							>
								<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
							</svg>
							Lorem, ipsum dolor.
						</span>
					</div>
				</div>
				{/* Section 2 */}
				<div className="movie-card__content-wrapper">
					<div></div>

					{[...Array(7)].map((rowA, rowIndex) => {
						return (
							<div key={rowIndex} className="movie-card__content-bench-row">
								{/* These are the collumns */}
								{[...Array(2)].map((collumnA, collumnIndex) => {
									return (
										<div key={collumnIndex} className="movie-card__content-bench-collumn">
											{/* There are the ammount of benches in each collumn */}
											{[...Array(4)].map((benchA, benchIndex) => {
												return (
													<svg
														key={benchIndex}
														onClick={() => {
															// on click add active class to the clicked seat
															const clickedSeat =
																document.getElementById(
																	`movie-card__${rowIndex}-${collumnIndex}-${benchIndex}`
																);
															const clickedSeatId = `movie-card__${rowIndex}-${collumnIndex}-${benchIndex}`;
															clickedSeat.classList.toggle(
																'movie-card__content-bench-active'
															);
															if (
																clickedSeat.classList.contains(
																	'movie-card__content-bench-active'
																)
															) {
																setSelectedSeatsCount(
																	(prevSelectedSeatsCount) =>
																		prevSelectedSeatsCount + 1
																);
																setSelectedSeats(
																	(prevSetSelectedSeats) => [
																		...prevSetSelectedSeats,
																		clickedSeatId,
																	]
																);
															} else {
																setSelectedSeatsCount(
																	(prevSelectedSeatsCount) =>
																		prevSelectedSeatsCount - 1
																);
																// remove the seat from the selected seats array by checking the id
																setSelectedSeats(
																	(prevSetSelectedSeats) =>
																		prevSetSelectedSeats.filter(
																			(item) =>
																				item !==
																				clickedSeatId
																		)
																);
															}
														}}
														id={`movie-card__${rowIndex}-${collumnIndex}-${benchIndex}`}
														className="movie-card__content-bench-item"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 640 512"
													>
														<path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
													</svg>
												);
											})}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>

				{/* Section 3 */}
				<div className="movie-card__cta-wrapper"></div>
			</div>
			<button
					onClick={() => {
						console.log('selected seats ', selectedSeats);
						console.log('selected seats count ', selectedSeatsCount);
					}}
				>
					Log data
				</button>
		</section>
	);
}