import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { SelectState } from './Select.types';
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
  useSuffixPrefixStyles,
} from '../TextField/index';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import { Theme } from '@pongoai/react-theme';
import { listClassName } from './useSelectState';

const useSelectButtonStyles = makeStyles({
  selectButton: (theme: Theme) => ({
    position: 'absolute',
    margin: '0px',
    padding: '0px',
    height: '100%',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    background: 'none',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    boxSizing: 'border-box',
    fontSize: '18px',
    userSelect: 'none',
    fontFamily: theme.fonts.fontFamily.base,
    outline: 'none',
  }),

  enabled: {
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

const useListStyles = makeStyles({
  list: (theme: Theme) => ({
    position: 'absolute',
    listStyleType: 'none',
    padding: '10px 0px',
    margin: '0px',
    width: '300px',
    borderRadius: '0px 0px 5px 5px',
    background: 'white',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    transition: 'height 1s cubic-bezier(0.33, 0.0, 0.67, 1)',

    [`& .${listClassName}`]: {
      height: '38px',
      padding: '0px 10px 0px 10px',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      fontFamily: theme.fonts.fontFamily.base,
      fontSize: '18px',
      userSelect: 'none',
      outline: 'none',
    },
  }),

  activeListItem: (theme: Theme) => ({
    [`& .active`]: {
      background: '#e6e9ff',
      ':hover': {
        background: '#ccd1ff',
      },
      ':active': {
        background: '#abb3ff',
      },
      ':focus-within': {
        background: '#ccd1ff',
        ':hover': {
          background: '#c2c8ff',
        },
        ':active': {
          background: '#abb3ff',
        },
      },
    },
  }),

  inactiveListItem: (theme: Theme) => ({
    [`& .inactive`]: {
      background: 'white',
      ':hover': {
        background: theme.palette.neutral2Hover,
      },
      ':active': {
        background: theme.palette.neutral2Active,
      },
      ':focus-within': {
        background: theme.palette.neutral2Active,
      },
    },
  }),

  enabled: {
    [`& .${listClassName}`]: {
      cursor: 'pointer',
    },
  },

  disabled: {
    [`& .${listClassName}`]: {
      cursor: 'not-allowed',
    },
  },
});

const useChevronStyles = makeStyles({
  chevron: {
    pointerEvents: 'none',
    userSelect: 'none',
  },
});

export const useSelectStyles = (state: SelectState) => {
  const rootStyles = useRootStyles();
  const textFieldBorderStyles = useTextFieldBorderStyles();
  const inputStyles = useInputStyles();
  const inputWrapperStyles = useInputWrapperStyles();
  const labelStyles = useLabelStyles();
  const listStyles = useListStyles();
  const chevronStyles = useChevronStyles();
  const selectButtonStyles = useSelectButtonStyles();
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

  state.inputWrapper.className = mergeClasses(inputWrapperStyles.inputWrapper, state.inputWrapper.className);

  state.input.className = mergeClasses(
    inputStyles.input,
    // state.suffix !== undefined && inputStyles.suffix,
    // state.prefix !== undefined && inputStyles.prefix,
    //state.label && state.placeholder && !state.suffix && inputStyles.labelPlaceholderFocus,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && inputStyles.disabled,
    state.input.className,
  );

  state.selectButton.className = mergeClasses(
    selectButtonStyles.selectButton,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && inputStyles.disabled,
    state.disabled ? selectButtonStyles.disabled : selectButtonStyles.enabled,
    state.selectButton.className,
  );

  state.chevron.className = mergeClasses(
    prefixSuffixStyles.container,
    (state.appearance === 'filled' || state.appearance === 'standard') && prefixSuffixStyles.lowerTextAlignment,
    state.disabled && prefixSuffixStyles.disabled,
    chevronStyles.chevron,
    state.chevron.className,
  );

  state.list.className = mergeClasses(
    listStyles.list,
    listStyles.inactiveListItem,
    listStyles.activeListItem,
    state.disabled ? listStyles.disabled : listStyles.enabled,
    state.list.className,
  );

  state.textFieldWrapper.className = mergeClasses(textFieldWrapperStyles.wrapper, state.textFieldWrapper.className);

  state.textFieldHelperText.className = mergeClasses(
    helperTextStyles.helperText,
    state.disabled ? helperTextStyles.disabled : helperTextStyles.enabled,
    state.error && helperTextStyles.error,
    state.textFieldHelperText.className,
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
    labelStyles[state.appearance!],
    state.textFieldLabel.className,
  );

  state.textFieldLegend.className = mergeClasses(
    legendClassName,
    textFieldLegendStyles.textFieldLegend,
    textFieldLegendStyles.active,
    state.textFieldLegend.className,
  );
};