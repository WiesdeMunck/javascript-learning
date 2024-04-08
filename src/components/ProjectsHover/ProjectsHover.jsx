import React from 'react';

export default function ProjectsHover() {


	return (
		<section key={1} className="grid-item --center-grid-item ">

			<ul className='projects-hover'>
				<li className="projects-hover__item">
					<article className="projects-hover__article">
						<div className='projects-hover__titles-wrapper'>
							<h2 className="article projects-hover__item-title">title h2</h2>
						</div>
						<div className='projects-hover__titles-wrapper'>
							<span className="article projects-hover__item-subtitle">subtitle me span</span>
						</div>

						<figure className="projects-hover__item-img-wrapper">
							<img src="/img/kitten1.png" alt="kitten me" className="article projects-hover__item-img" />
							<div className="projects-hover__img-titles-container">
								<div className='projects-hover__img-titles-wrapper'>
									<span className="projects-hover__item-img-title">title h2</span>
								</div>
								<div className='projects-hover__img-titles-wrapper'>
									<span className="projects-hover__item-img-subtitle">subtitle me span</span>
								</div>
							</div>
						</figure>

					</article>
				</li>
			</ul>

		</section>
	);
}
