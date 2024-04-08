import React from 'react';

export default function ProjectsHover() {


	return (
		<section key={1} className=" ">

			<ul className='projects-hover'>
				{[...Array(6)].map((_, i) => (
					<li className="projects-hover__item">
						<div className="one"></div>
						<div className="one"></div>
						<article className="projects-hover__article">
							<div className='projects-hover__titles-wrapper'>
								<h2 className="article projects-hover__item-title">title me</h2>
							</div>
							<div className='projects-hover__titles-wrapper'>
								<span className="article projects-hover__item-subtitle">subtitle me</span>
							</div>

							<figure className="projects-hover__item-img-wrapper">
								<img src="/img/kitten1.png" alt="kitten me" className="article projects-hover__item-img" />
								<div className="projects-hover__img-titles-container">
									<div className='projects-hover__img-titles-wrapper'>
										<span className="projects-hover__item-img-title">title me</span>
									</div>
								</div>
							</figure>

						</article>
					</li>
				))}
			</ul>

		</section>
	);
}
