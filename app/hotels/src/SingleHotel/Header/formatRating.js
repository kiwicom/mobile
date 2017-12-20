// @flow

export default (
  stars: ?number,
  score: ?number,
  description: ?string,
): string => {
  const reviewDelimiter = score !== null && description !== null ? ' ' : '';
  const review = `${score || ''}${reviewDelimiter}${description || ''}`;
  const starsDelimiter =
    stars !== null && (score !== null || description !== null) ? ' - ' : '';

  return `${'★'.repeat(stars || 0)}${starsDelimiter}${review}`;
};
