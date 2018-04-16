// @flow

export type SupportedTransformationsType = 'lowercase' | 'uppercase';

export default (
  text: string,
  transformation?: SupportedTransformationsType,
): string => {
  switch (transformation) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    default:
      return text;
  }
};
