import React from 'react';
import Item from './Item';
import Title from './Title';

function OnSales({ isExists, salesdata: { title, items } }) {
	return (
		<div className="nike-container">
			<Title title={title} />
			<div
				className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
					isExists
						? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
						: 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
				}`}
			>
				{items?.map((item, index) => (
					<Item {...item} key={item.id} isExists={isExists} />
				))}
			</div>
		</div>
	);
}

export default OnSales;
