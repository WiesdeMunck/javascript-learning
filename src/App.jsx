
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import GsapAnimation from './components/GsapAnimation/GsapAnimation';
import AosAnimation from './components/AosAnimation/AosAnimation';
import SvgAnimation from './components/SvgAnimation/SvgAnimation';
import SwiperAnimation from './components/SwiperAnimation/SwiperAnimation';
import NumberOne from './components/NumberOne';




function App() {

	return (
		<Router>
		<Navigation />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/gsap-animation" element={<GsapAnimation />} />
					<Route path="/aos-animation" element={<AosAnimation />} />
					<Route path="/svg-animation" element={<SvgAnimation />} />
					<Route path="/swiper-animation" element={<SwiperAnimation/>} />
					<Route path="/zero-point" element={<NumberOne />} />
				</Routes>
				<Analytics />
				<SpeedInsights />
		</Router>
	);
}

export default App;
