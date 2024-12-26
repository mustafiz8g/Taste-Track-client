/** @type {import('tailwindcss').Config} */
export default {
 
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  
  theme: {
    extend: {
      backgroundImage:{
        banner :"url('/src/assets/banner2.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary1: "#38c93b",
          secondary: "#FFC107",
          accent: "#ffffff",
          neutral: "#333333",
          "base-100": "#FFFFFF",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          error: "#F44336",
        },
      },
      {
        darktheme: {
          primary1: "#c93862",
          secondary: "#32E0C4",
          accent: "#cae2e3",
          neutral: "#222831",
          "base-100": "#000000",
          info: "#00ADB5",
          success: "#21BF73",
          warning: "#F4D03F",
          error: "#E94560",
        },
      },
      "light", // Default light theme
      "dark", // Default dark theme
    ],
  },
  
}

