const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['**/*.ts', '**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'serif'],
      },
      borderRadius: {
        50: '50%',
      },
      scale: {
        25: '.25',
      },
      inset: {
        92: '23rem',
      },
    },
  },
  variants: {
    backgroundColor: ['checked'],
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      // extend `checked` variant with [aria-checked="true"] selector
      addVariant('checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const selector = `.${e(`checked${separator}${className}`)}`;
          return `${selector}[aria-checked="true"], ${selector}:checked`;
        });
      });
    }),
  ],
};
