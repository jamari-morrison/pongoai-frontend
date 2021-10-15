import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import type { TextFieldState } from './TextField.types';
import { Theme } from '@pongoai/react-theme';

const textFieldBorderClassName = 'pongoai-TextField-border';
const legendClassName = 'pongoai-TextField-legend';
const placeholderTextClassName = 'pongoai-TextField-label';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    minWidth: '300px',
    minHeight: '50px',
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

const useTextFieldWrapperStyles = makeStyles({
  wrapper: () => ({
    position: 'relative',
    width: '320px',
    height: '48px',
    display: 'flex',
    flexDirection: 'row',
  }),
});

const useInputStyles = makeStyles({
  input: (theme: Theme) => ({
    position: 'relative',
    margin: '0px',
    padding: '0px',
    height: '100%',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    background: 'none',
    border: 'none',
    outline: 'none',
    display: 'block',
    boxSizing: 'border-box',
    fontSize: '18px',
    fontFamily: theme.fonts.fontFamily.base,
  }),

  labelPlaceholderFocus: (theme: Theme) => ({
    '::placeholder': {
      opacity: '0',
      transition: 'opacity .1s cubic-bezier(0.33, 0.0, 0.67, 1)',
    },
    ':focus': {
      '::placeholder': {
        opacity: '1',
        color: theme.palette.neutral2Disabled,
      },
    },
  }),

  suffix: {
    paddingLeft: '0px',
  },

  prefix: {
    paddingRight: '0px',
  },

  lowerTextAlignment: {
    paddingTop: '15px',
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
    position: 'absolute',
    margin: '0px',
    width: '100%',
    height: '100%',
    padding: '0px 5px',
    boxSizing: 'border-box',
    touchAction: 'none',
    pointerEvents: 'none',
    userSelect: 'none',
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
    height: '100%',
    width: '100%',
    margin: '0px',
    padding: '0px 10px',
    fontSize: '18px',
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

const useTextFieldLegendStyles = makeStyles({
  textFieldLegend: (theme: Theme) => ({
    position: 'relative',
    margin: '0px',
    padding: '0px',
    visibility: 'hidden',
    height: '0px',
    fontFamily: theme.fonts.fontFamily.base,
    fontSize: '12px',

    '& span': {
      padding: '0 5px',
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

const useHelperTextStyles = makeStyles({
  helperText: (theme: Theme) => ({
    position: 'relative',
    width: '100%',
    padding: '5px 0px 0px 10px',
    margin: '0px',
    fontSize: '12px',
    fontFamily: theme.fonts.fontFamily.base,
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
});

const useInputWrapperStyles = makeStyles({
  inputWrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
});

const useSuffixPrefixStyles = makeStyles({
  container: (theme: Theme) => ({
    position: 'relative',
    height: 'auto',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    color: 'rgb(96, 94, 92)',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    padding: '0px 10px',
    boxSizing: 'border-box',

    fontFamily: theme.fonts.fontFamily.base,
    fontSize: '18px',
  }),

  lowerTextAlignment: {
    paddingTop: '15px',
  },

  disabled: (theme: Theme) => ({
    color: theme.palette.neutral2Disabled,
  }),
});

export const useTextFieldStyles = (state: TextFieldState) => {
  const rootStyles = useRootStyles();
  const inputStyles = useInputStyles();
  const inputWrapperStyles = useInputWrapperStyles();
  const textFieldBorderStyles = useTextFieldBorderStyles();
  const placeholderTextStyles = usePlaceholderTextStyles();
  const textFieldLegendStyles = useTextFieldLegendStyles();
  const textFieldWrapperStyles = useTextFieldWrapperStyles();
  const helperTextStyles = useHelperTextStyles();
  const prefixSuffixStyles = useSuffixPrefixStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles.focusIndicator,
    !state.error && !state.disabled && rootStyles.inputFocus,
    state.label !== undefined && rootStyles[state.appearance!],
    state.root.className,
  );

  state.textFieldSuffix.className = mergeClasses(
    prefixSuffixStyles.container,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && prefixSuffixStyles.disabled,
    state.textFieldSuffix.className,
  );

  state.textFieldPrefix.className = mergeClasses(
    prefixSuffixStyles.container,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && prefixSuffixStyles.disabled,
    state.textFieldPrefix.className,
  );

  state.textFieldWrapper.className = mergeClasses(textFieldWrapperStyles.wrapper, state.textFieldWrapper.className);

  state.textFieldHelperText.className = mergeClasses(
    helperTextStyles.helperText,
    state.disabled ? helperTextStyles.disabled : helperTextStyles.enabled,
    state.error && helperTextStyles.error,
    state.textFieldHelperText.className,
  );

  state.inputWrapper.className = mergeClasses(inputWrapperStyles.inputWrapper, state.inputWrapper.className);

  state.input.className = mergeClasses(
    inputStyles.input,
    state.suffix && inputStyles.suffix,
    state.prefix && inputStyles.prefix,
    state.label && state.placeholder && !state.suffix && inputStyles.labelPlaceholderFocus,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && inputStyles.disabled,
    state.input.className,
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
    (state.input.value !== '' || state.suffix !== undefined) &&
      (state.label !== undefined ? placeholderTextStyles[state.appearance!] : placeholderTextStyles.placeholder),
    state.textFieldLabel.className,
  );

  state.textFieldLegend.className = mergeClasses(
    legendClassName,
    textFieldLegendStyles.textFieldLegend,
    state.input.value !== '' || state.suffix !== undefined
      ? textFieldLegendStyles.active
      : textFieldLegendStyles.inactive,
    state.textFieldLegend.className,
  );

  return state;
};
