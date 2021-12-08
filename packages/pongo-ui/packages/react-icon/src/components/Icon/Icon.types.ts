import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type IconSlots = {
  /**
   * The root of the Icon.
   */
  root: IntrinsicShorthandProps<'span'>;
};

export type IconCommons = {
  /**
   * The color type for the Icon.
   */
  color?: 'inherit' | 'brand' | 'secondary' | 'success' | 'error' | 'social' | 'warning' | 'info' | 'neutral';

  /**
   * The size of the Icon.
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
};

export type IconProps = ComponentProps<IconSlots> & IconCommons;

export type IconState = ComponentState<IconSlots> & IconCommons;
