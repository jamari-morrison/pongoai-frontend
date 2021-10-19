import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { MultilineState } from './Multiline.types';
import {
  useHelperTextStyles,
  textFieldBorderClassName,
  legendClassName,
  placeholderTextClassName,
} from '../TextField/index';
import { Theme } from '@pongoai/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
  },

  inputFocus: (theme: Theme) => ({
    ':focus-within': {
      [`& .${textFieldBorderClassName}`]: {
        borderColor: theme.palette.brand1,
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
      [`& .${legendClassName}`]: {
        width: 'auto',
      },
    },
  }),

  standard: (theme: Theme) => ({
    ':focus-within': {
      [`& .${placeholderTextClassName}`]: {
        transform: 'translateY(-30%)',
        opacity: 1,
        fontSize: '12px',
      },
    },
  }),

  filled: (theme: Theme) => ({
    ':focus-within': {
      [`& .${placeholderTextClassName}`]: {
        transform: 'translateY(-30%)',
        opacity: 1,
        fontSize: '12px',
      },
    },
  }),
});

const useInputStyles = makeStyles({
  input: (theme: Theme) => ({
    position: 'relative',
    marginTop: '15px',
    marginBottom: '0px',
    padding: '0px 10px 0px 10px',
    height: '45px',
    width: '300px',
    background: 'none',
    border: 'none',
    outline: 'none',
    display: 'block',
    boxSizing: 'border-box',
    fontSize: '18px',
    zIndex: '100',
    fontFamily: theme.fonts.fontFamily.base,
  }),

  labelPlaceholderFocus: (theme: Theme) => ({
    '::placeholder': {
      opacity: '0',
    },
    ':focus': {
      '::placeholder': {
        opacity: '1',
        color: theme.palette.neutral2Disabled,
      },
    },
  }),

  lowerTextAlignment: {
    paddingTop: '20px',
  },

  disabled: (theme: Theme) => ({
    cursor: 'not-allowed',
    color: theme.palette.neutral2Disabled,
    '::placeholder': {
      color: theme.palette.neutral2Disabled,
    },
  }),
});

const useTextFieldBorderStyles = makeStyles({
  textFieldBorder: {
    position: 'relative',
    margin: '0px',
    width: 'auto',
    height: 'auto',
    padding: '0px 5px',
    boxSizing: 'border-box',
    border: 'none',
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
    borderBottom: `2px solid ${theme.palette.neutral3}`,
  }),

  disabled: (theme: Theme) => ({
    borderColor: theme.palette.neutral2Disabled,
  }),

  error: (theme: Theme) => ({
    borderColor: 'red',
  }),
});

const usePlaceholderTextStyles = makeStyles({
  placeholderText: (theme: Theme) => ({
    position: 'absolute',
    background: 'none',
    margin: '0px',
    padding: '12px 10px',
    fontSize: '18px',
    fontFamily: theme.fonts.fontFamily.base,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    touchAction: 'none',
    pointerEvents: 'none',
    userSelect: 'none',
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
    transform: 'translateY(-30%)',
    fontSize: '12px',
  },

  outlined: {
    transform: 'translateY(-50%)',
    fontSize: '12px',
  },

  filled: {
    transform: 'translateY(-30%)',
    fontSize: '12px',
  },

  placeholder: {
    opacity: '0',
  },
});

export const useTextFieldLegendStyles = makeStyles({
  textFieldLegend: (theme: Theme) => ({
    position: 'relative',
    margin: '0px',
    padding: '0px',
    visibility: 'hidden',
    height: '0px',
    fontFamily: theme.fonts.fontFamily.base,
    fontSize: '12px',

    '& span': {
      padding: '0 10px',
      display: 'inline-block',
    },
  }),

  active: {
    width: 'auto',
  },

  inactive: {
    width: '0px',
  },
});

export const useMultilineStyles = (state: MultilineState) => {
  const rootStyles = useRootStyles();
  const inputStyles = useInputStyles();
  const textFieldBorderStyles = useTextFieldBorderStyles();
  const placeholderTextStyles = usePlaceholderTextStyles();
  const textFieldLegendStyles = useTextFieldLegendStyles();
  const helperTextStyles = useHelperTextStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    !state.error && !state.disabled && rootStyles.inputFocus,
    state.label !== undefined && rootStyles[state.appearance!],
    state.root.className,
  );

  state.textFieldHelperText.className = mergeClasses(
    helperTextStyles.helperText,
    state.disabled ? helperTextStyles.disabled : helperTextStyles.enabled,
    state.error && helperTextStyles.error,
    state.textFieldHelperText.className,
  );

  state.textarea.className = mergeClasses(
    inputStyles.input,
    state.label && state.placeholder && inputStyles.labelPlaceholderFocus,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && inputStyles.disabled,
    state.textarea.className,
  );

  state.textFieldBorder.className = mergeClasses(
    textFieldBorderClassName,
    textFieldBorderStyles.textFieldBorder,
    textFieldBorderStyles[state.appearance as 'outlined' | 'standard' | 'filled'],
    state.disabled && textFieldBorderStyles.disabled,
    state.error && textFieldBorderStyles.error,
    state.textFieldBorder.className,
  );

  state.textFieldLabel.className = mergeClasses(
    placeholderTextClassName,
    placeholderTextStyles.placeholderText,
    !state.disabled ? placeholderTextStyles.enabled : placeholderTextStyles.disabled,
    state.error && placeholderTextStyles.error,
    state.textarea.value !== '' &&
      (state.label !== undefined ? placeholderTextStyles[state.appearance!] : placeholderTextStyles.placeholder),
    state.textFieldLabel.className,
  );

  state.textFieldLegend.className = mergeClasses(
    legendClassName,
    textFieldLegendStyles.textFieldLegend,
    state.textarea.value !== '' ? textFieldLegendStyles.active : textFieldLegendStyles.inactive,
    state.textFieldLegend.className,
  );
};
