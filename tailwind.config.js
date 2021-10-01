

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-radial-t': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-to-b': 'radial-gradient(30% 100% at 50% 0%, var(--tw-gradient-stops))',
        'gradient-radial-to-tr': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-tl': 'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-br': 'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
        'gradient-radial-to-bl': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
      }),
      colors: {
        gray: {
          850: '#171E28'
        }
      },
      animation: {
      'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  variants: {
    extend: {
      filter: ['hover','focus']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('./tailwind_plugin/column')
  ],
}
