import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0d0f12',
        graphite: '#121419',
        silver: '#c7ccd4',
        indigo: '#5b6dfa',
        sky: '#9fb3ff'
      },
      fontFamily: {
        display: ['var(--font-inter)'],
        body: ['var(--font-inter)']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
