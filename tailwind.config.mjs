/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2A47',
        slate2: '#1F3A5F',
        ink: '#111827',
        muted: '#5B6472',
        line: '#E6E9EF',
        paper: '#FFFFFF',
        mist: '#F6F8FB',
        accent: '#B4652C', // restrained copper
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: { content: '72rem' },
      letterSpacing: { tightish: '-0.01em' },
    },
  },
  plugins: [],
};
