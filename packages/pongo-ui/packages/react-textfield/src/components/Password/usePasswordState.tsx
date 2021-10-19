import * as React from 'react';
import { useId, useControllableState, useBoolean, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import { Button } from '../../../../react-button/src/index';
import { PasswordShowIcon, PasswordHideIcon } from './defaultIcons';
import type { PasswordState } from './Password.types';

export const usePasswordState = (state: PasswordState) => {
  const { defaultValue, value, autocomplete, disabled, helperText, required, error, placeholder, label, onChange } =
    state;
  const { id } = state.root;

  const inputRef = useMergedRefs(state.input.ref);
  const labelId = label ? useId('textField-label', id) : undefined;
  const helperTextId = helperText ? useId('textField-label', id) : undefined;
  const [isPasswordVisible, { toggle: passwordVisibility }] = useBoolean(false);
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

  const onButtonPointerDown = () => passwordVisibility();

  //  Prefix Props
  !state.disabled &&
    (state.showIconWrapper.children = (
      <Button
        className="pongoai-Password-show-button"
        appearance="subtle"
        shape="circular"
        onClick={onButtonPointerDown}
      >
        {isPasswordVisible ? <PasswordHideIcon /> : <PasswordShowIcon />}
      </Button>
    ));

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

  // Input Props
  state.input.value = currentValue;
  state.input.onChange = onInputChange;
  state.input.autoComplete = autocomplete;
  state.input.disabled = disabled;
  state.input.type = isPasswordVisible ? 'text' : 'password';
  helperText && (state.input['aria-describedby'] = helperTextId);
  error && (state.input['aria-invalid'] = error);
  label && (state.input.id = labelId);
  required && (state.input.required = required);
  placeholder && (state.input.placeholder = placeholder);
  state.input.ref = inputRef;

  return state;
};
