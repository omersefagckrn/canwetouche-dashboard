/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#000000',
				green: '#23c6b0'
			},
			fontFamily: {
				SFPro: ['SF Pro Display', 'sans-serif']
			}
		}
	},
	plugins: []
};
