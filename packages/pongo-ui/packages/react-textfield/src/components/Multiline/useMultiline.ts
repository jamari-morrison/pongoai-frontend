import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { useMultilineState } from './useMultilineState';
import type { MultilineProps, MultilineSlots, MultilineState } from './Multiline.types';

export const multilineShorthandProps: (keyof MultilineSlots)[] = [
  'root',
  'textarea',
  'textFieldLabel',
  'textFieldLegend',
  'textFieldHelperText',
  'textFieldBorder',
];

export const useMultiline = (props: MultilineProps, ref: React.Ref<HTMLElement>): MultilineState => {
  const {
    defaultValue = '',
    value,
    autocomplete,
    disabled = false,
    error = false,
    appearance = 'standard',
    textarea,
    placeholder,
    required = false,
    label,
    helperText,
    textFieldHelperText,
    textFieldLabel,
    textFieldLegend,
    textFieldBorder,
    resize = false,
    onChange,
  } = props;

  const state: MultilineState = {
    defaultValue,
    value,
    autocomplete,
    disabled,
    error,
    appearance,
    placeholder,
    resize,
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
      textFieldLabel: 'label',
      textarea: 'textarea',
    },
    textFieldBorder: resolveShorthand(textFieldBorder, { required: true }),
    textFieldLegend: resolveShorthand(textFieldLegend, { required: true }),
    textFieldLabel: resolveShorthand(textFieldLabel, { required: true }),
    textFieldHelperText: resolveShorthand(textFieldHelperText, { required: true }),
    textarea: resolveShorthand(textarea, {
      required: true,
    }),
  };

  useMultilineState(state);

  return state;
};
