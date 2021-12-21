import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import type { TextFieldState } from './TextField.types';
import { Theme } from '@pongoai/react-theme';

export const textFieldBorderClassName = 'pongoai-TextField-border';
export const legendClassName = 'pongoai-TextField-legend';
export const labelClassName = 'pongoai-TextField-label';

export const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    width: '300px',
    height: '55px',
  },

  inputFocus: (theme: Theme) => ({
    ':focus-within': {
      [`& .${textFieldBorderClassName}`]: {
        borderColor: theme.palette.brand,
      },
      [`& .${labelClassName}`]: {
        color: theme.palette.brand,
      },
    },
  }),

  outlined: (theme: Theme) => ({
    ':focus-within': {
      [`& .${labelClassName}`]: {
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
      [`& .${labelClassName}`]: {
        transform: 'translateY(-30%)',
        opacity: 1,
        fontSize: '12px',
      },
    },
  }),

  filled: (theme: Theme) => ({
    ':focus-within': {
      [`& .${labelClassName}`]: {
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

export const useTextFieldWrapperStyles = makeStyles({
  wrapper: () => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  }),
});

export const useInputStyles = makeStyles({
  input: (theme: Theme) => ({
    position: 'absolute',
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
    },
    ':focus': {
      '::placeholder': {
        opacity: '1',
        color: theme.palette.inheritDisabled,
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
    color: theme.palette.inheritDisabled,
    '::placeholder': {
      color: theme.palette.inheritDisabled,
    },
  }),
});

export const useTextFieldBorderStyles = makeStyles({
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
    zIndex: -1,
  },

  outlined: (theme: Theme) => ({
    border: `2px solid ${theme.palette.inherit}`,
    borderRadius: '4px',
  }),

  standard: (theme: Theme) => ({
    borderBottom: `2px solid ${theme.palette.inherit}`,
  }),

  filled: (theme: Theme) => ({
    background: theme.palette.inheritForegroundPressed,
    borderRadius: '6px 6px 0px 0px',
    borderBottom: `2px solid ${theme.palette.inherit}`,
  }),

  disabled: (theme: Theme) => ({
    borderColor: theme.palette.inheritDisabled,
    cursor: 'not-allowed',
  }),

  error: (theme: Theme) => ({
    borderColor: theme.palette.error,
  }),
});

export const useLabelStyles = makeStyles({
  label: (theme: Theme) => ({
    position: 'absolute',
    background: 'none',
    height: '100%',
    width: 'auto',
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
    color: theme.palette.inherit,
  }),

  disabled: (theme: Theme) => ({
    color: theme.palette.inheritDisabled,
  }),

  error: (theme: Theme) => ({
    color: theme.palette.error,
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
      padding: '0 3px',
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

export const useHelperTextStyles = makeStyles({
  helperText: (theme: Theme) => ({
    position: 'relative',
    padding: '5px 10px 0px 10px',
    margin: '0px',
    fontSize: '12px',
    fontFamily: theme.fonts.fontFamily.base,
    textAlign: 'left',
  }),

  enabled: (theme: Theme) => ({
    color: theme.palette.inherit,
  }),

  disabled: (theme: Theme) => ({
    color: theme.palette.inheritDisabled,
  }),

  error: (theme: Theme) => ({
    color: 'red',
  }),
});

export const useInputWrapperStyles = makeStyles({
  inputWrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
});

export const useSuffixPrefixStyles = makeStyles({
  container: (theme: Theme) => ({
    position: 'relative',
    height: 'auto',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    color: theme.palette.inherit,
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
    color: theme.palette.inheritDisabled,
  }),
});

export const useTextFieldStyles = (state: TextFieldState) => {
  const rootStyles = useRootStyles();
  const inputStyles = useInputStyles();
  const inputWrapperStyles = useInputWrapperStyles();
  const textFieldBorderStyles = useTextFieldBorderStyles();
  const labelStyles = useLabelStyles();
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
    (state.appearance === 'filled' || state.appearance === 'standard') && prefixSuffixStyles.lowerTextAlignment,
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
    state.suffix !== undefined && inputStyles.suffix,
    state.prefix !== undefined && inputStyles.prefix,
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
    labelClassName,
    labelStyles.label,
    !state.disabled ? labelStyles.enabled : labelStyles.disabled,
    state.error && labelStyles.error,
    (state.input.value !== '' || state.suffix !== undefined) &&
      (state.label !== undefined ? labelStyles[state.appearance!] : labelStyles.placeholder),
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
