/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Hero from './components/Hero';
import Onsales from './components/OnSales';
import FlexContent from './components/FlexContent';
import Stories from './components/Stories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

import {
	HERO_API,
	POPULAR_SALES_API,
	TOP_RATE_SALES_API,
	HIGHLIGHT_API,
	SNEAKER_API,
	STORY_API,
	FOOTER_API,
} from './data/data';

function App() {
	return (
		<>
			<Navbar />
			<Cart />
			<main className="flex flex-col gap-16 relative">
				<Hero herodata={HERO_API} />
				<Onsales salesdata={POPULAR_SALES_API} isExists />
				<FlexContent flexcontentdata={HIGHLIGHT_API} isExists />
				<Onsales salesdata={TOP_RATE_SALES_API} />
				<FlexContent flexcontentdata={SNEAKER_API} />
				<Stories storydata={STORY_API} />
			</main>
			<Footer footerdata={FOOTER_API} />
		</>
	);
}

export default App;
