import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { SearchState } from './Search.types';
import {
  useRootStyles,
  useInputStyles,
  useInputWrapperStyles,
  useTextFieldBorderStyles,
  useLabelStyles,
  useTextFieldLegendStyles,
  useTextFieldWrapperStyles,
  useHelperTextStyles,
  textFieldBorderClassName,
  labelClassName,
  legendClassName,
} from '../TextField/index';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import { Theme } from '@pongoai/react-theme';

export const useButtonStyles = makeStyles({
  container: (theme: Theme) => ({
    position: 'relative',
    height: 'auto',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    color: 'black',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    padding: '0px 10px',
    boxSizing: 'border-box',
    fontFamily: theme.fonts.fontFamily.base,
    fontSize: '18px',
  }),

  focusIndicator: createFocusIndicatorStyleRule(
    (theme: Theme) => ({
      '& .pongoai-Search-clear-button': {
        ':after': {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          background: 'black',
          border: `none`,
          opacity: '.2',
          zIndex: '-1',
          borderRadius: '999px',
        },
      },
    }),
    { selector: 'focus-within' },
  ),

  icon: {
    '& .pongoai-Search-clear-button': {
      minWidth: '34px',
      height: '34px',
      tabIndex: 1,
    },
  },

  passwordIconVisible: {
    visibility: 'hidden',
  },

  lowerTextAlignment: {
    paddingTop: '15px',
  },

  disabled: (theme: Theme) => ({
    color: theme.palette.inheritDisabled,
  }),
});

export const useSearchStyles = (state: SearchState) => {
  const rootStyles = useRootStyles();
  const inputStyles = useInputStyles();
  const inputWrapperStyles = useInputWrapperStyles();
  const textFieldBorderStyles = useTextFieldBorderStyles();
  const labelStyles = useLabelStyles();
  const textFieldLegendStyles = useTextFieldLegendStyles();
  const textFieldWrapperStyles = useTextFieldWrapperStyles();
  const buttonStyles = useButtonStyles();
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
    inputStyles.suffix,
    inputStyles.prefix,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && inputStyles.disabled,
    state.input.className,
  );

  state.searchIconWrapper.className = mergeClasses(
    buttonStyles.container,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && buttonStyles.disabled,
    state.searchIconWrapper.className,
  );

  state.clearIconWrapper.className = mergeClasses(
    buttonStyles.container,
    (state.appearance === 'filled' || state.appearance === 'standard') && buttonStyles.lowerTextAlignment,
    state.disabled && buttonStyles.disabled,
    buttonStyles.focusIndicator,
    buttonStyles.icon,
    state.clearIconWrapper.className,
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
    labelClassName,
    labelStyles.label,
    !state.disabled ? labelStyles.enabled : labelStyles.disabled,
    state.error && labelStyles.error,
    state.label !== undefined ? labelStyles[state.appearance!] : labelStyles.placeholder,
    state.textFieldLabel.className,
  );

  state.textFieldLegend.className = mergeClasses(
    legendClassName,
    textFieldLegendStyles.textFieldLegend,
    textFieldLegendStyles.active,
    state.textFieldLegend.className,
  );
};
