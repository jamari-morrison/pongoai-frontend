import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { selectShorthandProps } from './useSelect';
import type { SelectState, SelectSlots } from './Select.types';

export const renderSelect = (state: SelectState) => {
  const { slots, slotProps } = getSlots<SelectSlots>(state, selectShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      <slots.textFieldWrapper {...slotProps.textFieldWrapper}>
        <slots.textFieldBorder {...slotProps.textFieldBorder}>
          {state.label !== undefined && state.appearance === 'outlined' && (
            <slots.textFieldLegend {...slotProps.textFieldLegend}>
              <span>{slotProps.textFieldLegend.children}</span>
            </slots.textFieldLegend>
          )}
        </slots.textFieldBorder>
        <slots.inputWrapper {...slotProps.inputWrapper}>
          <slots.input {...slotProps.input} />
        </slots.inputWrapper>
        {state.label !== undefined && <slots.textFieldLabel {...slotProps.textFieldLabel} />}
        <slots.selectButton {...slotProps.selectButton} />
        <slots.chevron {...slotProps.chevron} />
      </slots.textFieldWrapper>
      <slots.list {...slotProps.list} />
      {state.helperText && <slots.textFieldHelperText {...slotProps.textFieldHelperText} />}
    </slots.root>
  );
};
