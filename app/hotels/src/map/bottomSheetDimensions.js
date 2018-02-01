// @flow

export const getWidth = (screenWidth: number, isTablet: boolean) =>
  Math.min(screenWidth, isTablet ? screenWidth * 0.55 : 668);

export const openHeight = 150;
export const closedHeight = 80;
