import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import type { ButtonState } from './Button.types';
import { Theme } from '@pongoai/react-theme';

const useRootStyles = makeStyles({
  root: (theme: Theme) => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    transition: 'background 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontFamily: theme.fonts.fontFamily.base,
    fontStyle: 'normal',
    fontWeight: '500',
    outline: 'none',
  }),

  focusIndicator: createFocusIndicatorStyleRule(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        bottom: '-8px',
        left: '-8px',
        boxSizing: 'border-box',
        border: `2px solid black`,
        borderRadius: '4px',
      },
    },
    { selector: 'focus-within' },
  ),

  /**
   * Disabled/Enabled styles
   */
  enabled: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
    '&:active': {
      boxShadow: 'none',
    },
  },

  disabled: {
    cursor: 'not-allowed',
  },

  /**
   * Size styles
   */
  small: (theme: Theme) => ({
    minWidth: '64px',
    height: '30px',
    fontSize: theme.fonts.fontSize[200],
  }),

  medium: (theme: Theme) => ({
    minWidth: '80px',
    height: '35px',
    fontSize: theme.fonts.fontSize[300],
  }),

  large: (theme: Theme) => ({
    minWidth: '96px',
    height: '45px',
    fontSize: theme.fonts.fontSize[400],
  }),

  /**
   * Color styles enabled
   */
  inherit: (theme: Theme) => ({
    color: theme.palette.inherit,
    border: `2px solid ${theme.palette.inherit}`,
    background: theme.palette.neutral,
    backgroundColor: theme.palette.inherit,

    '&:hover': {
      background: theme.palette.inheritForegroundHover,
      borderColor: theme.palette.inheritHover,
      color: theme.palette.inheritHover,
      backgroundColor: theme.palette.inheritHover,
    },
    '&:active': {
      background: theme.palette.inheritForegroundPressed,
      borderColor: theme.palette.inheritPressed,
      color: theme.palette.inheritPressed,
      backgroundColor: theme.palette.inheritPressed,
    },
  }),

  inheritDisabled: (theme: Theme) => ({
    color: theme.palette.inheritDisabled,
    border: `2px solid ${theme.palette.inheritDisabled}`,
    backgroundColor: theme.palette.inheritDisabled,
    background: theme.palette.neutral,
  }),

  brand: (theme: Theme) => ({
    color: theme.palette.brand,
    border: `2px solid ${theme.palette.brand}`,
    background: theme.palette.neutral,
    backgroundColor: theme.palette.brand,

    '&:hover': {
      background: theme.palette.brandForegroundHover,
      borderColor: theme.palette.brandHover,
      color: theme.palette.brandHover,
      backgroundColor: theme.palette.brandHover,
    },
    '&:active': {
      background: theme.palette.brandForegroundPressed,
      borderColor: theme.palette.brandPressed,
      color: theme.palette.brandPressed,
      backgroundColor: theme.palette.brandPressed,
    },
  }),

  brandDisabled: (theme: Theme) => ({
    color: theme.palette.brandDisabled,
    border: `2px solid ${theme.palette.brandDisabled}`,
    backgroundColor: theme.palette.brandDisabled,
    background: theme.palette.neutral,
  }),

  secondary: (theme: Theme) => ({
    color: theme.palette.secondary,
    border: `2px solid ${theme.palette.secondary}`,
    background: theme.palette.neutral,
    backgroundColor: theme.palette.secondary,

    '&:hover': {
      background: theme.palette.secondaryForegroundHover,
      borderColor: theme.palette.secondaryHover,
      color: theme.palette.secondaryHover,
      backgroundColor: theme.palette.secondaryHover,
    },
    '&:active': {
      background: theme.palette.secondaryForegroundPressed,
      borderColor: theme.palette.secondaryPressed,
      color: theme.palette.secondaryPressed,
      backgroundColor: theme.palette.secondaryPressed,
    },
  }),

  secondaryDisabled: (theme: Theme) => ({
    color: theme.palette.secondaryDisabled,
    border: `2px solid ${theme.palette.secondaryDisabled}`,
    backgroundColor: theme.palette.secondaryDisabled,
    background: theme.palette.neutral,
  }),

  success: (theme: Theme) => ({
    color: theme.palette.success,
    border: `2px solid ${theme.palette.success}`,
    background: theme.palette.neutral,
    backgroundColor: theme.palette.success,

    '&:hover': {
      background: theme.palette.successForegroundHover,
      borderColor: theme.palette.successHover,
      color: theme.palette.successHover,
      backgroundColor: theme.palette.successHover,
    },
    '&:active': {
      background: theme.palette.successForegroundPressed,
      borderColor: theme.palette.successPressed,
      color: theme.palette.successPressed,
      backgroundColor: theme.palette.successPressed,
    },
  }),

  successDisabled: (theme: Theme) => ({
    color: theme.palette.successDisabled,
    border: `2px solid ${theme.palette.successDisabled}`,
    backgroundColor: theme.palette.successDisabled,
    background: theme.palette.neutral,
  }),

  error: (theme: Theme) => ({
    color: theme.palette.error,
    border: `2px solid ${theme.palette.error}`,
    background: theme.palette.neutral,
    backgroundColor: theme.palette.error,

    '&:hover': {
      background: theme.palette.errorForegroundHover,
      borderColor: theme.palette.errorHover,
      color: theme.palette.errorHover,
      backgroundColor: theme.palette.errorHover,
    },
    '&:active': {
      background: theme.palette.errorForegroundPressed,
      borderColor: theme.palette.errorPressed,
      color: theme.palette.errorPressed,
      backgroundColor: theme.palette.errorPressed,
    },
  }),

  errorDisabled: (theme: Theme) => ({
    color: theme.palette.errorDisabled,
    border: `2px solid ${theme.palette.errorDisabled}`,
    backgroundColor: theme.palette.errorDisabled,
    background: theme.palette.neutral,
  }),

  social: (theme: Theme) => ({
    color: theme.palette.social,
    border: `2px solid ${theme.palette.social}`,
    background: theme.palette.neutral,
    backgroundColor: theme.palette.social,

    '&:hover': {
      background: theme.palette.socialForegroundHover,
      borderColor: theme.palette.socialHover,
      color: theme.palette.socialHover,
      backgroundColor: theme.palette.socialHover,
    },
    '&:active': {
      background: theme.palette.socialForegroundPressed,
      borderColor: theme.palette.socialPressed,
      color: theme.palette.socialPressed,
      backgroundColor: theme.palette.socialPressed,
    },
  }),

  socialDisabled: (theme: Theme) => ({
    color: theme.palette.socialDisabled,
    border: `2px solid ${theme.palette.socialDisabled}`,
    backgroundColor: theme.palette.socialDisabled,
    background: theme.palette.neutral,
  }),

  warning: (theme: Theme) => ({
    color: theme.palette.warning,
    border: `2px solid ${theme.palette.warning}`,
    background: theme.palette.neutral,
    backgroundColor: theme.palette.warning,

    '&:hover': {
      background: theme.palette.warningForegroundHover,
      borderColor: theme.palette.warningHover,
      color: theme.palette.warningHover,
      backgroundColor: theme.palette.warningHover,
    },
    '&:active': {
      background: theme.palette.warningForegroundPressed,
      borderColor: theme.palette.warningPressed,
      color: theme.palette.warningPressed,
      backgroundColor: theme.palette.warningPressed,
    },
  }),

  warningDisabled: (theme: Theme) => ({
    color: theme.palette.warningDisabled,
    border: `2px solid ${theme.palette.warningDisabled}`,
    backgroundColor: theme.palette.warningDisabled,
    background: theme.palette.neutral,
  }),

  info: (theme: Theme) => ({
    color: theme.palette.info,
    border: `2px solid ${theme.palette.info}`,
    background: theme.palette.neutral,
    backgroundColor: theme.palette.info,

    '&:hover': {
      background: theme.palette.infoForegroundHover,
      borderColor: theme.palette.infoHover,
      color: theme.palette.infoHover,
      backgroundColor: theme.palette.infoHover,
    },
    '&:active': {
      background: theme.palette.infoForegroundPressed,
      borderColor: theme.palette.infoPressed,
      color: theme.palette.infoPressed,
      backgroundColor: theme.palette.infoPressed,
    },
  }),

  infoDisabled: (theme: Theme) => ({
    color: theme.palette.infoDisabled,
    border: `2px solid ${theme.palette.infoDisabled}`,
    backgroundColor: theme.palette.infoDisabled,
    background: theme.palette.neutral,
  }),

  /**
   * Appearance styles
   */
  outline: {
    backgroundColor: 'none !important',

    '&:hover': {
      backgroundColor: 'none',
    },
    '&:active': {
      backgroundColor: 'none',
    },
  },

  primary: (theme: Theme) => ({
    border: 'none',
    color: 'white !important',
  }),

  subtle: {
    border: 'none',
    backgroundColor: 'none',

    '&:hover': {
      backgroundColor: 'none',
    },
    '&:active': {
      backgroundColor: 'none',
    },
  },

  transparent: {
    border: 'none !important',
    background: 'none !important',
  },

  transparentEnabled: {
    '&:hover': {
      boxShadow: 'none',
      textDecoration: 'underline',
    },
    '&:active': {
      textDecoration: 'underline',
    },
  },

  /**
   * Shape styles
   */
  rounded: {
    borderRadius: '6px',
  },

  circular: {
    borderRadius: '999px',
  },

  circle: {
    borderRadius: '100%',
  },

  square: {
    borderRadius: '0px',
  },
});

export const useButtonStyles = (state: ButtonState) => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    state.disabled ? (rootStyles as any)[state.color! + 'Disabled'] : rootStyles[state.color!],
    !state.disabled && rootStyles.focusIndicator,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    rootStyles[state.appearance!],
    rootStyles[state.size!],
    rootStyles[state.shape!],
    state.appearance === 'transparent' && !state.disabled && rootStyles.transparentEnabled,
    state.root.className,
  );

  return state;
};
