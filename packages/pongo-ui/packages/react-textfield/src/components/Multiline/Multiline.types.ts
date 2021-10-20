import * as React from 'react';
import { ComponentState, ComponentProps, IntrinsicShorthandProps } from '@fluentui/react-utilities';
import type { TextFieldSlots, TextFieldCommons } from '../TextField/TextField.types';

export type MultilineSlots = Omit<
  TextFieldSlots,
  'input' | 'inputWrapper' | 'textFieldWrapper' | 'textFieldSuffix' | 'textFieldPrefix'
> & {
  /**
   * Hidden input used to handle the Multiline Text Field's functionality.
   */
  textarea: IntrinsicShorthandProps<'textarea'>;
};

export type MultilineCommons = Omit<TextFieldCommons, 'type' | 'prefix' | 'suffix' | 'onChange'> & {
  /**
   * Whether the Multiline should be able to resize.
   *
   * @default false
   */
  resizable?: boolean;

  /**
   * Whether Multiline should automatically adjust its height based off its content,
   *
   * @default true
   */
  autoAdjust?: boolean;

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
