

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      colors:{
        "soft-red":"#ee4c4c"
      },
      fontFamily:{
        "bebas-neue":"Bebas Neue"
      },
      screens: {
        'phone': {'raw': '(width<300px)'},
        // => @media (orientation: portrait) { ... }
      },
    },
  },
  variants: {},
  plugins: [],
}
