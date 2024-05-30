import {nextui} from '@nextui-org/theme';
import { before } from 'node:test';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|modal|ripple|spinner).js"
  ],
  theme: {
    fontFamily: {
      'mono': ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'monospace'],
    },
    extend: {
      animation: {
        typing: 'typing 0.5s steps(30), blink 1s infinite',
        typing2: 'typing2 3s steps(50)',
        fadeIn1: 'fadeIn1 2s ease-in-out',
        fadeIn2: 'fadeIn2 2s ease-in-out',
        fadeIn3: 'fadeIn3 3s ease-in-out',
        fadeIn4: 'fadeIn4 3s ease-in-out',
        buttonFadeIn: 'buttonFadeIn 2s ease-in-out',
        buttonXFadeIn: 'buttonXFadeIn 2s ease-in-out forwards',
        borderXFadeIn: 'borderXFadeIn 3s ease-in-out forwards',
        borderXFadeIn1: 'borderXFadeIn1 2s ease-in-out forwards',
        buttonYFadeIn: 'buttonYFadeIn 2s ease-in-out forwards',
        borderYFadeIn1: 'borderYFadeIn1 2s ease-in-out forwards',
        borderYFadeIn2: 'borderYFadeIn2 2s ease-in-out forwards'
      },
      keyframes: theme => ({
        fadeIn1: {
          '0%': { color: 'transparent' },
          '20%': { color: 'transparent' },
          '100%': { color: 'flord' },
        },
        fadeIn2: {
          '0%': { color: 'transparent' },
          '40%': { color: 'transparent' },
          '100%': { color: 'flord' },
        },
        fadeIn3: {
          '0%': { color: 'transparent' },
          '60%': { color: 'transparent' },
          '100%': { color: 'flord' },
        },
        fadeIn4: {
          '0%': { color: 'transparent' },
          '75%': { color: 'transparent' },
          '100%': { color: 'flord' },
        },
        buttonFadeIn: {
          '0%': { color: 'transparent', borderWidth: '0' },
          '75%': { color: 'transparent', borderWidth: '0' },
          '100%': { color: 'flord', borderWidth: '1' },
        },
        buttonXFadeIn: {
          '0%': { width: '0' },
          '65%': { width: '0' },
          '100%': { width: '100%' },
        },
        borderXFadeIn: {
          '0%': { width: '0' },
          '65%': { width: '0' },
          '100%': { width: '100%' },
        },
        borderXFadeIn1: {
          '0%': { width: '0' },
          '65%': { width: '0' },
          '100%': { width: '59.5%' },
        },
        buttonYFadeIn: {
          '0%': { height: '0' },
          '65%': { height: '0' },
          '100%': { height: '100%' },
        },
        borderYFadeIn1: {
          '0%': { height: '0' },
          '65%': { height: '0' },
          '100%': { height: '9.3rem' },
        },
        borderYFadeIn2: {
          '0%': { height: '0' },
          '65%': { height: '0' },
          '100%': { height: '68rem' },
          // '100%': { height: '6rem' },
        },
        typing: {
          from: {
            width: '0'
          },
          to: {
            width: '20ch'
          },
        },
        typing2: {
          '0%': { width: '0', color: 'transparent' },
          '50%': { width: '0', color: 'transparent' },
          '100%': { width: '40ch' },
        },
        blink: {
          from: {
            'background-color': 'transparent'
          },
          to: {
            'backgroun-color': 'bismark'
          },
        },
      }),
      colors: {
        'big-stone': '#0a192f',
        'small-stone': '#1C375E',
        'bismark': '#64ffda',
        'other-blue': '#77BAAA',
        'black-pearl': '#08192E',
        'blue-Dianne': '#244B56',
        'blue-Zodiac': '#112240',
        'cadet-blue': '#B9C5D4',
        'flord': '#8892b0',
        'some-red': '#840000'
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
