import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { LinkProps, LinkSlots, LinkState } from './Link.types';

export const linkShorthandProps: (keyof LinkSlots)[] = ['root'];

export const useLink = (props: LinkProps, ref: React.Ref<HTMLElement>): LinkState => {
  const { disabled = false, inline = false } = props;

  const state: LinkState = {
    disabled,
    inline,
    components: {
      root: 'a',
    },
    root: getNativeElementProps('a', {
      ref,
      ...props,
    }),
  };

  return state;
};
