/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'password_visible': "url('../images/visible_password.svg')",
        'password_hidden': "url('/src/images/hidden_password.svg')"
      }
    },
  },
  plugins: [],
}