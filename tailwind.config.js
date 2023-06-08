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
				HomeDesktop: "url('/assets/home/background-home-desktop.jpg')",
				HomeTablet: "url('/assets/home/background-home-tablet.jpg')",
				HomeMobile: "url('/assets/home/background-home-mobile.jpg')",
				DesinationDesktop:
					"url('/assets/destination/background-destination-desktop.jpg')",
				DesinationTablet: "url('/assets/destination/background-destination-tablet.jpg')",
				DesinationMobile: "url('/assets/destination/background-destination-mobile.jpg')",
				CrewDesktop: "url('/assets/crew/background-crew-desktop.jpg')",
				CrewTablet: "url('/assets/crew/background-crew-tablet.jpg')",
				CrewMobile: "url('/assets/crew/background-crew-mobile.jpg')",
				TechnologyDesktop: "url('/assets/technology/background-technology-desktop.jpg')",
				TechnologyTablet: "url('/assets/technology/background-technology-tablet.jpg')",
				TechnologyMobile: "url('/assets/technology/background-technology-mobile.jpg')",
			},
		},
	},
	plugins: [],
};
