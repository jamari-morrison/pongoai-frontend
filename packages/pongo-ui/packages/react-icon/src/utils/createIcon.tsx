import * as React from 'react';
import { renderIcon, useIcon, useIconStyles } from '../components/Icon';
import type { IconProps } from '../Icon';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

export const createIcon = (defaultProps: IconProps, displayName: string) => {
  const IconComponent: ForwardRefComponent<IconProps> = React.forwardRef((props, ref) => {
    const mergedProps = { ...defaultProps, ...props };
    const state = useIcon(mergedProps as IconProps, ref);

    useIconStyles(state);

    return renderIcon(state);
  });
  IconComponent.displayName = `${displayName}Icon`;

  return React.memo(IconComponent);
};
