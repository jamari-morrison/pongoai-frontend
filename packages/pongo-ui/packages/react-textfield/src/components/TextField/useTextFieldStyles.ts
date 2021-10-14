import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import type { TextFieldState } from './TextField.types';
import { Theme } from '@pongoai/react-theme';

const textFieldBorderClassName = 'pongoai-TextField-border';
const placeholderTextClassName = 'pongoai-TextField-placeholderText';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    width: '300px',
    height: '50px',
  },

  inputFocus: (theme: Theme) => ({
    ':focus-within': {
      [`& .${textFieldBorderClassName}`]: {
        borderColor: theme.palette.brand1,
        ':after': {
          background: theme.palette.brand1,
        },
      },
      [`& .${placeholderTextClassName}`]: {
        color: theme.palette.brand1,
      },
    },
  }),

  outlined: (theme: Theme) => ({
    ':focus-within': {
      [`& .${placeholderTextClassName}`]: {
        transform: 'translateY(-50%)',
        opacity: 1,
        fontSize: '12px',
      },
    },
  }),

  standard: (theme: Theme) => ({
    ':focus-within': {
      [`& .${placeholderTextClassName}`]: {
        transform: 'translateY(-50%)',
        opacity: 1,
        fontSize: '12px',
      },
    },
  }),

  filled: (theme: Theme) => ({
    ':focus-within': {
      [`& .${placeholderTextClassName}`]: {
        transform: 'translateY(-20%)',
        opacity: 1,
        fontSize: '12px',
      },
    },
  }),

  focusIndicator: createFocusIndicatorStyleRule(
    theme => ({
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
    }),
    { selector: 'focus-within' },
  ),
});

const useInputStyles = makeStyles({
  input: (theme: Theme) => ({
    position: 'absolute',
    height: '100%',
    width: '90%',
    left: '5%',
    fontFamily: theme.fonts.fontFamily.base,
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    display: 'block',
    background: 'none',
    '::placeholder': {
      opacity: '0',
    },
  }),

  standard: {
    padding: '0px',
  },

  outlined: {
    padding: '0px',
  },

  filled: {
    padding: '10px 0px',
  },

  disabled: (theme: Theme) => ({
    cursor: 'not-allowed',
    color: theme.palette.neutral2Disabled,
  }),
});

const useTextFieldBorder = makeStyles({
  textFieldBorder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    touchAction: 'none',
    pointerEvents: 'none',
    userSelect: 'none',
  },

  outlined: (theme: Theme) => ({
    border: `2px solid ${theme.palette.neutral3}`,
    borderRadius: '4px',
  }),

  standard: (theme: Theme) => ({
    borderBottom: `2px solid ${theme.palette.neutral3}`,
  }),

  filled: (theme: Theme) => ({
    background: theme.palette.neutral3Background,
    borderRadius: '6px 6px 0px 0px',

    ':after': {
      content: "''",
      position: 'absolute',
      height: '2px',
      width: '100%',
      background: theme.palette.neutral3,
      top: '100%',
    },
  }),

  outlinedDisabled: (theme: Theme) => ({
    borderColor: theme.palette.neutral2Disabled,
  }),

  standardDisabled: (theme: Theme) => ({
    borderColor: theme.palette.neutral2Disabled,
  }),

  filledDisabled: (theme: Theme) => ({
    ':after': {
      background: theme.palette.neutral2Disabled,
    },
  }),

  outlinedError: (theme: Theme) => ({
    borderColor: 'red',
  }),

  standardError: (theme: Theme) => ({
    borderColor: 'red',
  }),

  filledError: (theme: Theme) => ({
    ':after': {
      background: 'red',
    },
  }),
});

const usePlaceholderText = makeStyles({
  placeholderText: (theme: Theme) => ({
    position: 'absolute',
    background: 'none',
    height: '100%',
    fontSize: theme.fonts.fontSize[500],
    width: '90%',
    left: '5%',
    fontFamily: theme.fonts.fontFamily.base,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    touchAction: 'none',
    pointerEvents: 'none',
    userSelect: 'none',
    display: 'inline-flex',
    flexShrink: '0',
    justifyContent: 'left',
    alignItems: 'center',
    transition: 'transform .1s cubic-bezier(0.33, 0.0, 0.67, 1), font-size .1s cubic-bezier(0.33, 0.0, 0.67, 1)',
  }),

  enabled: (theme: Theme) => ({
    color: theme.palette.neutral3,
  }),

  disabled: (theme: Theme) => ({
    color: theme.palette.neutral2Disabled,
  }),

  error: (theme: Theme) => ({
    color: 'red',
  }),

  standard: {
    transform: 'translateY(-50%)',
    fontSize: '12px',
  },

  outlined: {
    transform: 'translateY(-50%)',
    fontSize: '12px',
  },

  filled: {
    transform: 'translateY(-20%)',
    fontSize: '12px',
  },

  placeholder: {
    opacity: '0',
  },
});

export const useTextFieldStyles = (state: TextFieldState) => {
  const rootStyles = useRootStyles();
  const inputStyles = useInputStyles();
  const textFieldBorderStyles = useTextFieldBorder();
  const placeholderTextStyles = usePlaceholderText();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles.focusIndicator,
    !state.error && !state.disabled && rootStyles.inputFocus,
    state.label !== undefined && rootStyles[state.appearance!],
    state.root.className,
  );

  state.input.className = mergeClasses(
    inputStyles.input,
    inputStyles[state.appearance!],
    state.disabled && inputStyles.disabled,
    state.input.className,
  );

  state.textFieldBorder.className = mergeClasses(
    textFieldBorderClassName,
    textFieldBorderStyles.textFieldBorder,
    textFieldBorderStyles[state.appearance as 'outlined' | 'standard' | 'filled'],
    state.disabled &&
      textFieldBorderStyles[
        (state.appearance + 'Disabled') as 'outlinedDisabled' | 'standardDisabled' | 'filledDisabled'
      ],
    state.error &&
      textFieldBorderStyles[(state.appearance + 'Error') as 'outlinedError' | 'standardError' | 'filledError'],
    state.textFieldBorder.className,
  );

  state.placeholderText.className = mergeClasses(
    placeholderTextClassName,
    placeholderTextStyles.placeholderText,
    !state.disabled ? placeholderTextStyles.enabled : placeholderTextStyles.disabled,
    state.error && placeholderTextStyles.error,
    state.input.value !== '' &&
      (state.label !== undefined ? placeholderTextStyles[state.appearance!] : placeholderTextStyles.placeholder),
    state.placeholderText.className,
  );

  return state;
};
