/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--c-ink)',
        charcoal: 'var(--c-charcoal)',
        charcoal2: 'var(--c-charcoal2)',
        gold: {
          DEFAULT: '#C9A227',
          light: '#E9CD7A',
          deep: '#8A6A14',
          line: 'rgba(201,162,39,0.35)',
        },
        ivory: 'var(--c-ivory)',
        smoke: 'var(--c-smoke)',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '.28em',
      },
      backgroundImage: {
        'gold-fade': 'linear-gradient(135deg, #E9CD7A 0%, #C9A227 45%, #8A6A14 100%)',
        'grain': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
      },
      boxShadow: {
        gold: '0 0 40px rgba(201,162,39,0.25)',
      },
    },
  },
  plugins: [],
}
