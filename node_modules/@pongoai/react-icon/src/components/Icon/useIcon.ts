import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { IconProps, IconSlots, IconState } from './Icon.types';

export const iconShorthandProps: (keyof IconSlots)[] = ['root'];

export const useIcon = (props: IconProps, ref: React.Ref<HTMLElement>): IconState => {
  const { color, size = 'medium' } = props;

  const state: IconState = {
    color,
    size,
    components: {
      root: 'span',
    },
    root: getNativeElementProps('span', {
      ref,
      role: 'img',
      ...props,
    }),
  };

  return state;
};
