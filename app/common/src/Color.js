// @flow

/**
 * @see https://material.io/guidelines/style/color.html#color-color-palette
 */
const ColorPalette = {
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

  green: {
    $100: '#c8e6c9',
    $200: '#a5d6a7',
    $300: '#81c784',
    $400: '#66bb6a',
    $500: '#4caf50',
    $600: '#43a047',
    $700: '#388e3c',
    $800: '#2e7d32',
    $900: '#1b5e20',
  },

  orange: {
    $100: '#ffe0b2',
    $200: '#ffcc80',
    $300: '#ffb74d',
    $400: '#ffa726',
    $500: '#ff9800',
    $600: '#fb8c00',
    $700: '#f57c00',
    $800: '#ef6c00',
    $900: '#e65100',
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

export default {
  // brand colors
  // https://images.kiwi.com/content-media/kiwicom_brand_colours.pdf
  brand: '#0097a9',
  brandSecondary: '#0cb3c7',

  // complimentary brand colors
  buttercup: '#eb9d08',
  sun: '#fbad18',

  // FIXME: this should be part of the Icon component
  icon: {
    grey: ColorPalette.grey.$600,
  },

  ...ColorPalette,
};
