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
      ev.preventDefault();
      return clamp(currentValue + 1, 0, max);
    }
    case 'ArrowUp': {
      ev.preventDefault();
      return clamp(currentValue - 1, 0, max);
    }
    case 'Home': {
      ev.preventDefault();
      return 0;
    }
    case 'End': {
      ev.preventDefault();
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
    helperText,
    suffix,
    prefix,
    label,
    onChange,
    error,
    disabled,
    required,
  } = state;
  const { id } = state.root;

  const labelId = label ? useId('select-label', id) : undefined;
  const helperTextId = helperText ? useId('select-label', id) : undefined;

  const [visible, { setFalse: setVisibleFalse, toggle: toggleVisible }] = useBoolean(false);
  const [currentOptionIndex, setCurrentOptionIndex] = React.useState(0);
  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: defaultValue,
    state: value,
    initialState: '',
  });

  const optionItemsRef = React.useRef([]);
  const selectButtonRef = React.useRef<any>(null);
  const textFieldWrapperRef = React.useRef(null);

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
    console.log(optionValue);
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
            updateValue(i, ev);
            selectButtonRef.current!.focus();
            break;
          }
        }
      };

      const onOptionKeyDown = (ev: any) => {
        ev.stopPropagation();
        // ev.preventDefault();
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
    ev.stopPropagation();
    ev.preventDefault();
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

  // TextField wrapper props
  !disabled && (state.textFieldWrapper.onClick = toggleVisible);
  state.textFieldWrapper.ref = useMergedRefs(state.textFieldWrapper.ref, textFieldWrapperRef, targetRef);

  // Prefix Props
  prefix
    ? (state.textFieldPrefix.children = prefix)
    : (state.textFieldPrefix.children = <Chevron visible={visible} disabled={disabled} />);

  // Suffix Props
  suffix && (state.textFieldSuffix.children = suffix);

  // Root Props
  state.root.onBlur = onBlur;

  // Border Props
  state.textFieldBorder['aria-hidden'] = true;

  // Label Props
  label && (state.textFieldLabel.children = label);
  label && (state.textFieldLabel.id = labelId);

  // Helper Text Props
  helperText && (state.textFieldHelperText.children = helperText);
  helperText && (state.textFieldHelperText.id = helperTextId);

  // Legend Props
  label && (state.textFieldLegend.children = label);

  // List Props
  state.list.children = visible && createOptions;
  state.list.style = listStyles;
  state.list.ref = useMergedRefs(state.list.ref, containerRef);

  // Select Props
  state.selectButton.children = options[currentOptionIndex]?.label;
  state.selectButton.ref = useMergedRefs(state.selectButton.ref, selectButtonRef);
  state.selectButton.role = 'combobox';
  state.selectButton.tabIndex = disabled ? -1 : 0;
  !disabled && (state.selectButton.onKeyUp = onKeyUp);
  state.selectButton['aria-haspopup'] = 'listbox';
  state.selectButton['aria-expanded'] = visible;
  required && (state.selectButton['aria-required'] = required);
  disabled && (state.selectButton['aria-disabled'] = disabled);
  error && (state.selectButton['aria-invalid'] = error);
  helperText && (state.selectButton['aria-describedby'] = helperTextId);
  label && (state.selectButton['aria-labelledby'] = labelId);

  // Input Props
  state.input.tabIndex = -1;
  state.input.value = currentValue;

  return state;
};
