import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function SwiperAnimation() {
	return (
		<section className="grid-item ">
			<Swiper
				className="swiper-animation"
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
					// when window width is >= 640px
					900: {
					  slidesPerView: 2,
					  spaceBetween: 20,
					},
				 }}
			>
				<SwiperSlide className="swiper-animation__content-wrapper">
					<a href="/">
						{' '}
						<h2 className="swiper-animation__title">kitten 1</h2>
						<div className="swiper-animation__img-wrapper">
							{' '}
							<img
								className="swiper-animation__img"
								src="/img/kitten1.png"
								alt="A cute kitten"
							/>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide className="swiper-animation__content-wrapper">
					<h2 className="swiper-animation__title">kitten 2</h2>
					<div className="swiper-animation__img-wrapper">
						{' '}
						<img
							className="swiper-animation__img"
							src="/img/kitten2.png"
							alt="A cute kitten"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper-animation__content-wrapper">
					<h2 className="swiper-animation__title">kitten 3</h2>
					<div className="swiper-animation__img-wrapper">
						{' '}
						<img
							className="swiper-animation__img"
							src="/img/kitten3.png"
							alt="A cute kitten"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper-animation__content-wrapper">
					<h2 className="swiper-animation__title">kitten 4</h2>
					<div className="swiper-animation__img-wrapper">
						{' '}
						<img
							className="swiper-animation__img"
							src="/img/kitten4.png"
							alt="A cute kitten"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper-animation__content-wrapper">
					<h2 className="swiper-animation__title">kitten 5</h2>
					<div className="swiper-animation__img-wrapper">
						{' '}
						<img
							className="swiper-animation__img"
							src="/img/kitten5.png"
							alt="A cute kitten"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
