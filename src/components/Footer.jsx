import React, { useEffect, useState } from 'react';

function Footer({ footerdata: { titles, links } }) {
	const [Year, setYear] = useState();

	useEffect(() => {
		const getYear = () => setYear(new Date().getFullYear());
		getYear();
	}, []);

	return (
		<footer className="bg-theme pt-7 pb-5">
			<div className="nike-container text-slate-200">
				<div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
					{titles.map((item, index) => (
						<div key={index} className="grid items-center">
							<h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
								{item.title}
							</h1>
						</div>
					))}

					{links.map((list, index) => (
						<ul key={index} className="grid items-center gap-1">
							{list.map((link, index) => (
								<li key={index} className="text-sm sm:text-xs">
									{link.link}
								</li>
							))}
						</ul>
					))}
				</div>
				<div className="mt-5 text-center">
					<p className="text-sm md:text-center">
						版權<sup className="text-base font-bold">&copy;</sup> 所有保留權利{' '}
						<span className="font-semibold"> ben hsieh {Year}</span>
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
