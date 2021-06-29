module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // more settings @ `./assets/styles/index.css`
    colors: {
      background: '#FFFFFF',
      primary: '#11B0C8',
      secondary: '#A9B1BD',
      tableHead: 'rgba(229, 234, 244, 0.25)'
    },
    fontFamily: {
      default: ['Poppins', 'Roboto', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      roboto: ['Roboto'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      gridTemplateColumns: {
        // Simple 24 column grid
        '24': 'repeat(24, minmax(0, 1fr))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
