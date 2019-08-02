// @flow strict

/**
 * This file should be used carefully, basically colors should be used from defaultTokens from mobile-orbit packages.
 * The colors here are for special cases only, and should be commented why they are here
 */

const ColorPalette = {
  black: '#000000', // We need a black backround for our image modal, It should be entirely black

  transparent: {
    black: {
      $30: 'rgba(0, 0, 0, 0.3)', // opacity works differently on RN, we need to keep this
      $32: 'rgba(0, 0, 0, .32)', // opacity works differently on RN, we need to keep this
    },
  },

  grey: {
    transparent: {
      outerSpace: {
        $60: 'rgba(37, 42, 49, 0.6)', // opacity works differently on RN, we need to keep this
        $54: 'rgba(37, 42, 49, 0.54)', // opacity works differently on RN, we need to keep this
      },
    },
  },
  dark: {
    $10: 'rgba(37, 42, 49, 0.1)',
  },
};

// Collection of colors, in multicity trips, this is the only logical place to store them
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

const Colors = {
  ...ColorPalette,
  tripColorCodes,
};

export default Colors;
