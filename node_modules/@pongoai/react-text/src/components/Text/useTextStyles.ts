import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { TextState } from './Text.types';
import { Theme } from '@pongoai/react-theme';

const useRootStyles = makeStyles({
  root: {
    textAlign: 'start',
    display: 'inline',
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'clip',
    margin: '0px',
  },
  base: (theme: Theme) => ({
    fontFamily: theme.fonts.fontFamily.base,
  }),
  monospace: (theme: Theme) => ({
    fontFamily: theme.fonts.fontFamily.monospace,
  }),
  thin: (theme: Theme) => ({
    fontWeight: theme.fonts.fontWeight.thin,
  }),
  light: (theme: Theme) => ({
    fontWeight: theme.fonts.fontWeight.light,
  }),
  regular: (theme: Theme) => ({
    fontWeight: theme.fonts.fontWeight.regular,
  }),
  medium: (theme: Theme) => ({
    fontWeight: theme.fonts.fontWeight.medium,
  }),
  bold: (theme: Theme) => ({
    fontWeight: theme.fonts.fontWeight.bold,
  }),
  black: (theme: Theme) => ({
    fontWeight: theme.fonts.fontWeight.black,
  }),
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecoration: 'underline',
  },
  strikethrough: {
    textDecoration: 'line-through',
  },
  strikethroughUnderline: {
    textDecoration: 'line-through underline',
  },
  100: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[100],
    lineHeight: theme.fonts.fontLineHeight[1000],
  }),
  200: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[200],
    lineHeight: theme.fonts.fontLineHeight[200],
  }),
  300: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[300],
    lineHeight: theme.fonts.fontLineHeight[300],
  }),
  400: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[400],
    lineHeight: theme.fonts.fontLineHeight[400],
  }),
  500: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[500],
    lineHeight: theme.fonts.fontLineHeight[500],
  }),
  600: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[600],
    lineHeight: theme.fonts.fontLineHeight[600],
  }),
  700: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[700],
    lineHeight: theme.fonts.fontLineHeight[700],
  }),
  800: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[800],
    lineHeight: theme.fonts.fontLineHeight[800],
  }),
  900: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[900],
    lineHeight: theme.fonts.fontLineHeight[900],
  }),
  1000: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[1000],
    lineHeight: theme.fonts.fontLineHeight[1000],
  }),
  inherit: (theme: Theme) => ({
    color: theme.palette.inherit,
  }),
  baseColor: (theme: Theme) => ({
    color: theme.palette.base,
  }),
  neutralColor: (theme: Theme) => ({
    color: theme.palette.neutral,
  }),
  brandColor: (theme: Theme) => ({
    color: theme.palette.brand,
  }),
  secondaryColor: (theme: Theme) => ({
    color: theme.palette.secondary,
  }),
  successColor: (theme: Theme) => ({
    color: theme.palette.success,
  }),
  errorColor: (theme: Theme) => ({
    color: theme.palette.error,
  }),
  socialColor: (theme: Theme) => ({
    color: theme.palette.social,
  }),
  warningColor: (theme: Theme) => ({
    color: theme.palette.warning,
  }),
  infoColor: (theme: Theme) => ({
    color: theme.palette.info,
  }),
});

export const useTextStyles = (state: TextState): TextState => {
  const styles = useRootStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles[state.font!],
    styles[state.weight!],
    styles[state.size!],
    state.italic && styles.italic,
    state.underline && styles.underline,
    state.strikethrough && styles.strikethrough,
    state.underline && state.strikethrough && styles.strikethroughUnderline,
    styles[(state.color! + 'Color') as 'baseColor'],
    state.root.className,
  );
  return state;
};
