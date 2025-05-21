
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		fontFamily: {
			sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#002B5B',
					foreground: '#fff',
				},
				secondary: {
					DEFAULT: '#F1F1F1',
					foreground: '#002B5B',
				},
				gold: {
					DEFAULT: '#F7C873',
				},
				grayaccent: '#C8C8C9',
				navy: '#002B5B',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontWeight: {
				semibold: 600,
				bold: 700
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
				  '0%': { opacity: 0, transform: "translateY(24px)" },
				  '100%': { opacity: 1, transform: "translateY(0)" }
				},
				'slide-in': {
					'0%': { opacity: 0, transform: "translateX(-32px)" },
					'100%': { opacity: 1, transform: "translateX(0)" }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease 0s both',
				'slide-in': 'slide-in 0.7s cubic-bezier(0.42,0,0.58,1) 0s both'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
