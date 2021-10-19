import * as React from 'react';
import { ComponentState, ComponentProps, IntrinsicShorthandProps } from '@fluentui/react-utilities';
import type { TextFieldSlots, TextFieldCommons } from '../TextField/TextField.types';

export type SearchSlots = Omit<TextFieldSlots, 'textFieldSuffix' | 'textFieldPrefix'> & {
  /**
   * The search icon for the Search component.
   */
  searchIconWrapper: IntrinsicShorthandProps<'span'>;

  /**
   * The clear icon for the Search component.
   */
  clearIconWrapper: IntrinsicShorthandProps<'span'>;
};

export type SearchCommons = Omit<TextFieldCommons, 'type' | 'prefix' | 'suffix'> & {};

export type SearchProps = Omit<ComponentProps<SearchSlots>, 'onChange' | 'defaultValue'> & SearchCommons;

export type SearchState = ComponentState<SearchSlots> & SearchCommons;
