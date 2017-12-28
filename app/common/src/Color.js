// @flow

const Color = {
  // brand colors
  // https://images.kiwi.com/content-media/kiwicom_brand_colours.pdf
  brand: '#0097a9',
  brandSecondary: '#0cb3c7',

  icon: {
    get grey() {
      return Color.grey.$600;
    },
  },

  // complimentary brand colors
  buttercup: '#eb9d08',
  sun: '#fbad18',

  // other colors
  // https://material.io/guidelines/style/color.html#color-color-palette
  red: {
    $100: '#ffcdd2',
    $200: '#ef9a9a',
    $300: '#e57373',
    $400: '#ef5350',
    $500: '#f44336',
    $600: '#e53935',
    $700: '#d32f2f',
    $800: '#c62828',
    $900: '#b71c1c',
  },

  grey: {
    $100: '#f5f5f5',
    $200: '#eeeeee',
    $300: '#e0e0e0',
    $400: '#bdbdbd',
    $500: '#9e9e9e',
    $600: '#757575',
    $700: '#616161',
    $800: '#424242',
    $900: '#212121',
  },
};

export default Color;
