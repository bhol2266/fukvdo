module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // Set to 'media' or 'class' if needed

  theme: {
    extend: {
      backgroundImage: {
        login: "url('/login/banner2.png')",
        banner_wide: "url('/homepageImages/banner-wide.png')",
      },
      aspectRatio: {
        'custom': '16 / 11',
      },
      animation: {
        fade: 'fadeIn 1s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      screens: {
        'sm': '500px',
        'md': '750px',
        'lg': '1000px',
        'xl': '1300px',
        '2xl': '1600px',
        '3xl': '2000px',
        '4xl': '2400px',
      },
      colors: {
        'github': '#24292F',
        'color': '#414a4c',
        'theme': '#13274F',
        'button': '#6C6C6C ',
        'button_hover': '#8C8C8C',
        'semiblack': '#28282B',
        'theme_red': 'rgb(226, 98, 100)',
                'theme_yellow': '#E4D00A',


      },
      fontFamily: {
        'body': ['Pushster'],
        'footer': ['Inter'],
        'theme': ['Poppins'],
        'arial': ['Arial'],
        'manrope': ['Manrope'],
        'delius': ['Delius Unicase'],
        'inter': ['Inter'],
        'poppins': ['Poppins'],
        'DMsans': ['DM Sans'],
        'opensans': ['Open Sans'],
        'SFuiDisplay': ['SF UI Display'],
        'abhayalibre': ['Abhaya Libre'],
        'dancing': ['Dancing Script'],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('tailwind-scrollbar-hide'),
    // Add other plugins as needed
  ],
};
