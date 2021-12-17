export type Theme = {
  palette: ColorTokens;
  fonts: Fonts;
};

/**
 * Color theme tokens.
 */
export type ColorTokens = {
  brand1: string;
  brand1Hover: string;
  brand1Active: string;
  brand1Stroke: string;
  brand1StrokeHover: string;
  brand1StrokeActive: string;
  neutral1: string;
  neutral1Hover: string;
  neutral1Active: string;
  neutral2: string;
  neutral2Hover: string;
  neutral2Active: string;
  neutral2Disabled: string;
  neutral2DisabledBackground: string;
  neutral3: string;
  neutral3Background: string;
  neutral3Hover: string;
  neutral3Active: string;
  inherit: String;
  inheritHover: String;
  inheritPressed: String;
  inheritDisabled: String;
  inheritForegroundHover: String;
  inheritForegroundPressed: String;
  inheritBackground: String;
  inheritBackgroundDisabled: String;
  neutral: String;
  brand: String;
  brandHover: String;
  brandPressed: String;
  brandDisabled: String;
  brandForegroundHover: String;
  brandForegroundPressed: String;
  secondary: String;
  secondaryHover: String;
  secondaryPressed: String;
  secondaryDisabled: String;
  secondaryForegroundHover: String;
  secondaryForegroundPressed: String;
  success: String;
  successHover: String;
  successPressed: String;
  successDisabled: String;
  successForegroundHover: String;
  successForegroundPressed: String;
  error: String;
  errorHover: String;
  errorPressed: String;
  errorDisabled: String;
  errorForegroundHover: String;
  errorForegroundPressed: String;
  social: String;
  socialHover: String;
  socialPressed: String;
  socialDisabled: String;
  socialForegroundHover: String;
  socialForegroundPressed: String;
  warning: String;
  warningHover: String;
  warningPressed: String;
  warningDisabled: String;
  warningForegroundHover: String;
  warningForegroundPressed: String;
  info: String;
  infoHover: String;
  infoPressed: String;
  infoDisabled: String;
  infoForegroundHover: String;
  infoForegroundPressed: String;
};

export type Fonts = {
  fontFamily: FontFamilyTokens;
  fontOpacity: FontOpacityTokens;
  fontSize: FontSizeTokens;
  fontLineHeight: FontLineHeightTokens;
  fontWeight: FontWeightTokens;
};

/**
 * Font family tokens.
 */
export type FontFamilyTokens = {
  base: string;
  monospace: string;
};

/**
 * Font opacity tokens
 */
export type FontOpacityTokens = {
  display: string;
  subHeadline: string;
  body: string;
  caption: string;
  title: string;
  header1: string;
  header2: string;
  header3: string;
};

/**
 * Font size tokens.
 */
export type FontSizeTokens = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

/**
 * Font line height tokens.
 */
export type FontLineHeightTokens = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

/**
 * Font weight tokens.
 */
export type FontWeightTokens = {
  thin: number;
  light: number;
  regular: number;
  medium: number;
  bold: number;
  black: number;
};
