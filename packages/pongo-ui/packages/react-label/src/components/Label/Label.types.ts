import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type LabelSlots = {
  /**
   * The root of the Label.
   */
  root: IntrinsicShorthandProps<'label'>;

  /**
   * The required indicator for the Label.
   */
  requiredIndicator: IntrinsicShorthandProps<'span'>;
};

export type LabelCommons = {
  /**
   * Whether the Label should be disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, then the component will be indicated as required.
   *
   * @default false
   */
  required?: boolean;

  /**
   * The size of the Label
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Whether to set the font weight to strong for the Label component.
   *
   * @default false
   */
  strong?: boolean;
};

export type LabelProps = Omit<ComponentProps<LabelSlots>, 'required'> & LabelCommons;

export type LabelState = ComponentState<LabelSlots> & LabelCommons;
