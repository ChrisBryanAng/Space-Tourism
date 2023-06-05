/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'space-primary': '#0B0D17',
				'space-secondary': '#D0D6F9',
				'space-white': '#ffffff',
			},
			fontFamily: {
				Bellefair: ['Bellefair', 'serif'],
				Barlow: ['Barlow Condensed', 'sans-serif'],
			},
			backgroundImage: {
				HomeDesktop: "url('/src/assets/home/background-home-desktop.jpg')",
				HomeTablet: "url('/src/assets/home/background-home-tablet.jpg')",
				HomeMobile: "url('/src/assets/home/background-home-mobile.jpg')",
			},
		},
	},
	plugins: [],
};
