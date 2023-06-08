/// <reference types="vite/client" />
declare module '*';

interface IDestinations {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	description: string;
	distance: string;
	travel: string;
}
[];

interface ICrews {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	role: string;
	bio: string;
}
[];

interface ITechnologies {
	name: string;
	images: {
		portrait: string;
		landscape: string;
	};
	description: string;
}
[];

interface IDestination {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	description: string;
	distance: string;
	travel: string;
}

interface ICrew {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	role: string;
	bio: string;
}

interface ITechnology {
	name: string;
	images: {
		portrait: string;
		landscape: string;
	};
	description: string;
}
