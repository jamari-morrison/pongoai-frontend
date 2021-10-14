import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import type { ButtonState } from './Button.types';

const useRootStyles = makeStyles({
  root: (theme: any) => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    minWidth: '60px',
    minHeight: '35px',
    transition: 'background 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontFamily: theme.fonts.fontFamily.base,
    fontStyle: 'normal',
    fontWeight: theme.fonts.fontWeight.regular,
    fontSize: theme.fonts.fontSize[300],
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

  outline: (theme: any) => ({
    border: `2px solid ${theme.palette.neutral3}`,
    background: 'none',

    '&:hover': {
      borderColor: theme.palette.neutral3Hover,
    },
    '&:active': {
      background: theme.palette.neutral2Active,
      borderColor: theme.palette.neutral3Active,
    },
  }),

  outlineDisabled: (theme: any) => ({
    border: `2px solid ${theme.palette.neutral2Disabled}`,
    background: theme.palette.neutral2DisabledBackground,
    color: theme.palette.neutral2Disabled,
  }),

  primary: (theme: any) => ({
    border: `2px solid ${theme.palette.brand1Stroke}`,
    background: theme.palette.brand1,
    color: theme.palette.neutral2,

    '&:hover': {
      background: theme.palette.brand1Hover,
      borderColor: theme.palette.brand1StrokeHover,
    },
    '&:active': {
      background: theme.palette.brand1Active,
      borderColor: theme.palette.brand1StrokeActive,
    },
  }),

  primaryDisabled: (theme: any) => ({
    border: `2px solid ${theme.palette.neutral2Disabled}`,
    background: theme.palette.neutral2DisabledBackground,
    color: theme.palette.neutral2Disabled,
  }),

  subtle: (theme: any) => ({
    border: 'none',
    background: 'none',
    color: theme.palette.neutral1,

    ':hover': {
      background: theme.palette.neutral2Hover,
    },
    ':active': {
      background: theme.palette.neutral2Active,
    },
  }),

  subtleDisabled: (theme: any) => ({
    border: 'none',
    background: 'none',
    color: theme.palette.neutral2Disabled,
  }),

  transparent: (theme: any) => ({
    border: 'none',
    background: 'none',
    color: theme.palette.neutral1,
    '&:hover': {
      color: theme.palette.neutral1Hover,
      boxShadow: 'none',
    },
    '&:active': {
      color: theme.palette.neutral1Active,
      textDecoration: 'underline',
    },
  }),

  transparentDisabled: (theme: any) => ({
    border: 'none',
    background: 'none',
    color: theme.palette.neutral2Disabled,
  }),

  rounded: {
    borderRadius: '6px',
  },

  circular: {
    minWidth: '38px',
    minHeight: '38px',
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
    !state.disabled && rootStyles.focusIndicator,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    state.disabled
      ? rootStyles[
          (state.appearance! + 'Disabled') as
            | 'outlineDisabled'
            | 'primaryDisabled'
            | 'subtleDisabled'
            | 'transparentDisabled'
        ]
      : rootStyles[state.appearance!],
    rootStyles[state.shape!],
    state.root.className,
  );

  return state;
};
