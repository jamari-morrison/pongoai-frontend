import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { MultilineState } from './Multiline.types';
import {
  useHelperTextStyles,
  useRootStyles,
  useTextFieldBorderStyles,
  textFieldBorderClassName,
  legendClassName,
  useInputStyles,
  useLabelStyles,
  labelClassName,
} from '../TextField/index';
import { Theme } from '@pongoai/react-theme';

const useMultilineRootStyles = makeStyles({
  root: {
    position: 'relative',
  },
});

const useTextAreaStyles = makeStyles({
  textArea: (theme: Theme) => ({
    position: 'relative',
    marginTop: '6px',
    padding: '9px 10px 5px 10px',
    height: '45px',
    width: '300px',
    minHeight: '45px',
    minWidth: '100px',
    background: 'none',
    border: 'none',
    outline: 'none',
    display: 'block',
    boxSizing: 'border-box',
    fontSize: '18px',
    fontFamily: theme.fonts.fontFamily.base,
  }),

  lowerTextAlignment: {
    marginTop: '18px',
    paddingTop: '7px',
    minHeight: '35px',
    height: '35px',
  },

  disableResize: {
    resize: 'none',
  },

  autoAdjust: {
    overflow: 'hidden',
  },
});

const useMultilineBorderStyles = makeStyles({
  multilineBorder: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    padding: '0px',
    margin: '0px',
    boxSizing: 'border-box',
    border: 'none',
    background: 'none',
  },

  enabled: {
    cursor: 'text',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

const useMultilineLabelTextStyles = makeStyles({
  multilineLabel: (theme: Theme) => ({
    position: 'absolute',
    background: 'none',
    margin: '0px',
    padding: '17px 10px',
    fontSize: '18px',
    height: '10px',
    fontFamily: theme.fonts.fontFamily.base,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    touchAction: 'none',
    pointerEvents: 'none',
    userSelect: 'none',
    transition: 'transform .1s cubic-bezier(0.33, 0.0, 0.67, 1), font-size .1s cubic-bezier(0.33, 0.0, 0.67, 1)',
  }),

  lowerTextAlignment: {
    height: '7px',
  },
});

const useTextFieldLegendStyles = makeStyles({
  textFieldLegend: (theme: Theme) => ({
    position: 'relative',
    marginLeft: '5px',
    padding: '0px',
    visibility: 'hidden',
    height: '0px',
    fontFamily: theme.fonts.fontFamily.base,
    fontSize: '12px',

    '& span': {
      padding: '0px 5px',
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
  const multilineRootStyles = useMultilineRootStyles();
  const rootStyles = useRootStyles();
  const textAreaStyles = useTextAreaStyles();
  const inputStyles = useInputStyles();
  const textFieldBorderStyles = useTextFieldBorderStyles();
  const multilineBorderStyles = useMultilineBorderStyles();
  const multilineLabelTextStyles = useMultilineLabelTextStyles();
  const labelTextStyles = useLabelStyles();
  const textFieldLegendStyles = useTextFieldLegendStyles();
  const helperTextStyles = useHelperTextStyles();

  state.root.className = mergeClasses(
    multilineRootStyles.root,
    rootStyles.focusIndicator,
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
    textAreaStyles.textArea,
    state.label && state.placeholder && inputStyles.labelPlaceholderFocus,
    (state.appearance === 'filled' || state.appearance === 'standard') && textAreaStyles.lowerTextAlignment,
    !state.resizable && textAreaStyles.disableResize,
    state.disabled && inputStyles.disabled,
    state.autoAdjust && textAreaStyles.autoAdjust,
    state.textarea.className,
  );

  state.textFieldBorder.className = mergeClasses(
    textFieldBorderClassName,
    multilineBorderStyles.multilineBorder,
    textFieldBorderStyles[state.appearance as 'outlined' | 'standard' | 'filled'],
    state.disabled && textFieldBorderStyles.disabled,
    state.error && textFieldBorderStyles.error,
    !state.disabled ? multilineBorderStyles.enabled : multilineBorderStyles.disabled,
    state.textFieldBorder.className,
  );

  state.textFieldLabel.className = mergeClasses(
    labelClassName,
    multilineLabelTextStyles.multilineLabel,
    !state.disabled ? labelTextStyles.enabled : labelTextStyles.disabled,
    state.error && labelTextStyles.error,
    state.textarea.value !== '' &&
      (state.label !== undefined ? labelTextStyles[state.appearance!] : labelTextStyles.placeholder),
    (state.appearance === 'filled' || state.appearance === 'standard') && multilineLabelTextStyles.lowerTextAlignment,
    state.textFieldLabel.className,
  );

  state.textFieldLegend.className = mergeClasses(
    legendClassName,
    textFieldLegendStyles.textFieldLegend,
    state.textarea.value !== '' ? textFieldLegendStyles.active : textFieldLegendStyles.inactive,
    state.textFieldLegend.className,
  );
};
