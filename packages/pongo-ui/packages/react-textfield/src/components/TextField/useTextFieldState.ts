import * as React from 'react';
import { clamp, useControllableState, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import type { TextFieldState } from './TextField.types';

export const useTextFieldState = (state: TextFieldState) => {
  const { defaultValue, value, autocomplete, disabled, error, placeholder, label, appearance, onChange } = state;

  const inputRef = useMergedRefs(state.input.ref);

  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: defaultValue,
    state: value,
    initialState: '',
  });

  /**
   * Updates the controlled `currentValue` to the new `incomingValue` and clamps it.
   */
  const updateValue = useEventCallback((incomingValue: string, ev: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(ev, { value: incomingValue });
    setCurrentValue(incomingValue);
  });

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(ev.target.value, ev);
  };

  label && (state.textFieldLabel.children = label);

  state.input.value = currentValue;
  state.input.onChange = onInputChange;
  state.input.autoComplete = autocomplete;
  state.input.disabled = disabled;
  placeholder && (state.input.placeholder = placeholder);
  state.input.ref = inputRef;

  return state;
};
