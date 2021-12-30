import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type LinkSlots = {
  /**
   * The root of the Link.
   */
  root: IntrinsicShorthandProps<'a', 'button'>;
};

export type LinkCommons = {
  /**
   * Whether the Link should be disabled.
   *
   * @default false
   */
  disabled?: boolean;
};

export type LinkProps = ComponentProps<LinkSlots> & LinkCommons;

export type LinkState = ComponentState<LinkSlots> & LinkCommons;
