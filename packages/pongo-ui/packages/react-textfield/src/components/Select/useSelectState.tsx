import * as React from 'react';
import {
  useId,
  useControllableState,
  useBoolean,
  useEventCallback,
  useMergedRefs,
  clamp,
} from '@fluentui/react-utilities';
import { Chevron } from './defaultIcons';
import { usePopper } from '@fluentui/react-positioning';
import type { SelectState } from './Select.types';

export const listClassName = 'pongoai-Select-list-option';

const getKeyDownValue = (ev: any, currentValue: number, max: number) => {
  switch (ev.key) {
    case 'ArrowDown': {
      return clamp(currentValue + 1, 0, max);
    }
    case 'ArrowUp': {
      return clamp(currentValue - 1, 0, max);
    }
    case 'Home': {
      return 0;
    }
    case 'End': {
      return max;
    }
  }
  return clamp(currentValue, 0, max);
};

export const useSelectState = (state: SelectState) => {
  const {
    defaultValue,
    options = [],
    value,
    disabled,
    helperText,
    required,
    error,
    placeholder,
    label,
    onChange,
  } = state;
  const { id } = state.root;

  // const inputRef = useMergedRefs(state.input.ref);
  const labelId = label ? useId('select-label', id) : undefined;
  const helperTextId = helperText ? useId('select-label', id) : undefined;
  const [visible, { setTrue: setVisibleTrue, setFalse: setVisibleFalse, toggle: toggleVisible }] = useBoolean(false);
  const [currentOptionIndex, setCurrentOptionIndex] = React.useState(0);
  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: defaultValue,
    state: value,
    initialState: '',
  });

  const optionItemsRef = React.useRef([]);
  const selectButtonRef = React.useRef<any>(null);
  const internalState = React.useRef({
    focusedValue: 0,
  });

  const popperOptions = {
    position: 'below' as const,
    visible: visible,
  };

  const { targetRef, containerRef } = usePopper(popperOptions);

  const updateValue = useEventCallback((incomingValue: number, ev: React.ChangeEvent<HTMLInputElement>): void => {
    const clampedValue = clamp(incomingValue, 0, options.length - 1);
    const optionValue = options[clampedValue].value;

    internalState.current.focusedValue = clampedValue;
    setCurrentValue(optionValue);
    setVisibleFalse();
    setCurrentOptionIndex(clampedValue);
    onChange?.(ev, { value: optionValue });
  });

  const createOptions = React.useMemo(() => {
    const items = [];

    for (let i = 0; i < options.length; i++) {
      const value = options[i].value;
      const label = options[i].label;

      const onOptionClick = (ev: React.ChangeEvent<HTMLInputElement>) => {
        updateValue(i, ev);
        setVisibleFalse();
      };

      const onOptionKeyUp = (ev: any) => {
        ev.stopPropagation();
        switch (ev.key) {
          case 'Escape': {
            selectButtonRef.current!.focus();
            setVisibleFalse();
            break;
          }
          case ' ': {
            selectButtonRef.current!.focus();
            updateValue(i, ev);
            break;
          }
          case 'Enter': {
            selectButtonRef.current!.focus();
            updateValue(i, ev);
            break;
          }
        }
      };

      const onOptionKeyDown = (ev: any) => {
        ev.stopPropagation();
        const incomingValue = getKeyDownValue(ev, internalState.current.focusedValue, options.length - 1);
        internalState.current.focusedValue = incomingValue;
        (optionItemsRef.current[internalState.current.focusedValue] as any).current.focus();
      };

      (optionItemsRef.current[i] as any) = React.createRef();

      items.push(
        <li
          className={
            options[i].value === options[currentOptionIndex].value
              ? listClassName + ' active'
              : listClassName + ' inactive'
          }
          ref={optionItemsRef.current[i]}
          role="option"
          aria-selected={options[i].value === options[currentOptionIndex].value}
          data-value={value}
          onClick={onOptionClick as any}
          onKeyUp={onOptionKeyUp}
          onKeyDown={onOptionKeyDown}
          key={i}
          tabIndex={-1}
        >
          {label}
        </li>,
      );
    }
    return items;
  }, [options, currentOptionIndex]);

  const onKeyUp = (ev: any) => {
    //ev.preventDefault();
    ev.stopPropagation();
    switch (ev.key) {
      case 'Escape': {
        setVisibleFalse();
        break;
      }
      case ' ': {
        toggleVisible();
        break;
      }
      case 'Enter': {
        toggleVisible();
        break;
      }
    }
  };

  const onBlur = React.useCallback(
    ev => {
      // Call if no inner child element maintains focus.
      !ev.currentTarget.contains(ev.relatedTarget) && setVisibleFalse();
    },
    [setVisibleFalse],
  );

  React.useEffect(() => {
    visible && (optionItemsRef.current[internalState.current.focusedValue] as any).current.focus();
  }, [visible]);

  const listStyles = {
    opacity: visible ? 1 : 0,
  };

  // Root Props
  state.root.onBlur = onBlur;

  // Chevron Props
  state.chevron.children = <Chevron visible={visible} />;

  // Border Props
  state.textFieldBorder['aria-hidden'] = true;

  // Label Props
  label !== undefined && (state.textFieldLabel.children = label);
  label !== undefined && (state.textFieldLabel.htmlFor = labelId);

  // Helper Text Props
  helperText && (state.textFieldHelperText.children = helperText);
  helperText && (state.textFieldHelperText.id = helperTextId);

  // Legend Props
  label !== undefined && (state.textFieldLegend.children = label);

  // List Props
  state.list.children = visible && createOptions;
  state.list.style = listStyles;
  state.list.ref = useMergedRefs(state.list.ref, containerRef);

  // Select Props
  state.selectButton.children = options[currentOptionIndex]?.label;
  state.selectButton.onClick = toggleVisible;
  state.selectButton.ref = useMergedRefs(state.selectButton.ref, selectButtonRef, targetRef);
  state.selectButton.role = 'button';
  state.selectButton.tabIndex = 0;
  state.selectButton.onKeyUp = onKeyUp;
  state.selectButton['aria-haspopup'] = 'listbox';
  state.selectButton['aria-expanded'] = visible;

  // Input Props
  state.input.tabIndex = -1;
  //state.input.value = currentValue;
  // state.input.onChange = onInputChange;
  // state.input.autoComplete = autocomplete;
  // state.input.disabled = disabled;
  // helperText && (state.input['aria-describedby'] = helperTextId);
  // error && (state.input['aria-invalid'] = error);
  // label && (state.input.id = labelId);
  // required && (state.input.required = required);
  // placeholder && (state.input.placeholder = placeholder);
  // state.input.ref = inputRef;

  return state;
};
