import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useSelectState } from './useSelectState';
import type { SelectProps, SelectState, SelectSlots } from './Select.types';

export const selectShorthandProps: (keyof SelectSlots)[] = [
  'root',
  'selectButton',
  'textFieldLabel',
  'list',
  'textFieldLegend',
  'textFieldHelperText',
  'textFieldWrapper',
  'textFieldSuffix',
  'textFieldPrefix',
  'input',
  'inputWrapper',
  'textFieldBorder',
];

export const useSelect = (props: SelectProps, ref: React.Ref<HTMLElement>): SelectState => {
  const {
    defaultValue = '',
    value,
    disabled = false,
    error = false,
    appearance = 'standard',
    placeholder,
    options,
    required = false,
    label,
    helperText,
    inputWrapper,
    input,
    textFieldHelperText,
    textFieldLabel,
    textFieldLegend,
    textFieldBorder,
    textFieldWrapper,
    textFieldSuffix,
    textFieldPrefix,
    suffix,
    prefix,
    selectButton,
    list,
    onChange,
  } = props;

  const state: SelectState = {
    defaultValue,
    value,
    disabled,
    options,
    error,
    appearance,
    placeholder,
    helperText,
    required,
    suffix,
    prefix,
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
      selectButton: 'div',
      textFieldSuffix: 'div',
      textFieldPrefix: 'div',
      inputWrapper: 'div',
      input: 'input',
      list: 'ul',
    },
    textFieldBorder: resolveShorthand(textFieldBorder, { required: true }),
    textFieldLegend: resolveShorthand(textFieldLegend, { required: true }),
    textFieldWrapper: resolveShorthand(textFieldWrapper, { required: true }),
    textFieldLabel: resolveShorthand(textFieldLabel, { required: true }),
    textFieldHelperText: resolveShorthand(textFieldHelperText, { required: true }),
    textFieldSuffix: resolveShorthand(textFieldSuffix, { required: true }),
    textFieldPrefix: resolveShorthand(textFieldPrefix, { required: true }),
    selectButton: resolveShorthand(selectButton, { required: true }),
    list: resolveShorthand(list, { required: true }),
    inputWrapper: resolveShorthand(inputWrapper, { required: true }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        type: 'text',
      },
    }),
  };

  useSelectState(state);

  return state;
};
