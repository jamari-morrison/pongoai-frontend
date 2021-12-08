import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { IconState } from './Icon.types';
import { Theme } from '@pongoai/react-theme';

export const useRootStyles = makeStyles({
  small: {
    '& svg': {
      width: '24px',
      height: '24px',
    },
  },

  medium: {
    '& svg': {
      width: '28px',
      height: '28px',
    },
  },

  large: {
    '& svg': {
      width: '32px',
      height: '32px',
    },
  },

  inherit: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.inherit,
    },
  }),

  neutral: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.neutral,
    },
  }),

  brand: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.brand,
    },
  }),

  secondary: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.secondary,
    },
  }),

  success: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.success,
    },
  }),

  error: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.error,
    },
  }),

  social: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.social,
    },
  }),

  warning: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.warning,
    },
  }),

  info: (theme: Theme) => ({
    '& svg': {
      fill: theme.palette.info,
    },
  }),
});

export const useIconStyles = (state: IconState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(rootStyles[state.color!], rootStyles[state.size!], state.root.className);

  return state;
};
