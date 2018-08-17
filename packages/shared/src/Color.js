// @flow strict

const ColorPalette = {
  black: '#000000',

  transparent: {
    black: {
      $30: 'rgba(0, 0, 0, 0.3)',
      $32: 'rgba(0, 0, 0, .32)',
    },
  },

  // FIXME: remove (or modify)
  grey: {
    $50: '#fafafa',
    $200: '#eeeeee',
    $300: '#e0e0e0',
    $400: '#bdbdbd',
    $500: '#9e9e9e',
    $600: '#757575',
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
    lapalma: '#31a11e',
    transparent: {
      lapalma: {
        $15: 'rgba(49, 161, 30, 0.15)',
      },
    },
  },

  orange: {
    gamboge: '#eb9d08',
  },

  blue: {
    jaggedIce: '#c4e7e4',
  },

  red: {
    monza: '#d0021b',
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
  brandDark: '#007362',

  backgroundGray: '#f4f6f8',
  disabled: '#b8c1cc',
  disabledInput: '#fafbfc',
  labelDisabled: '#dfe4ea',
  ...ColorPalette,
  tripColorCodes,
};
