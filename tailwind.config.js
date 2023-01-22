/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{jsx,tsx}",
        "./component/**/*.{jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
}
