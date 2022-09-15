/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      additionalColor: "var(--additional-color)",
      gradientColor: "var(--gradient-color)",

      darkBlue: "var(--dark-blue",
      middleBlue: "var(--middle-blue)",
      lightBlue: "var(--light-blue)",
      darkGreen: "var(--dark-green)",
      green: "var(--green)",
      yellow: "var(--yellow)",
      orange: "var(--orange)",
      red: "var(--red)",
    },
    fontSize: {
      headlineOne: "var(--headline-1)",
      headlineTwo: "var(--headline-2)",
      headlineThree: "var(--headline-3)",
      headlineFour: "var(--headline-4)",
      headlineFive: "var(--headline-5)",
      headlineSix: "var(--headline-6)",
    }
  },
  plugins: [],
}
