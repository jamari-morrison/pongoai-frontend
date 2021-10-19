import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { PasswordState } from './Password.types';
import {
  useRootStyles,
  useInputStyles,
  useInputWrapperStyles,
  useTextFieldBorderStyles,
  usePlaceholderTextStyles,
  useTextFieldLegendStyles,
  useTextFieldWrapperStyles,
  useHelperTextStyles,
  textFieldBorderClassName,
  placeholderTextClassName,
  legendClassName,
} from '../TextField/index';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import { Theme } from '@pongoai/react-theme';

export const useShowIconStyles = makeStyles({
  container: (theme: Theme) => ({
    position: 'relative',
    height: 'auto',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    color: theme.palette.neutral3,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    padding: '0px 10px',
    boxSizing: 'border-box',
    fontFamily: theme.fonts.fontFamily.base,
    fontSize: '18px',
  }),

  icon: {
    '& .pongoai-Password-show-button': {
      width: '34px',
      height: '34px',
      tabIndex: 1,
    },
  },

  focusIndicator: createFocusIndicatorStyleRule(
    (theme: Theme) => ({
      '& .pongoai-Password-show-button': {
        ':after': {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          background: theme.palette.neutral3,
          border: `none`,
          opacity: '.2',
          zIndex: '-1',
          borderRadius: '999px',
        },
      },
    }),
    { selector: 'focus-within' },
  ),

  passwordIconVisible: {
    visibility: 'hidden',
  },

  lowerTextAlignment: {
    paddingTop: '15px',
  },

  disabled: (theme: Theme) => ({
    color: theme.palette.neutral2Disabled,
  }),
});

export const usePasswordStyles = (state: PasswordState) => {
  const rootStyles = useRootStyles();
  const inputStyles = useInputStyles();
  const inputWrapperStyles = useInputWrapperStyles();
  const textFieldBorderStyles = useTextFieldBorderStyles();
  const placeholderTextStyles = usePlaceholderTextStyles();
  const textFieldLegendStyles = useTextFieldLegendStyles();
  const textFieldWrapperStyles = useTextFieldWrapperStyles();
  const showIconStyles = useShowIconStyles();
  const helperTextStyles = useHelperTextStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles.focusIndicator,
    !state.error && !state.disabled && rootStyles.inputFocus,
    state.label !== undefined && rootStyles[state.appearance!],
    state.root.className,
  );

  state.input.className = mergeClasses(
    inputStyles.input,
    inputStyles.prefix,
    state.label && state.placeholder && inputStyles.labelPlaceholderFocus,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && inputStyles.disabled,
    state.input.className,
  );

  state.showIconWrapper.className = mergeClasses(
    showIconStyles.container,
    (state.appearance === 'filled' || state.appearance === 'standard') && showIconStyles.lowerTextAlignment,
    state.disabled && showIconStyles.disabled,
    state.input.value === '' && showIconStyles.passwordIconVisible,
    showIconStyles.icon,
    showIconStyles.focusIndicator,
    state.showIconWrapper.className,
  );

  state.textFieldWrapper.className = mergeClasses(textFieldWrapperStyles.wrapper, state.textFieldWrapper.className);

  state.textFieldHelperText.className = mergeClasses(
    helperTextStyles.helperText,
    state.disabled ? helperTextStyles.disabled : helperTextStyles.enabled,
    state.error && helperTextStyles.error,
    state.textFieldHelperText.className,
  );

  state.inputWrapper.className = mergeClasses(inputWrapperStyles.inputWrapper, state.inputWrapper.className);

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
    state.input.value !== '' &&
      (state.label !== undefined ? placeholderTextStyles[state.appearance!] : placeholderTextStyles.placeholder),
    state.textFieldLabel.className,
  );

  state.textFieldLegend.className = mergeClasses(
    legendClassName,
    textFieldLegendStyles.textFieldLegend,
    state.input.value !== '' ? textFieldLegendStyles.active : textFieldLegendStyles.inactive,
    state.textFieldLegend.className,
  );
};
