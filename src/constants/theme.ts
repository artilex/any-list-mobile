export const COLORS = Object.freeze({
  bluePrimary: '#1cb0f6',
  blueSecondary: '#1899d6',
  blueThird: '#ddf4ff',
  blueFourth: '#84d8ff',
  blueFifth: '#2b70c9',
  black: '#4b4b4b',
  grayPrimary: '#e5e5e5',
  graySecondary: '#afafaf',
  grayThird: '#777777',
  white: '#ffffff',
  redPrimary: '#ea2b2b',
  redSecondary: '#ff4b4b',
  redThird: '#ffdfe0',
});

export const BACKGROUND_COLORS = Object.freeze({
  primary: COLORS.white,
  secondary: COLORS.blueThird,
  error: COLORS.redThird,
});

export const FONT_COLORS = Object.freeze({
  primary: COLORS.black,
  secondary: COLORS.bluePrimary,
});

export const REGULAR_BUTTON = Object.freeze({
  background: COLORS.bluePrimary,
  border: COLORS.blueSecondary,
  font: COLORS.white,
});

export const DISABLED_BUTTON = Object.freeze({
  background: COLORS.grayPrimary,
  font: COLORS.graySecondary,
});

export const ERROR_BUTTON = Object.freeze({
  background: COLORS.redSecondary,
  border: COLORS.redPrimary,
  font: COLORS.redPrimary,
});

export const BORDER = Object.freeze({
  radius: 10,
  width: 2,
  bottomWidth: 4,
});

export const PADDINGS = Object.freeze({
  small: 12,
  regular: 16,
  large: 20,
});

export const FONT_SIZES = Object.freeze({
  small: 15,
  regular: 17,
  large: 22,
  extraLarge: 34,
});

export const ICON_SIZES = Object.freeze({
  regular: 36,
  large: 56,
  extraLarge: 64,
});

export const FONT_FAMILY = Object.freeze({
  regular: 'Nunito-Regular',
  italic: 'Nonito-Italic',
  bold: 'Nunito-Bold',
  extraBold: 'Nunito-Black',
});
