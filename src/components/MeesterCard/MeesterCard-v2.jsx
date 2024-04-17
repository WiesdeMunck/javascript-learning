import React from 'react';

export default function MeesterCardV2() {
	return (
		<section key={1} className="grid-item">
			<ul className="meester-card">
				{[...Array(4)].map(() => {
					return (
						<li className="meester-card__item">
							<article className="meester-card__article">
								<div className="meester-card__content-wrapper">
									<div className="meester-card__animation-wrapper meester-card__animation-wrapper-text">
										<h3 className="meester-card__title">Title me</h3>
									</div>
									<div className="meester-card__animation-wrapper meester-card__animation-wrapper-text">
										<date className="meester-card__subtitle">
											Subtitle me
										</date>
									</div>
									<ul className="meester-card__tag-list meester-card__animation-wrapper meester-card__animation-wrapper-text">
										<li className="meester-card__tag">Tag me</li>
									</ul>
								</div>

								<figure className="meester-card__img-wrapper meester-card__animation-wrapper">
									<img
										className="meester-card__img"
										src="/img/kitten1.png"
										alt="kitten me"
									/>
								</figure>
								{/* div.meester-card__animation-wrapper */}
								<button className="meester-card__btn">Button me</button>
								<div className='meester-card__title-hover-wrapper' >
								<span className='meester-card__title-hover' > Title me </span>
								</div>
							</article>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
