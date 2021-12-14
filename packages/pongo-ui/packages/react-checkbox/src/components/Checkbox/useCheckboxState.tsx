import * as React from 'react';
import { useControllableState, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import { CheckmarkIcon } from './DefaultIcons';
import type { CheckboxState } from './Checkbox.types';

export const useCheckboxState = (state: CheckboxState) => {
  const { defaultChecked, checked, disabled, onChange, size } = state;

  const inputRef = useMergedRefs(state.input.ref);

  const [internalValue, setInternalValue] = useControllableState({
    defaultState: defaultChecked,
    state: checked,
    initialState: false,
  });

  const setChecked = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>, incomingValue: boolean) => {
      onChange?.(ev, { checked: incomingValue });
      setInternalValue(incomingValue);
    },
    [onChange, setInternalValue],
  );

  const userOnChange = state.input.onChange;

  const onInputChange = useEventCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.stopPropagation();
    userOnChange?.(ev);
    setChecked(ev, ev.currentTarget.checked);
  });

  // Indicator Props
  state.indicator.children = internalValue && <CheckmarkIcon size={size!} />;
  // Input Props
  state.input.onChange = onInputChange;
  state.input.checked = internalValue;
  state.input.disabled = disabled;
  state.input.ref = inputRef;

  return state;
};
