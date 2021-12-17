import * as React from 'react';
import { clamp, useControllableState, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import { useFluent } from '@fluentui/react-shared-contexts';
import type { RatingState } from './Rating.types';
import { RatingStarIcon } from './DefaultIcons';

export const activeStarClassName = 'star-active';
export const inactiveStarClassName = 'star-inactive';
export const disabledActiveStarClassName = 'disabled-star-active';
export const disabledInactiveStarClassName = 'disabled-star-inactive';

/**
 * Calculates the current position of the Rating
 */
const calculateSteps = (
  ev: React.PointerEvent<HTMLDivElement>,
  starWrapperRef: React.RefObject<HTMLDivElement>,
  min: number,
  max: number,
  step: number,
  dir: 'ltr' | 'rtl',
) => {
  const currentBounds = starWrapperRef?.current?.getBoundingClientRect();
  const sliderSize = currentBounds!.width || 0;
  let position;

  if (dir === 'rtl') {
    position = currentBounds!.right;
  } else {
    position = currentBounds!.left;
  }

  const totalSteps = (max - min) / step;
  const stepLength = sliderSize / totalSteps;
  const thumbPosition = ev.clientX;
  const distance = dir === 'rtl' ? position - thumbPosition : thumbPosition - position;

  return clamp(min + step * (distance / stepLength), min, max);
};

const on = (
  element: Element | Window | Document,
  eventName: string,
  callback: (ev: any) => void,
  useCapture?: boolean,
) => {
  element.addEventListener(eventName, callback as unknown as (ev: Event) => void, useCapture);
  return () => element.removeEventListener(eventName, callback as unknown as (ev: Event) => void, useCapture);
};

export const useRatingState = (state: RatingState) => {
  const { value, defaultValue = 0, max = 5, step, onChange, readOnly, disabled } = state;
  const { onPointerDown: onPointerDownCallback, onKeyDown: onKeyDownCallback } = state.root;

  const { dir } = useFluent();

  const [currentValue, setCurrentValue] = useControllableState({
    state: value && clamp(value, 0, max),
    defaultState: clamp(defaultValue!, 0, max),
    initialState: 0,
  });

  const starWrapperRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const disposables = React.useRef<(() => void)[]>([]);

  /**
   * Updates the controlled `currentValue` to the new `incomingValue` and clamps it.
   */
  const updateValue = useEventCallback(
    (incomingValue: number, ev: React.ChangeEvent<HTMLInputElement> | React.PointerEvent<HTMLDivElement>): void => {
      const clampedValue = clamp(incomingValue, 0, max);

      if (clampedValue !== 0 && clampedValue !== max) {
        ev.stopPropagation();
        if (ev.type === 'keydown') {
          ev.preventDefault();
        }
      }

      onChange?.(ev, { value: clampedValue });
      setCurrentValue(clampedValue);
    },
  );

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(Number(ev.target.value), ev);
  };

  const renderStars = () => {
    const elements = [];

    for (let i = 1; i <= max; i++) {
      const isChecked = currentValue >= i;
      const starClassName = !disabled
        ? isChecked
          ? 'star-active'
          : 'star-inactive'
        : isChecked
        ? 'disabled-star-active'
        : 'disabled-star-inactive';

      elements.push(
        <span className={starClassName} key={'starWrapper-' + i}>
          <RatingStarIcon />
        </span>,
      );
    }
    return elements;
  };

  const getCount = () => {
    const gridTemplateColumnsCount = [];
    for (let i = 1; i <= max; i++) {
      gridTemplateColumnsCount.push('25%');
    }
    return gridTemplateColumnsCount.join('');
  };

  const onPointerMove = React.useCallback(
    (ev: React.PointerEvent<HTMLDivElement>): void => {
      const position = calculateSteps(ev, starWrapperRef, 1, max, step!, dir);
      const currentStepPosition = Math.round(position / step!) * step!;

      updateValue(currentStepPosition, ev);
    },
    [dir, max, step, updateValue],
  );

  const onPointerUp = React.useCallback((ev: React.PointerEvent<HTMLDivElement>): void => {
    disposables.current.forEach(dispose => dispose());
    disposables.current = [];
    calculateSteps(ev, starWrapperRef, 1, max, step!, dir) === currentValue && updateValue(0, ev);
    console.log(calculateSteps(ev, starWrapperRef, 1, max, step!, dir));
    inputRef.current!.focus();
  }, []);

  const onStarWrapperPointerDown = React.useCallback(
    (ev: React.PointerEvent<HTMLDivElement>): void => {
      const { pointerId } = ev;
      const target = ev.target as HTMLElement;

      target.setPointerCapture?.(pointerId);

      onPointerDownCallback?.(ev);

      disposables.current.push(on(target, 'pointermove', onPointerMove), on(target, 'pointerup', onPointerUp), () => {
        target.releasePointerCapture?.(pointerId);
      });

      onPointerMove(ev);
    },
    [onPointerDownCallback, onPointerMove],
  );

  const starWrapperStyles = {
    gridTemplateColumns: getCount(),
  };

  state.starWrapper.children = renderStars();
  state.starWrapper.style = starWrapperStyles;
  state.starWrapper.ref = useMergedRefs(state.starWrapper.ref, starWrapperRef);
  if (!readOnly && !disabled) {
    state.starWrapper.onPointerDown = onStarWrapperPointerDown;
  }

  if (!readOnly) {
    state.input.ref = useMergedRefs(state.input.ref, inputRef);
    state.input.value = currentValue;
    state.input.min = 1;
    state.input.max = max;
    state.input.step = step;
    state.input.disabled = disabled;
    state.input.onChange = onInputChange;
    state.input.tabIndex = 0;
  }

  return state;
};
