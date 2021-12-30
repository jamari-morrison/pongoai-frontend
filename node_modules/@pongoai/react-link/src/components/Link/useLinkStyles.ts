import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { LinkState } from './Link.types';
import { Theme } from '@pongoai/react-theme';

const useRootStyles = makeStyles({
  root: (theme: Theme) => ({
    fontFamily: theme.fonts.fontFamily.base,
    fontSize: theme.fonts.fontSize[300],
    fontWeight: theme.fonts.fontWeight.regular,
    backgroundColor: 'transparent',
    border: 'none',
    boxSizing: 'border-box',
    display: 'inline',
    overflow: 'inherit',
    textOverflow: 'inherit',
    textDecoration: 'none',
    userSelect: 'text',
  }),

  disabled: (theme: Theme) => ({
    color: theme.palette.inheritDisabled,
    textDecoration: 'underline',
    cursor: 'not-allowed',
  }),

  enabled: (theme: Theme) => ({
    color: theme.palette.brand,
    cursor: 'pointer',
    ':hover': {
      color: theme.palette.brandHover,
      textDecoration: 'underline',
    },
    ':active': {
      color: theme.palette.brandPressed,
      textDecoration: 'underline',
    },
  }),

  strong: (theme: Theme) => ({
    fontWeight: theme.fonts.fontWeight.bold,
  }),
});

export const useLinkStyles = (state: LinkState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    state.root.className,
  );

  return state;
};
