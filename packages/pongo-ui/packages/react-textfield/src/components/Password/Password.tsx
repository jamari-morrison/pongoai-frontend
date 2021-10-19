import * as React from 'react';
import { usePassword } from './usePassword';
import { renderPassword } from './renderPassword';
import { usePasswordStyles } from './usePasswordStyles';
import type { PasswordProps } from './Password.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Password Text Field allows for users to write hidden text.
 */
export const Password: ForwardRefComponent<PasswordProps> = React.forwardRef((props, ref) => {
  const state = usePassword(props, ref);

  usePasswordStyles(state);

  return renderPassword(state);
});
Password.displayName = 'Password';
