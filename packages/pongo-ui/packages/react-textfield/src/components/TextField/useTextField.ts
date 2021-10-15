import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useTextFieldState } from './useTextFieldState';
import type { TextFieldProps, TextFieldSlots, TextFieldState } from './TextField.types';

export const textFieldShorthandProps: (keyof TextFieldSlots)[] = [
  'root',
  'input',
  'inputWrapper',
  'textFieldLabel',
  'textFieldLegend',
  'textFieldHelperText',
  'textFieldSuffix',
  'textFieldPrefix',
  'textFieldWrapper',
  'textFieldBorder',
];

export const useTextField = (props: TextFieldProps, ref: React.Ref<HTMLElement>): TextFieldState => {
  const {
    defaultValue = '',
    value,
    autocomplete,
    disabled = false,
    error = false,
    appearance = 'standard',
    input,
    placeholder,
    required = false,
    label,
    type = 'text',
    helperText,
    suffix,
    prefix,
    inputWrapper,
    textFieldHelperText,
    textFieldSuffix,
    textFieldPrefix,
    textFieldLabel,
    textFieldLegend,
    textFieldBorder,
    textFieldWrapper,
    onChange,
  } = props;

  const state: TextFieldState = {
    defaultValue,
    value,
    autocomplete,
    disabled,
    error,
    appearance,
    placeholder,
    type,
    suffix,
    prefix,
    helperText,
    required,
    label,
    onChange,
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    components: {
      root: 'div',
      textFieldBorder: 'fieldset',
      textFieldLegend: 'legend',
      textFieldHelperText: 'p',
      textFieldWrapper: 'div',
      textFieldLabel: 'label',
      textFieldSuffix: 'div',
      textFieldPrefix: 'div',
      inputWrapper: 'div',
      input: 'input',
    },
    textFieldBorder: resolveShorthand(textFieldBorder, { required: true }),
    textFieldLegend: resolveShorthand(textFieldLegend, { required: true }),
    textFieldWrapper: resolveShorthand(textFieldWrapper, { required: true }),
    textFieldSuffix: resolveShorthand(textFieldSuffix, { required: true }),
    textFieldPrefix: resolveShorthand(textFieldPrefix, { required: true }),
    textFieldLabel: resolveShorthand(textFieldLabel, { required: true }),
    textFieldHelperText: resolveShorthand(textFieldHelperText, { required: true }),
    inputWrapper: resolveShorthand(inputWrapper, { required: true }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        type: type,
      },
    }),
  };

  useTextFieldState(state);

  return state;
};
