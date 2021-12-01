import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { SelectState } from './Select.types';
import {
  useRootStyles,
  useInputStyles,
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
import { Theme } from '@pongoai/react-theme';
import { listClassName } from './useSelectState';

const useSelectWrapperStyles = makeStyles({
  enabled: {
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

const useSelectButtonStyles = makeStyles({
  selectButton: (theme: Theme) => ({
    position: 'relative',
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
});

const useListStyles = makeStyles({
  list: (theme: Theme) => ({
    position: 'absolute',
    listStyleType: 'none',
    padding: '10px 0px',
    margin: '0px',
    width: '100%',
    borderRadius: '0px 0px 5px 5px',
    background: 'white',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    transition: 'height 1s cubic-bezier(0.33, 0.0, 0.67, 1)',
    zIndex: '1000',
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

const useSelectInputStyles = makeStyles({
  input: {
    display: 'none',
  },
});

export const useSelectStyles = (state: SelectState) => {
  const rootStyles = useRootStyles();
  const textFieldBorderStyles = useTextFieldBorderStyles();
  const inputStyles = useInputStyles();
  const labelStyles = useLabelStyles();
  const listStyles = useListStyles();
  const selectWrapperStyles = useSelectWrapperStyles();
  const selectButtonStyles = useSelectButtonStyles();
  const textFieldLegendStyles = useTextFieldLegendStyles();
  const textFieldWrapperStyles = useTextFieldWrapperStyles();
  const helperTextStyles = useHelperTextStyles();
  const prefixSuffixStyles = useSuffixPrefixStyles();
  const selectInputStyles = useSelectInputStyles();

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

  state.selectButton.className = mergeClasses(
    selectButtonStyles.selectButton,
    (state.appearance === 'filled' || state.appearance === 'standard') && inputStyles.lowerTextAlignment,
    state.disabled && inputStyles.disabled,
    state.selectButton.className,
  );

  state.list.className = mergeClasses(
    listStyles.list,
    listStyles.inactiveListItem,
    listStyles.activeListItem,
    state.disabled ? listStyles.disabled : listStyles.enabled,
    state.list.className,
  );

  state.input.className = mergeClasses(selectInputStyles.input, state.input.className);

  state.textFieldWrapper.className = mergeClasses(
    textFieldWrapperStyles.wrapper,
    state.disabled ? selectWrapperStyles.disabled : selectWrapperStyles.enabled,
    state.textFieldWrapper.className,
  );

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
