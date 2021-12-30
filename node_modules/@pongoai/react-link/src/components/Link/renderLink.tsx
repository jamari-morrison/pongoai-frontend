import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { linkShorthandProps } from './useLink';
import type { LinkState, LinkSlots } from './Link.types';

export const renderLink = (state: LinkState) => {
  const { slots, slotProps } = getSlots<LinkSlots>(state, linkShorthandProps);

  return <slots.root {...slotProps.root} />;
};
