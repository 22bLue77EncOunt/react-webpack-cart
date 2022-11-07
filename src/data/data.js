import heroimg from '../assets/hero.png';

import hightlightimg from '../assets/hightlightimg.png';
import sneakershoe from '../assets/sneaker.png';

import clip from '../assets/video/clip.mp4';
import vcover1 from '../assets/video/vcover1.png';
import vcover2 from '../assets/video/vcover2.png';
import vcover3 from '../assets/video/vcover3.png';

import psale1 from '../assets/nike-air-red.png';
import psale2 from '../assets/nike-adapt-bb.png';
import psale3 from '../assets/nike-adapt-bb-smart.png';

import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png';
import product10 from '../assets/product10.png';
import product11 from '../assets/product11.png';
import product12 from '../assets/product12.png';

import fb from '../assets/facebook.svg';
import ig from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import yt from '../assets/youtube.svg';
import messenger from '../assets/messenger.svg';

const HERO_API = {
	title: '試用電動 Nike',
	subtitle: 'Adapt 2.0 運動鞋',
	img: heroimg,
	btntext: '探索產品',
	videos: [
		{ imgsrc: vcover1, clip, id: 1 },
		{ imgsrc: vcover2, clip, id: 2 },
		{ imgsrc: vcover3, clip, id: 3 },
	],
	sociallinks: [
		{ icon: fb, id: 1 },
		{ icon: messenger, id: 2 },
		{ icon: ig, id: 3 },
		{ icon: twitter, id: 4 },
		{ icon: yt, id: 5 },
	],
};

const POPULAR_SALES_API = {
	title: '熱門銷售',
	items: [
		{
			id: '0p0x1',
			title: 'Nike Adapt BB 2.0',
			text: '男士跑鞋',
			rating: '4.9',
			btn: '立即購買',
			img: psale2,
			price: '200',
			color: 'from-blue-600 to-blue-500',
			shadow: 'shadow-lg shadow-blue-500',
		},
		{
			id: '0p0x2',
			title: 'Nike Martine Rose',
			text: '男士跑鞋',
			rating: '4.5',
			btn: '立即購買',
			img: psale1,
			price: '200',
			color: 'from-red-500 to-rose-500',
			shadow: 'shadow-lg shadow-rose-500',
		},
		{
			id: '0p0x3',
			title: 'Nike Smart Shoe 2.0',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: psale3,
			price: '200',
			color: 'from-violet-500 to-indigo-500',
			shadow: 'shadow-lg shadow-violet-500',
		},
	],
};

const HIGHLIGHT_API = {
	heading: '重點商品',
	title: '無限選擇 NIKE AIR',
	text: '我們的目標是推動世界前進。我們通過建立社區、保護我們的星球和增加體育活動來採取行動。',
	btn: '探索更多',
	url: 'https://www.nike.com/launch/t/nocta-hot-step-black-gold',
	img: hightlightimg,
};

const SNEAKER_API = {
	heading: '精選',
	title: 'NIKE SNEAKERS AIR繫帶鞋',
	text: 'Nike Sneakers Air Lancing Shoes 散發著光芒，這款籃球 OG 為你最熟悉的事物注入了新的活力：耐用的縫合覆蓋層、乾淨的飾面和完美的閃光量，讓你閃耀。',
	btn: '探索更多',
	url: 'https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/',
	img: sneakershoe,
};

const TOP_RATE_SALES_API = {
	title: '最受好評的銷售',
	items: [
		{
			id: '0M0x1',
			title: 'Nike Air Low Premium',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product7,
			price: '150',
			color: 'from-sky-600 to-indigo-600',
			shadow: 'shadow-lg shadow-blue-500',
		},
		{
			id: '0M0x2',
			title: 'Nike Air Force Green',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product2,
			price: '150',
			color: 'from-green-500 to-emerald-500',
			shadow: 'shadow-lg shadow-green-500',
		},
		{
			id: '0M0x3',
			title: 'Nike Addapt BB Rose',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product3,
			price: '150',
			color: 'from-red-500 to-rose-500',
			shadow: 'shadow-lg shadow-rose-500',
		},
		{
			id: '0M0x4',
			title: 'Nike Air Premium',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product4,
			price: '150',
			color: 'from-orange-500 to-amber-500',
			shadow: 'shadow-lg shadow-orange-500',
		},
		{
			id: '0M0x5',
			title: 'Nike Adapt BB Pro',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product5,
			price: '150',
			color: 'from-gray-900 to-yellow-500',
			shadow: 'shadow-lg shadow-yellow-500',
		},
		{
			id: '0M0x6',
			title: 'Air Jordan PR3',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product6,
			price: '150',
			color: 'from-blue-500 to-cyan-500',
			shadow: 'shadow-lg shadow-cyan-500',
		},
		{
			id: '0M0x7',
			title: 'Nike Multi Smart Shoe',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product1,
			price: '150',
			color: 'from-yellow-500 to-yellow-500',
			shadow: 'shadow-lg shadow-yellow-500',
		},
		{
			id: '0M0x8',
			title: 'Nike Jordan Air Max',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product9,
			price: '150',
			color: 'from-[#936550] to-orange-900',
			shadow: 'shadow-lg shadow-orange-800',
		},
		{
			id: '0M0x9',
			title: 'Nike Old Max-x',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product10,
			price: '150',
			color: 'from-indigo-700 to-indigo-700',
			shadow: 'shadow-lg shadow-indigo-500',
		},
		{
			id: '0M0x10',
			title: 'Nike Lime Jordan 11',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product12,
			price: '150',
			color: 'from-green-600 to-lime-500',
			shadow: 'shadow-lg shadow-lime-500',
		},
		{
			id: '0M0x11',
			title: 'Nike Air Black Max',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product11,
			price: '150',
			color: 'from-slate-900 to-black',
			shadow: 'shadow-lg shadow-black',
		},
		{
			id: '0M0x12',
			title: 'Nike Zoom Max',
			text: '男士跑鞋',
			rating: '5+',
			btn: '立即購買',
			img: product8,
			price: '150',
			color: 'from-blue-900 to-blue-500',
			shadow: 'shadow-lg shadow-blue-500',
		},
	],
};

const STORY_API = {
	title: '頭條新聞',
	news: [
		{
			title: '傑森塔圖姆亮相',
			text: '作為過去幾年 Jordan Brands 的標誌性模特，Jayson Tatum 將在本賽季推出 Air Jordan 37，然後可能會與 Jumpman 一起獲得他的第一款標誌性運動鞋，據傳他最近通過他的 Twitter 正在製作這款運動鞋。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1',
			url: 'https://sneakernews.com/2022/09/14/air-jordan-37-low/',
			like: '3/5',
			time: '11 分鐘',
			by: 'Jared Ebanks',
			btn: '閱讀更多',
		},
		{
			title: '兄弟的 Nike Zoom Freak 4',
			text: '即將到來的秋季，即將推出的 Zoom Freak 4 似乎從感恩節中汲取靈感。整個鞋面都使用橙色和棕色這兩種節日的主打元素，為沒有沐浴在灰色陰影中的部分進行修飾。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1',
			time: '41 分鐘',
			like: '5/5',
			url: 'https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/',
			by: 'Michael Le',
			btn: '閱讀更多',
		},
		{
			title: 'Nike Air Max Plus',
			text: '在過去的幾個月裡，Nike Air Max Plus 已經展示了幾種配色。隨著我們正式進入秋季，日曆中又增加了一組，包括新推出的灰色和橙色配色。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1',
			time: '2小時',
			url: 'https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/',
			like: '5/5',
			by: 'Michael Le',
			btn: '閱讀更多',
		},
		{
			title: 'Air Jordan Retro High OG',
			text: 'Air Jordan Retro High OG 流行系列 AJ1s 以流行的拼色搭配原汁原味的 Yellow Toe 風味。音樂家 Zach Myers 透露了這款配色，將近四年後，喬丹狂熱分子終於將他們的鏡頭推出 GR 版本。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg',
			time: '7個月',
			url: 'https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/',
			like: '5/5',
			by: 'Sneaker News',
			btn: '閱讀更多',
		},
		{
			title: 'Nike Air Zoom GT Cut 2',
			text: 'Zoom GT Cut 2 的 Bred 配色將於本週五首次發布，面向 Nike Members Nation World Wide，而 Sabrina Ionescus 配色則定於 10 月 13 日發布。同時，欣賞以下兩種配色的官方圖片。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1',
			time: '1 個月',
			url: 'https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/',
			like: '3/5',
			by: 'Jared Ebanks',
			btn: '閱讀更多',
		},
		{
			title: 'Puma Announces Breanna',
			text: '十多年來，第一次為 WNBA 最優秀、最耀眼的球星之一、奧運金牌得主和西雅圖風暴超級巨星布雷安娜·斯圖爾特製作了標誌性的籃球剪影。 Puma Stewie 1 Quiet Fire 將於本週五發售。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1',
			time: '25 天',
			url: 'https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/',
			like: '3/5',
			by: 'Jared Ebanks',
			btn: '閱讀更多',
		},
		{
			title: 'Nike Air 強調橘色調',
			text: '從鞋帶扣到城市風格的改頭換面，Nike Air Force 1 進行了許多獨特的修改。不過，在這裡，該品牌將事情降低了很多，選擇了一種主要由黑色和激光橙色主導的簡單配色。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1',
			url: 'https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/',
			time: '6天',
			like: '4/5',
			by: 'Micael Le',
			btn: '閱讀更多',
		},
		{
			title: 'Hello Kitty and Adidas',
			text: '三麗鷗的世界是廣闊的，充滿了許多標誌性的人物。然而，在這個家族中，很少有人能與 Hello Kitty 的巨大影響力相媲美，從 Pringles 商品到運動鞋合作，她都扮演了吉祥物。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1',
			url: 'https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/',
			time: '5天',
			like: '4/5',
			by: 'Micael Le',
			btn: '閱讀更多',
		},
		{
			title: 'Air Force 1 Low Expands',
			text: '這裡看到的夜間美學應用於鞋面的翻滾黑色皮革面板和鞋舌的穿孔網眼結構，而皇家飾邊和前掌 Swooshes 為深色調色板提供了額外的吸引力。',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1',
			url: 'https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/',
			time: '5天',
			like: '4/5',
			by: 'Micael Le',
			btn: '閱讀更多',
		},
	],
};

const FOOTER_API = {
	titles: [{ title: '關於 Nike' }, { title: '得到幫助' }, { title: '公司' }],
	links: [
		[
			{ link: '消息' },
			{ link: '職業生涯' },
			{ link: '投資者' },
			{ link: '目的' },
			{ link: '可持續性' },
		],
		[
			{ link: '訂單狀態' },
			{ link: '送貨方式' },
			{ link: '付款方式' },
			{ link: '禮品卡餘額' },
			{ link: '聯繫我們' },
			{ link: '常問問題' },
			{ link: '博客' },
		],
		[
			{ link: '禮品卡' },
			{ link: '促銷活動' },
			{ link: '查找商店' },
			{ link: '註冊' },
			{ link: 'Nike 雜誌' },
			{ link: '向我們發送反饋' },
		],
	],
};

export {
	HERO_API,
	FOOTER_API,
	STORY_API,
	SNEAKER_API,
	HIGHLIGHT_API,
	TOP_RATE_SALES_API,
	POPULAR_SALES_API,
};
