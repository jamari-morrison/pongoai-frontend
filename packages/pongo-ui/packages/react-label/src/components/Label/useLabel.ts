import * as React from 'react';
import { getNativeElementProps, resolveShorthand, useId } from '@fluentui/react-utilities';
import type { LabelProps, LabelSlots, LabelState } from './Label.types';

export const labelShorthandProps: (keyof LabelSlots)[] = ['root', 'requiredIndicator'];

export const useLabel = (props: LabelProps, ref: React.Ref<HTMLElement>): LabelState => {
  const { disabled = false, required = false, size = 'medium', strong = false, requiredIndicator } = props;

  const state: LabelState = {
    disabled,
    required,
    size,
    strong,
    components: {
      root: 'label',
      requiredIndicator: 'span',
    },
    root: getNativeElementProps('label', {
      ref,
      ...props,
    }),
    requiredIndicator: resolveShorthand(requiredIndicator, { required: true, defaultProps: { children: '*' } }),
  };

  return state;
};
