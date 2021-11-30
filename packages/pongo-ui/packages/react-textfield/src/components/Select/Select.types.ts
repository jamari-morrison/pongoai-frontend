import * as React from 'react';
import { ComponentState, ComponentProps, IntrinsicShorthandProps } from '@fluentui/react-utilities';
import type { TextFieldSlots, TextFieldCommons } from '../TextField/TextField.types';

export type SelectSlots = TextFieldSlots & {
  /**
   * The Select component's toggle button that switches between showing and hiding it's list.
   */
  selectButton: IntrinsicShorthandProps<'div'>;

  /**
   * The Select list of options.
   */
  list: IntrinsicShorthandProps<'ul'>;
};

export type SelectCommons = Omit<TextFieldCommons, 'type' | 'autocomplete'> & {
  /**
   * The options to render in the Select component.
   */
  options?: { value: string; label: string }[];
};

export type SelectProps = Omit<ComponentProps<SelectSlots>, 'onChange' | 'defaultValue'> & SelectCommons;

export type SelectState = ComponentState<SelectSlots> & SelectCommons;
