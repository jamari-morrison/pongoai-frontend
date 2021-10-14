import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type TextFieldSlots = {
  /**
   * The root of the TextField.
   */
  root: IntrinsicShorthandProps<'div'>;

  /**
   * The border around the TextField component.
   */
  textFieldBorder: IntrinsicShorthandProps<'div'>;

  /**
   * The visible label text for the TextField component.
   */
  textFieldLabel: IntrinsicShorthandProps<'span'>;

  /**
   * Hidden input used to handle the TextField's functionality.
   */
  input: IntrinsicShorthandProps<'input'>;
};

export type TextFieldCommons = {
  /**
   * The starting value for a uncontrolled TextField. If `true` then the TextField will be enabled.
   * Mutually exclusive with `value` prop.
   *
   * @default ''
   */
  defaultValue?: string;

  /**
   * The current value for a controlled TextField. If `true` then the TextField will be enabled.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: string;

  /**
   * The autocomplete hint type for the TextField.
   */
  autocomplete?: string;

  /**
   * Whether the TextField should be disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the TextField should be in an error state.
   *
   * @default false
   */
  error?: boolean;

  /**
   * The label that appears in the TextField when no value is set. When a value is set the label will still be visible.
   * Mutually exclusive with `placeholder` prop.
   */
  label?: string;

  /**
   * The label that appears in the TextField when no value is set. When a value is set the label will not be visible.
   * Mutually exclusive with `label` prop.
   */
  placeholder?: string;

  /**
   * The appearance variant to use for the TextField.
   *
   * @default outline
   */
  appearance?: 'standard' | 'outlined' | 'filled';

  /**
   * Callback to be called when the value changes.
   */
  onChange?: (
    ev: React.ChangeEvent<HTMLInputElement>,
    data: {
      value: string;
    },
  ) => void;
};

export type TextFieldProps = Omit<ComponentProps<TextFieldSlots>, 'onChange' | 'defaultValue'> & TextFieldCommons;

export type TextFieldState = ComponentState<TextFieldSlots> & TextFieldCommons;
