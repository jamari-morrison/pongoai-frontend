import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { usePasswordState } from './usePasswordState';
import type { PasswordProps, PasswordSlots, PasswordState } from './Password.types';

export const passwordShorthandProps: (keyof PasswordSlots)[] = [
  'root',
  'input',
  'inputWrapper',
  'textFieldLabel',
  'textFieldLegend',
  'textFieldHelperText',
  'showIconWrapper',
  'textFieldWrapper',
  'textFieldBorder',
];

export const usePassword = (props: PasswordProps, ref: React.Ref<HTMLElement>): PasswordState => {
  const {
    defaultValue = '',
    value,
    autocomplete,
    disabled = false,
    error = false,
    appearance = 'standard',
    placeholder,
    required = false,
    label,
    helperText,
    input,
    inputWrapper,
    textFieldHelperText,
    showIconWrapper,
    textFieldLabel,
    textFieldLegend,
    textFieldBorder,
    textFieldWrapper,
    onChange,
  } = props;

  const state: PasswordState = {
    defaultValue,
    value,
    autocomplete,
    disabled,
    error,
    appearance,
    placeholder,
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
      showIconWrapper: 'span',
      inputWrapper: 'div',
      input: 'input',
    },
    textFieldBorder: resolveShorthand(textFieldBorder, { required: true }),
    textFieldLegend: resolveShorthand(textFieldLegend, { required: true }),
    textFieldWrapper: resolveShorthand(textFieldWrapper, { required: true }),
    showIconWrapper: resolveShorthand(showIconWrapper, { required: true }),
    textFieldLabel: resolveShorthand(textFieldLabel, { required: true }),
    textFieldHelperText: resolveShorthand(textFieldHelperText, { required: true }),
    inputWrapper: resolveShorthand(inputWrapper, { required: true }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        type: 'password',
      },
    }),
  };

  usePasswordState(state);

  return state;
};
