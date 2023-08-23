/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./public/**/*.html",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/views/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
