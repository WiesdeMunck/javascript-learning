import React from 'react';

export default function MeesterCardV2() {
	return (
		<section key={1} className="">
			<ul className="meester-card-v2">
				{[...Array(4)].map(() => {
					return (
						<li className="meester-card-v2__item">
							<article className="meester-card-v2__article">
								<div className="meester-card-v2__content-wrapper">
									<div className="meester-card-v2__animation-wrapper meester-card-v2__animation-wrapper-text">
										<h3 className="meester-card-v2__title">Title me</h3>
									</div>
									<div className="meester-card-v2__animation-wrapper meester-card-v2__animation-wrapper-text">
										<date className="meester-card-v2__subtitle">
											Subtitle me
										</date>
									</div>
									<ul className="meester-card-v2__tag-list meester-card-v2__animation-wrapper meester-card-v2__animation-wrapper-text">
										<li className="meester-card-v2__tag">Tag me</li>
									</ul>
								</div>

								<figure className="meester-card-v2__img-wrapper meester-card-v2__animation-wrapper">
									<img
										className="meester-card-v2__img"
										src="/img/kitten1.png"
										alt="kitten me"
									/>
								</figure>
								{/* div.meester-card-v2__animation-wrapper */}
								<button className="meester-card-v2__btn">Button me</button>
								<div className='meester-card-v2__title-hover-wrapper' >
								<span className='meester-card-v2__title-hover' > Title me </span>
								</div>
							</article>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
