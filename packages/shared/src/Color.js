// @flow strict

/**
 * This file should be used carefully, basically colors should be used from defaultTokens from mobile-orbit packages.
 * The colors here are for special cases only, and should be commented why they are here
 */
import { defaultTokens } from '@kiwicom/mobile-orbit';

export const hexToRgba = (hex: string, opacity: number): string => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const replacedHex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(replacedHex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )}, ${opacity})`
    : 'rgba(0,0,0,0)';
};

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
        $60: hexToRgba(defaultTokens.paletteInkDark, 0.6), // opacity works differently on RN, we need to keep this
        $54: hexToRgba(defaultTokens.paletteInkDark, 0.54), // opacity works differently on RN, we need to keep this
      },
    },
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

export default {
  ...ColorPalette,
  tripColorCodes,
};
