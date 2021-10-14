import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useTextFieldState } from './useTextFieldState';
import type { TextFieldProps, TextFieldSlots, TextFieldState } from './TextField.types';

export const textFieldShorthandProps: (keyof TextFieldSlots)[] = ['root', 'input', 'textFieldLabel', 'textFieldBorder'];

export const useTextField = (props: TextFieldProps, ref: React.Ref<HTMLElement>): TextFieldState => {
  const {
    defaultValue = '',
    value,
    autocomplete,
    disabled = false,
    error = false,
    appearance = 'standard',
    input,
    placeholder = 'Password',
    label,
    textFieldLabel,
    textFieldBorder,
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
    label,
    onChange,
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    components: {
      root: 'div',
      textFieldBorder: 'div',
      textFieldLabel: 'span',
      input: 'input',
    },
    textFieldBorder: resolveShorthand(textFieldBorder, { required: true }),
    textFieldLabel: resolveShorthand(textFieldLabel, { required: true }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        type: 'text',
      },
    }),
  };

  useTextFieldState(state);

  return state;
};
