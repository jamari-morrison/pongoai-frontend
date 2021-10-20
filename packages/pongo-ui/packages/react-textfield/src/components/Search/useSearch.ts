import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useSearchState } from './useSearchState';
import type { SearchProps, SearchSlots, SearchState } from './Search.types';

export const searchShorthandProps: (keyof SearchSlots)[] = [
  'root',
  'input',
  'inputWrapper',
  'textFieldLabel',
  'textFieldLegend',
  'textFieldHelperText',
  'searchIconWrapper',
  'clearIconWrapper',
  'textFieldWrapper',
  'textFieldBorder',
];

export const useSearch = (props: SearchProps, ref: React.Ref<HTMLElement>): SearchState => {
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
    searchIconWrapper,
    clearIconWrapper,
    textFieldLabel,
    textFieldLegend,
    textFieldBorder,
    textFieldWrapper,
    onChange,
  } = props;

  const state: SearchState = {
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
      searchIconWrapper: 'span',
      clearIconWrapper: 'span',
      inputWrapper: 'div',
      input: 'input',
    },
    textFieldBorder: resolveShorthand(textFieldBorder, { required: true }),
    textFieldLegend: resolveShorthand(textFieldLegend, { required: true }),
    textFieldWrapper: resolveShorthand(textFieldWrapper, { required: true }),
    searchIconWrapper: resolveShorthand(searchIconWrapper, { required: true }),
    clearIconWrapper: resolveShorthand(clearIconWrapper, { required: true }),
    textFieldLabel: resolveShorthand(textFieldLabel, { required: true }),
    textFieldHelperText: resolveShorthand(textFieldHelperText, { required: true }),
    inputWrapper: resolveShorthand(inputWrapper, { required: true }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        type: 'search',
      },
    }),
  };

  useSearchState(state);

  return state;
};