/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'regal-blue': '#243c5a',
                'regal-blue-light': '#3b4b71',
                'regal-blue-dark': '#1e2a4d',
                'regal-blue-darkest': '#0f172a',
                

                'regal-blue-lightest': '#f0f4ff',
                'regal-sky': '#B3EBF2',
                'regal-sky-light': '#E3F9FF',
                'regal-sky-dark': '#A7D3E0',
                'regal-sky-darkest': '#E0F2FE',
                'regal-green': '#A7F3D0',
            },
        },
    },
    plugins: [],
}
