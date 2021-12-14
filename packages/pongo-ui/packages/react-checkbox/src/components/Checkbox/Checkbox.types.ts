import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type CheckboxSlots = {
  /**
   * The root of the Checkbox.
   */
  root: IntrinsicShorthandProps<'span'>;

  /**
   * Hidden input used to handle the Checkbox's functionality.
   */
  input: IntrinsicShorthandProps<'input'>;

  /**
   * The indicator for the checkbox.
   */
  indicator: IntrinsicShorthandProps<'div'>;
};

export type CheckboxCommons = {
  /**
   * The starting value for a uncontrolled Checkbox. If `true` then the Checkbox will be enabled.
   * Mutually exclusive with `checked` prop.
   *
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * The current value for a controlled Checkbox. If `true` then the Checkbox will be enabled.
   * Mutually exclusive with `defaultChecked` prop.
   */
  checked?: boolean;

  /**
   * Whether the Checkbox should be disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback to be called when the `checked` value changes.
   */
  onChange?: (
    ev: React.FormEvent<HTMLInputElement>,
    data: {
      checked: boolean;
    },
  ) => void;

  /**
   * The color of the Checkbox.
   *
   * @default inherit
   */
  color?: 'inherit' | 'brand' | 'secondary' | 'success' | 'error' | 'social' | 'warning' | 'info';

  /**
   * The size of the Checkbox.
   *
   * * Medium - `20px`
   * * Large - `24px`
   *
   * *Note that this only changes the visible size of the indicator and not the touch target size of 34px*
   *
   * @default medium
   */
  size?: 'medium' | 'large';
};

export interface CheckboxProps extends Omit<ComponentProps<CheckboxSlots>, 'onChange' | 'color'>, CheckboxCommons {}

export type CheckboxState = ComponentState<CheckboxSlots> & CheckboxCommons;
