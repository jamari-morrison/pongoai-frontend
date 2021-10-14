import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { textFieldShorthandProps } from './useTextField';
import type { TextFieldState, TextFieldSlots } from './TextField.types';

export const renderTextField = (state: TextFieldState) => {
  const { slots, slotProps } = getSlots<TextFieldSlots>(state, textFieldShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      <slots.textFieldWrapper {...slotProps.textFieldWrapper}>
        <slots.textFieldBorder {...slotProps.textFieldBorder}>
          {state.label !== undefined && state.appearance === 'outlined' && (
            <slots.textFieldLegend {...slotProps.textFieldLegend}>
              <span>{slotProps.textFieldLegend.children}</span>
            </slots.textFieldLegend>
          )}
          {state.label !== undefined && <slots.textFieldLabel {...slotProps.textFieldLabel} />}
        </slots.textFieldBorder>
        <slots.input {...slotProps.input} />
      </slots.textFieldWrapper>
      {state.helperText && <slots.textFieldHelperText {...slotProps.textFieldHelperText} />}
    </slots.root>
  );
};
