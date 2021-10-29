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
  'chevron',
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
    chevron,
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
      chevron: 'div',
      selectButton: 'div',
      inputWrapper: 'div',
      input: 'input',
      list: 'ul',
    },
    textFieldBorder: resolveShorthand(textFieldBorder, { required: true }),
    textFieldLegend: resolveShorthand(textFieldLegend, { required: true }),
    textFieldWrapper: resolveShorthand(textFieldWrapper, { required: true }),
    textFieldLabel: resolveShorthand(textFieldLabel, { required: true }),
    textFieldHelperText: resolveShorthand(textFieldHelperText, { required: true }),
    chevron: resolveShorthand(chevron, { required: true }),
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
