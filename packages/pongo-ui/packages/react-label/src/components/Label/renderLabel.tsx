import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { labelShorthandProps } from './useLabel';
import type { LabelState, LabelSlots } from './Label.types';

export const renderLabel = (state: LabelState) => {
  const { slots, slotProps } = getSlots<LabelSlots>(state, labelShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      {state.root.children}
      {state.required && <slots.requiredIndicator {...slotProps.requiredIndicator} />}
    </slots.root>
  );
};
