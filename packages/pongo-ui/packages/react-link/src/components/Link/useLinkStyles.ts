import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { LinkState } from './Link.types';
import { Theme } from '@pongoai/react-theme';

const useRootStyles = makeStyles({
  root: (theme: Theme) => ({
    fontFamily: theme.fonts.fontFamily.base,
    fontSize: theme.fonts.fontSize[300],
    fontWeight: theme.fonts.fontWeight.regular,
    boxSizing: 'border-box',
    display: 'inline',
    overflow: 'inherit',
    textDecoration: 'underline',
    textOverflow: 'inherit',
    userSelect: 'text',
  }),

  disabled: (theme: Theme) => ({
    color: theme.palette.neutral2Disabled,
    cursor: 'not-allowed',
  }),

  enabled: (theme: Theme) => ({
    color: theme.palette.brand1,
    cursor: 'pointer',
    ':hover': {
      color: theme.palette.brand1Hover,
    },
    ':active': {
      color: theme.palette.brand1Active,
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
