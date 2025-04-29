/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Dark Mode Colors */
        'background-dark': 'var(--background-color)',
        'background-dark2': 'var(--background-color2)',
        'background-dark3': 'var(--background-color3)',
        'typer-dark': 'var(--typer-text)',
        'text-dark': 'var(--text-color)',
        'text-dark2': 'var(--text-color2)',
        'button-dark': 'var(--button-color)',
        'button-dark-hover': 'var(--button-color-hover)',
        'button-dark2': 'var(--button-color2)',
        'button-dark2-hover': 'var(--button-color2-hover)',
        'button-dark3': 'var(--button-color3)',
        'button-dark3-hover': 'var(--button-color3-hover)',
        'skill-dark-border': 'var(--skill-border)',
        'input-dark-focus': 'var(--input-focus)',
        
        /* Light Mode Colors */
        'background-light': 'var(--background-light)',
        'background-light2': 'var(--background-light2)',
        'background-light3': 'var(--background-light3)',
        'typer-light': 'var(--typer-text-light)',
        'text-light': 'var(--text-light)',
        'text-light2': 'var(--text-light2)',
        'button-light': 'var(--button-light)',
        'button-light-hover': 'var(--button-light-hover)',
        'button-light2': 'var(--button-light2)',
        'button-light2-hover': 'var(--button-light2-hover)',
        'button-light3': 'var(--button-light3)',
        'button-light3-hover': 'var(--button-light3-hover)',
        'skill-light-border': 'var(--skill-border-light)',
        'input-light-focus': 'var(--input-focus-light)',
      },
    },
  },
  plugins: [],
}
