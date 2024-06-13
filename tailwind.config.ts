import type { Config } from 'tailwindcss';

export default {
    prefix: 'tds-',
    content: [
        './index.html',
        './lib/**/*.{vue,js,ts,jsx,tsx}',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
} satisfies Config;
 