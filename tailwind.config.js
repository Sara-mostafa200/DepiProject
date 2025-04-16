
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        Lalezar:['Lalezar', 'system-ui'],
        inter:['Inter', 'sans-serif']
      },
      colors:{
        mainColor:'rgba(254, 20, 43, 0.75)',
        balckback:"rgba(0, 0, 0, 0.86)",
        SecondColor:'rgba(248, 175, 73, 0.87)',
      },
      backgroundImage:{
        WelcomBack:"url('./src/assets/WelcomeBack1.jpeg')",
        HeroBack:"url('./src/assets/heroback.jpeg')",

      }

    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

