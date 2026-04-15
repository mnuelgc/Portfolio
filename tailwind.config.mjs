import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				display: ["Bricolage Grotesque", "Impact", "sans-serif"],
				sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
				mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular"],
			},
			colors: {
				brand: {
					ink: "#030407",
					coal: "#05060a",
					navy: "#0a1120",
					blue: "#3f7fff",
					red: "#ef3340",
					cloud: "#f5f7fb",
					mist: "#93a7c6",
					amber: "#ffb347",
				},
			},
			boxShadow: {
				soft: "0 25px 60px rgba(8, 11, 18, 0.45)",
				glow: "0 10px 40px rgba(45, 104, 255, 0.35)",
			},
			keyframes: {
				"float-slow": {
					"0%": { transform: "translate3d(0, 0, 0)" },
					"50%": { transform: "translate3d(0, -10px, 0)" },
					"100%": { transform: "translate3d(0, 0, 0)" },
				},
				"marquee": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
			animation: {
				float: "float-slow 6s ease-in-out infinite",
				marquee: "marquee 18s linear infinite",
			},
		},
	},
	plugins: [typography],
};
