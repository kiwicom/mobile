// @flow strict

export type SupportedTransformationsType = 'lowercase' | 'uppercase';

const CaseTransform = (
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

export default CaseTransform;
