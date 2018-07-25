// @flow strict

const ColorPalette = {
  black: '#000000',
  white: '#ffffff',

  product: {
    normal: '#00a991',
    dark: '#007362',
    light: '#9cdad3',
  },

  ink: {
    normal: '#46515e',
    dark: '#171b1e',
    light: '#7f91a8',
    lighter: '#bac7d5',
  },

  // FIXME: remove (or modify)
  grey: {
    $50: '#fafafa',
    $200: '#eeeeee',
    $300: '#e0e0e0',
    $400: '#bdbdbd',
    $500: '#9e9e9e',
    $600: '#757575',
    $700: '#616161',
    $800: '#424242',
  },

  green: {
    normal: '#46b655',
    dark: '#196e25',
    light: '#c4f2ca',
  },

  orange: {
    normal: '#f9971e',
    dark: '#a93610',
    light: '#fcf1cd',
  },

  blue: {
    normal: '#0176d2',
    dark: '#005aa0',
    light: '#e0f6ff',
  },

  red: {
    normal: '#e84646',
    dark: '#650808',
    light: '#fae8e8',
  },
};

const tripColorCodes = [
  '#00A991',
  '#FBAD18',
  '#d50c6a',
  '#35dc93',
  '#ef7209',
  '#863ccd',
  '#006dc7',
  '#4fb52e',
  '#30363d',
  '#ff80ce',
  '#ff2424',
];

export default {
  brand: ColorPalette.product.normal,
  brandLight: ColorPalette.product.light,
  brandDark: ColorPalette.product.dark,

  inputBackground: '#e8edf1',
  backgroundGray: '#f4f6f8',
  disabled: '#b8c1cc',
  disabledInput: '#FAFBFC',
  labelDisabled: '#DFE4EA',

  border: '#e8edf1',

  textDark: ColorPalette.ink.dark,
  textMedium: ColorPalette.ink.normal,
  textLight: ColorPalette.ink.light,

  ...ColorPalette,
  tripColorCodes,
};
