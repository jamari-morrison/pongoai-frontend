import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { passwordShorthandProps } from './usePassword';
import type { PasswordState, PasswordSlots } from './Password.types';

export const renderPassword = (state: PasswordState) => {
  const { slots, slotProps } = getSlots<PasswordSlots>(state, passwordShorthandProps);

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
        {state.label !== undefined && <slots.textFieldLabel {...slotProps.textFieldLabel} />}
        <slots.inputWrapper {...slotProps.inputWrapper}>
          <slots.input {...slotProps.input} />
        </slots.inputWrapper>
        {state.input.value !== '' && <slots.showIconWrapper {...slotProps.showIconWrapper} />}
      </slots.textFieldWrapper>
      {state.helperText && <slots.textFieldHelperText {...slotProps.textFieldHelperText} />}
    </slots.root>
  );
};
