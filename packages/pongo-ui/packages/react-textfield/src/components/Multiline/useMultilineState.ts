import * as React from 'react';
import { useId, useControllableState, useBoolean, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import type { MultilineState } from './Multiline.types';

export const useMultilineState = (state: MultilineState) => {
  const {
    autoAdjust,
    defaultValue,
    value,
    autocomplete,
    disabled,
    helperText,
    required,
    error,
    placeholder,
    label,
    onChange,
  } = state;
  const { id } = state.root;

  const inputRef = useMergedRefs(state.textarea.ref);
  const labelId = label ? useId('multiline-label', id) : undefined;
  const helperTextId = helperText ? useId('multiline-label', id) : undefined;
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

  /**
   * Updates the textarea height to the current scroll height.
   */
  const updateTextareaHeight = React.useCallback(() => {
    inputRef.current!.style.height = '';
    inputRef.current!.style.height = inputRef.current!.scrollHeight + 'px';
  }, []);

  const onInputChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateValue(ev.target.value, ev);
      autoAdjust && updateTextareaHeight();
    },
    [updateValue, autoAdjust, updateTextareaHeight],
  );

  const onClick = React.useCallback(ev => {
    ev.preventDefault();
    ev.stopPropagation();
    inputRef.current!.focus();
  }, []);

  // Border Props
  state.textFieldBorder['aria-hidden'] = true;
  state.textFieldBorder.onClick = onClick;

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
  // state.textarea.style = textareaStyles;
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
