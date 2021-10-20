import * as React from 'react';
import { useId, useControllableState, useBoolean, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import type { MultilineState } from './Multiline.types';

export const useMultilineState = (state: MultilineState) => {
  const { defaultValue, value, autocomplete, disabled, helperText, required, error, placeholder, label, onChange } =
    state;
  const { id } = state.root;

  const inputRef = useMergedRefs(state.textarea.ref);
  const labelId = label ? useId('textField-label', id) : undefined;
  const helperTextId = helperText ? useId('textField-label', id) : undefined;
  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: defaultValue,
    state: value,
    initialState: '',
  });

  /**
   * Updates the controlled `currentValue` to the new `incomingValue` and clamps it.
   */
  const updateValue = useEventCallback((incomingValue: string, ev: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onChange?.(ev, { value: incomingValue });
    setCurrentValue(incomingValue);
  });

  const onInputChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateValue(ev.target.value, ev);
  };

  // Border Props
  state.textFieldBorder['aria-hidden'] = true;

  // Label Props
  label && (state.textFieldLabel.children = label);
  label && (state.textFieldLabel.htmlFor = labelId);

  // Helper Text Props
  helperText && (state.textFieldHelperText.children = helperText);
  helperText && (state.textFieldHelperText.id = helperTextId);

  // Legend Props
  label && (state.textFieldLegend.children = label);

  // Textarea Props
  state.textarea.value = currentValue;
  state.textarea.onChange = onInputChange;
  state.textarea.autoComplete = autocomplete;
  state.textarea.disabled = disabled;
  helperText && (state.textarea['aria-describedby'] = helperTextId);
  error && (state.textarea['aria-invalid'] = error);
  label && (state.textarea.id = labelId);
  required && (state.textarea.required = required);
  placeholder && (state.textarea.placeholder = placeholder);
  state.textarea.ref = inputRef;

  return state;
};
