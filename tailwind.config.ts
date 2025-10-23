import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul-marinho': '#1B223F',
        'azul-escuro': '#26377F',
        'roxo-medio': '#5A5AA4',
        'lilas-claro': '#C6C0E1',
        'lavanda': '#DDCFE8',
        'lilas-quase-branco': '#ECE0F0',
        'gray-text': '#4A5568',
        'gray-medium': '#718096',
      },
      fontFamily: {
        'kaushian': ['Kaushan Script', 'cursive'],
        'router': ['Router', 'sans-serif'],
        'router-thin': ['Router Thin', 'sans-serif'],
        'router-bold': ['Router Bold', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'card-solid': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-solid-hover': '0 8px 20px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        'xs': '320px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1440px',
      },
    },
  },
  plugins: [],
}

export default config


