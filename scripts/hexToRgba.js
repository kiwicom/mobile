// @flow

const hexToRgba = (hex: string, opacity: number): string => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?(?<r>[a-f\d])(?<g>[a-f\d])(?<b>[a-f\d])$/i;
  const replacedHex = hex.replace(shorthandRegex, (match, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?(?<red>[a-f\d]{2})(?<green>[a-f\d]{2})(?<blue>[a-f\d]{2})$/i.exec(
    replacedHex,
  );
  const { red, green, blue } = result?.groups ?? {};
  return result
    ? `rgba(${parseInt(red, 16)}, ${parseInt(green, 16)}, ${parseInt(
        blue,
        16,
      )}, ${opacity})`
    : 'rgba(0,0,0,0)';
};

module.exports = hexToRgba;
