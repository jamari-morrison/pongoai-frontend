import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { searchShorthandProps } from './useSearch';
import type { SearchState, SearchSlots } from './Search.types';

export const renderSearch = (state: SearchState) => {
  const { slots, slotProps } = getSlots<SearchSlots>(state, searchShorthandProps);

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
        {<slots.searchIconWrapper {...slotProps.searchIconWrapper} />}
        {state.label !== undefined && <slots.textFieldLabel {...slotProps.textFieldLabel} />}
        <slots.inputWrapper {...slotProps.inputWrapper}>
          <slots.input {...slotProps.input} />
        </slots.inputWrapper>
        {state.input.value !== '' && <slots.clearIconWrapper {...slotProps.clearIconWrapper} />}
      </slots.textFieldWrapper>
      {state.helperText && <slots.textFieldHelperText {...slotProps.textFieldHelperText} />}
    </slots.root>
  );
};
