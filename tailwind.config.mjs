/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center:true,
		padding:"1rem",
	},
	screens:{
		sm:'640px',
		md:'768px',
		lg:'960px',
		xl:'1200px',
	},
	fontFamily:{
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
  			background: '#8F1D07',
  			foreground: 'var(--foreground)',
			accent:{
				DEFAULT:"#997D0E",
				hover:"#8F1D07"
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};