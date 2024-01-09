/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1/7': '14.2857143%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'mun-burgundy': '#832633',
        'mun-grey': '#63666A',
        'mun-gold': "#EAAB00"
      },
      fontFamily:{
				ops: ['BlackOpsOne-Regular', 'opentype'],
        gold: ['Goldman-Regular', 'opentype'],
        gold_bold: ['Goldman-Bold', 'opentype'],
        maven: ['MavenPro-Regular', 'opentype'],
        maven_medium: ['MavenPro-Medium', 'opentype'],
        norwester: ['Norwester', 'opentype']
      }
    },
  },
  plugins: [],
}
