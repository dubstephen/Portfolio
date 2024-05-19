import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|modal|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        'big-stone': '#122439',
        'bismark': '#5F97A7',
        'black-pearl': '#08192E',
        'blue-Dianne': '#244B56',
        'blue-Zodiac': '#102F54',
        'cadet-blue': '#B9C5D4',
        'flord': '#607187',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
