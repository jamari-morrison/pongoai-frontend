import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useTextFieldState } from './useTextFieldState';
import type { TextFieldProps, TextFieldSlots, TextFieldState } from './TextField.types';

export const textFieldShorthandProps: (keyof TextFieldSlots)[] = [
  'root',
  'input',
  'textFieldLabel',
  'textFieldLegend',
  'textFieldHelperText',
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
    password = false,
    helperText,
    textFieldHelperText,
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
    password,
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
      input: 'input',
    },
    textFieldBorder: resolveShorthand(textFieldBorder, { required: true }),
    textFieldLegend: resolveShorthand(textFieldLegend, { required: true }),
    textFieldWrapper: resolveShorthand(textFieldWrapper, { required: true }),
    textFieldLabel: resolveShorthand(textFieldLabel, { required: true }),
    textFieldHelperText: resolveShorthand(textFieldHelperText, { required: true }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        type: password ? 'password' : 'text',
      },
    }),
  };

  useTextFieldState(state);

  return state;
};
