import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { multilineShorthandProps } from './useMultiline';
import type { MultilineState, MultilineSlots } from './Multiline.types';

export const renderMultiline = (state: MultilineState) => {
  const { slots, slotProps } = getSlots<MultilineSlots>(state, multilineShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      <slots.textFieldBorder {...slotProps.textFieldBorder}>
        {state.label !== undefined && state.appearance === 'outlined' && (
          <slots.textFieldLegend {...slotProps.textFieldLegend}>
            <span>{slotProps.textFieldLegend.children}</span>
          </slots.textFieldLegend>
        )}
        {state.label !== undefined && <slots.textFieldLabel {...slotProps.textFieldLabel} />}
        <slots.textarea {...slotProps.textarea} />
      </slots.textFieldBorder>
      {state.helperText && <slots.textFieldHelperText {...slotProps.textFieldHelperText} />}
    </slots.root>
  );
};
