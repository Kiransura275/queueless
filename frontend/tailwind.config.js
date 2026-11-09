/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // SARAL dark SaaS palette
        paper:    '#101418', // page / surface background
        cream:    '#1B2228', // card / elevated surface
        ink:      '#E6ECEB', // primary text
        graphite: '#9AA7A5', // secondary text
        ash:      '#6B7B79', // muted text
        rule:     '#2A333A', // subtle dark grey borders
        accent:   '#53C7B0', // primary accent (teal)
        'accent-deep': '#3E9E8A', // accent hover state
        success:  '#4ADE80',
        warn:     '#FBBF24',
      },
      fontFamily: {
        // Inter body/display — clean, elegant, minimalist SaaS typography.
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      fontSize: {
        // The token number is the hero. Make it enormous on mobile too.
        'token': ['9rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'token-lg': ['14rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-5px)' },
          '80%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
};
