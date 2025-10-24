import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ================================================================
         CORES - PALETA OFICIAL (Checkpoint #10)
         ================================================================ */
      colors: {
        'azul-marinho': '#1B223F',       // H1, Footer, textos fortes
        'azul-escuro': '#26377F',        // H2, Links, Menu
        'roxo-medio': '#5A5AA4',         // Botões CTA, Hover
        'lilas-claro': '#C6C0E1',        // Bordas, Detalhes
        'lavanda': '#DDCFE8',            // Fundos de Cards
        'lilas-quase-branco': '#ECE0F0', // Fundos Suaves, Headers (NOMENCLATURA CORRETA)
        'gray-text': '#4A5568',          // Texto Corpo Principal
        'gray-medium': '#718096',        // Texto Secundário
      },

      /* ================================================================
         FONTES - FAMÍLIA ÚNICA (Checkpoint #10)
         ================================================================ */
      fontFamily: {
        'kaushian': ['Kaushan Script', 'cursive'], // Apenas título home
        'router': ['Router', 'sans-serif'],        // APENAS UMA família Router
        // ❌ REMOVIDO: 'router-thin' e 'router-bold' (usar weights no CSS)
      },

      /* ================================================================
         SISTEMA DE SOMBRAS PADRONIZADO (Checkpoint #8)
         Baseado em azul-marinho (#1B223F)
         ================================================================ */
      boxShadow: {
        // Cards
        'card': '0 2px 8px rgba(27, 34, 63, 0.08)',
        'card-hover': '0 8px 16px rgba(27, 34, 63, 0.12)',
        
        // Botões
        'button': '0 2px 4px rgba(27, 34, 63, 0.10)',
        'button-hover': '0 4px 8px rgba(27, 34, 63, 0.15)',
        
        // Modais e Dropdowns
        'modal': '0 20px 40px rgba(27, 34, 63, 0.20)',
        
        // Legado (mantido para compatibilidade)
        'card-solid': '0 4px 12px rgba(27, 34, 63, 0.15)',
        'card-solid-hover': '0 8px 20px rgba(27, 34, 63, 0.20)',
      },

      /* ================================================================
         BREAKPOINTS CUSTOMIZADOS
         ================================================================ */
      screens: {
        'xs': '320px',   // Mobile pequeno
        'sm': '768px',   // Tablet
        'md': '1024px',  // Desktop pequeno
        'lg': '1440px',  // Desktop grande
      },
    },
  },
  plugins: [],
}

export default config

/* ================================================================
   OBSERVAÇÕES - CHECKPOINT #10
   ================================================================
   
   1. fontFamily simplificado:
      - Apenas 'kaushian' e 'router'
      - Weights controlados via CSS (@font-face)
      - Classes customizadas: .font-router-thin, .font-router-medium, .font-router-bold
   
   2. Cores validadas:
      - 'lilas-quase-branco' (nomenclatura correta)
      - 'gray-text' para textos (#4A5568)
   
   3. Sistema de sombras:
      - Baseado em azul-marinho (27, 34, 63)
      - Opacidades padronizadas: 0.08, 0.10, 0.12, 0.15, 0.20
   
   4. Para usar as fontes com weights corretos:
      - H1/H2: className="font-router-thin" (300)
      - H3: className="font-router-bold" (700)
      - Texto: className="font-router" (400 - padrão)
   
   ================================================================ */
