import * as React from 'react';
import { ComponentState, ComponentProps, IntrinsicShorthandProps } from '@fluentui/react-utilities';
import type { TextFieldSlots, TextFieldCommons } from '../TextField/TextField.types';

export type MultilineSlots = Omit<
  TextFieldSlots,
  'suffix' | 'prefix' | 'input' | 'inputWrapper' | 'textFieldWrapper' | 'textFieldSuffix' | 'textFieldPrefix'
> & {
  /**
   * Hidden input used to handle the Multiline Text Field's functionality.
   */
  textarea: IntrinsicShorthandProps<'textarea'>;
};

export type MultilineCommons = Omit<TextFieldCommons, 'type' | 'prefix' | 'suffix' | 'onChange'> & {
  minRows?: number;

  /**
   * Callback to be called when the value changes.
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLTextAreaElement>,
    data: {
      value: string;
    },
  ) => void;
};

export type MultilineProps = Omit<ComponentProps<MultilineSlots>, 'onChange' | 'defaultValue'> & MultilineCommons;

export type MultilineState = ComponentState<MultilineSlots> & MultilineCommons;
