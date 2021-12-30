import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { LinkProps, LinkSlots, LinkState } from './Link.types';

export const linkShorthandProps: (keyof LinkSlots)[] = ['root'];

export const useLink = (props: LinkProps, ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>): LinkState => {
  const { disabled = false } = props;
  const as = props.as || (props.href ? 'a' : 'button');

  const state: LinkState = {
    disabled,
    components: {
      root: 'a',
    },
    root: getNativeElementProps(as, {
      ref,
      ...props,
      as,
    }),
  };

  return state;
};
