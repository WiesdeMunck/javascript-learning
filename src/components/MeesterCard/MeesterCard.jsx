import React from 'react';

export default function MeesterCard() {
	return (
		<section key={1} className="grid-item --center-grid-item">
			<ul className="meester-card">
				<li className='meester-card__item'>

					<article className="meester-card__article">
						<div className="meester-card__content-wrapper">
							<h3 className="meester-card__title">Title me</h3>
							<date className="meester-card__subtitle">Subtitle me</date>
							<ul className="meester-card__tag-list">
								<li className="meester-card__tag">tag me</li>
							</ul>
						</div>

						<figure className="meester-card__img-wrapper">
							<img
								className="meester-card__img"
								src="/img/kitten1.png"
								alt="kitten me"
							/>
						</figure>
						<button className="meester-card__btn">button me</button>
					</article>

				</li>
			</ul>
		</section>
	);
}
