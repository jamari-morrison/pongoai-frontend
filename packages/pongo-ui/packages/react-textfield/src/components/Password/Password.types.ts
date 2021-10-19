import * as React from 'react';
import { ComponentState, ComponentProps, IntrinsicShorthandProps } from '@fluentui/react-utilities';
import type { TextFieldSlots, TextFieldCommons } from '../TextField/TextField.types';

export type PasswordSlots = Omit<TextFieldSlots, 'textFieldSuffix' | 'textFieldPrefix'> & {
  /**
   * The show icon for the Password component.
   */
  showIconWrapper: IntrinsicShorthandProps<'span'>;
};

export type PasswordCommons = Omit<TextFieldCommons, 'type' | 'prefix' | 'suffix'> & {};

export type PasswordProps = Omit<ComponentProps<PasswordSlots>, 'onChange' | 'defaultValue'> & PasswordCommons;

export type PasswordState = ComponentState<PasswordSlots> & PasswordCommons;
