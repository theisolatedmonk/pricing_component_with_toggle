import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{Montserrat :['Montserrat', 'sans-serif']}, 
      backgroundImage: {
        'linear-gradient': 'linear-gradient(to bottom right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
        'whiteImage':'linear-gradient(to bottom right,hsl(240, 78%, 98%), hsl(240, 78%, 98%))',
        
      },
      colors:{
        veryLightGray: "hsl(240, 78%, 98%)",
    lightGray: "hsl(234, 14%, 74%)",
    grayish: "hsl(233, 13%, 49%)",
    darkGray: "hsl(232, 13%, 33%)",
    lightblue:"hsl(236, 72%, 79%)",
    darkblue:"hsl(237,63%,64%)",
      }
    },
  },
 
  plugins: [],
}
export default config
