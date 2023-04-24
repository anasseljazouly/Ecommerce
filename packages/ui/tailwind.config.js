const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        /* primary | #E56D0A */
        primary: {
          50: "#fbe9da",
          100: "#fae2ce",
          200: "#f9dbc2",
          300: "#f5c59d",
          400: "#ed9954",
          500: "#E56D0A",
          600: "#ce6209",
          700: "#ac5208",
          800: "#894106",
          900: "#703505",
        },
        /* secondary | #3C3F43 */
        secondary: {
          50: "#e2e2e3",
          100: "#d8d9d9",
          200: "#cecfd0",
          300: "#b1b2b4",
          400: "#77797b",
          500: "#3C3F43",
          600: "#36393c",
          700: "#2d2f32",
          800: "#242628",
          900: "#1d1f21",
        },
        /* tertiary | #CDB7A5 */
        tertiary: {
          50: "#f8f4f2",
          100: "#f5f1ed",
          200: "#f3ede9",
          300: "#ebe2db",
          400: "#dccdc0",
          500: "#CDB7A5",
          600: "#b9a595",
          700: "#9a897c",
          800: "#7b6e63",
          900: "#645a51",
        },
        /* success | #5CB85C */
        success: {
          50: "#e7f4e7",
          100: "#def1de",
          200: "#d6edd6",
          300: "#bee3be",
          400: "#8dcd8d",
          500: "#5CB85C",
          600: "#53a653",
          700: "#458a45",
          800: "#376e37",
          900: "#2d5a2d",
        },
        /* warning | #F0AD4E */
        warning: {
          50: "#fdf3e4",
          100: "#fcefdc",
          200: "#fbebd3",
          300: "#f9deb8",
          400: "#f5c683",
          500: "#F0AD4E",
          600: "#d89c46",
          700: "#b4823b",
          800: "#90682f",
          900: "#765526",
        },
        /* error | #D9534F */
        error: {
          50: "#f9e5e5",
          100: "#f7dddc",
          200: "#f6d4d3",
          300: "#f0bab9",
          400: "#e48784",
          500: "#D9534F",
          600: "#c34b47",
          700: "#a33e3b",
          800: "#82322f",
          900: "#6a2927",
        },
        /* surface | #25272A */
        surface: {
          50: "#dedfdf",
          100: "#d3d4d4",
          200: "#c9c9ca",
          300: "#a8a9aa",
          400: "#66686a",
          500: "#25272A",
          600: "#212326",
          700: "#1c1d20",
          800: "#161719",
          900: "#121315",
        },
      },
    },
  },
};
