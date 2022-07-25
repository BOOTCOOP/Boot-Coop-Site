module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff6ff",
         "100": "#dbeafe",
         "200": "#bfdbfe",
         "300": "#93c5fd",
         "400": "#60a5fa",
         "500": "#3b82f6",
         "600": "#2563eb",
         "700": "#051d40",
         "800": "#1e40af",
         "900": "#1e3a8a" 
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
