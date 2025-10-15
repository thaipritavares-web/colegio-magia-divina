import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial do Colégio de Magia Divina
        'azul-marinho': '#1B223F',
        'azul-escuro': '#26377F',
        'roxo-medio': '#5A5AA4',
        'lilas-claro': '#C6C0E1',
        'lavanda': '#DDCFE8',
        'lilas-branco': '#ECE0F0',
        // Tons de cinza para texto
        'gray-text': '#575757',
        'gray-medium': '#6B6B6B',
        'gray-light': '#8A8A8A',
      },
      fontFamily: {
        'cerulya': ['Cerulya CF', 'serif'],
        'router': ['Router', 'sans-serif'],
        'router-thin': ['Router', 'sans-serif'],
        'router-light': ['Router', 'sans-serif'],
        'router-bold': ['Router', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'light': '300',
        'normal': '400',
        'bold': '700',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(27, 34, 63, 0.03), 0 4px 8px rgba(27, 34, 63, 0.05), 0 8px 16px rgba(27, 34, 63, 0.07)',
        'card-hover': '0 4px 8px rgba(27, 34, 63, 0.06), 0 8px 16px rgba(27, 34, 63, 0.08), 0 16px 32px rgba(27, 34, 63, 0.12)',
        'card-solid': '0 4px 6px rgba(27, 34, 63, 0.07), 0 10px 20px rgba(27, 34, 63, 0.1)',
        'card-solid-hover': '0 8px 12px rgba(27, 34, 63, 0.1), 0 20px 40px rgba(27, 34, 63, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
