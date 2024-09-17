/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js',
    ],
    darkMode: 'class',
    theme: {
        colors: {
            primary: '#17202A',
            secondary: '#ecc94b',
            transparent: 'transparent',
            current: 'currentColor',
            slate: colors.slate,
            stone: colors.stone,
            blue: colors.blue,
            green: colors.green,
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
        extend: {
            translate: ['dark'],
            animation: {
                'skew-scroll': 'skew-scroll 20s linear infinite',
            },
            fontFamily: {
                intervariable: ['InterVariable', 'Inter'],
            },
            fontFamily: {
                cascadiacode: ['Cascadia Code', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        keyframes: {
            'skew-scroll': {
                '0%': {
                    transform:
                        'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
                },
                '100%': {
                    transform:
                        'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
                },
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
