/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      container: {
        padding: '2rem',
      },
      fontFamily: {
        'lato': ['Lato'],
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        // 'display': ['Oswald'],
        // 'body': ['"Open Sans"'],
      }
    },
    plugins: [],
  }
  