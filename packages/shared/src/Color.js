// @flow strict

const ColorPalette = {
  black: '#000000',
  white: '#ffffff',

  transparent: {
    black: {
      $30: 'rgba(0, 0, 0, 0.3)',
      $32: 'rgba(0, 0, 0, .32)',
    },
  },

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
    $550: '#888888',
    $600: '#757575',
    $700: '#616161',
    $800: '#424242',
    athensGrey: '#edeff2',
    porcelain: '#eceff1',
    geyser: '#cad2dc',
    transparent: {
      outerSpace: {
        $60: 'rgba(48, 54, 61, 0.6)',
      },
    },
  },

  green: {
    normal: '#46b655',
    dark: '#196e25',
    light: '#c4f2ca',
    lapalma: '#31a11e',
    transparent: {
      lapalma: {
        $15: 'rgba(49, 161, 30, 0.15)',
      },
    },
  },

  orange: {
    normal: '#f9971e',
    dark: '#a93610',
    light: '#fcf1cd',
    gamboge: '#eb9d08',
    transparent: {
      gamboge: {
        $15: 'rgba(235, 157, 8, 0.15)',
      },
    },
  },

  blue: {
    normal: '#0176d2',
    dark: '#005aa0',
    light: '#e0f6ff',
    jaggedIce: '#c4e7e4',
  },

  red: {
    normal: '#e84646',
    dark: '#650808',
    light: '#fae8e8',
    monza: '#d0021b',
    transparent: {
      monza: {
        $15: 'rgba(208, 2, 27, 0.15)',
      },
    },
  },
};

const tripColorCodes = [
  '#00a991',
  '#fbad18',
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
  disabledInput: '#fafbfc',
  labelDisabled: '#dfe4ea',

  border: '#e8edf1',

  textDark: ColorPalette.ink.dark,
  textMedium: ColorPalette.ink.normal,
  textLight: ColorPalette.ink.light,

  ...ColorPalette,
  tripColorCodes,
};
