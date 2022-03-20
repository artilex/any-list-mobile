export const COLORS = Object.freeze({
  bluePrimary: '#2b70c9',
  blueSecondary: '#1cb0f6',
  blueThird: '#1899d6',
  blueFourth: '#ddf4ff',
  blueFifth: '#84d8ff',
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
  error: COLORS.redThird,
  active: COLORS.blueFourth, // is it need?
});

export const FONT_COLORS = Object.freeze({
  primary: COLORS.black,
  active: COLORS.blueFifth, // is it need?
});

export const REGULAR_BUTTON = Object.freeze({
  background: COLORS.blueSecondary,
  border: COLORS.blueThird,
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
