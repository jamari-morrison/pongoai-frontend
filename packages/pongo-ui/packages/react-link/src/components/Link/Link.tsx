import * as React from 'react';
import { useLink } from './useLink';
import { renderLink } from './renderLink';
import { useLinkStyles } from './useLinkStyles';
import type { LinkProps } from './Link.types';

/**
 * The Link control allows you to easily customize your anchor elements.
 */
export const Link = React.forwardRef<HTMLElement, LinkProps>((props, ref) => {
  const state = useLink(props, ref);

  useLinkStyles(state);

  return renderLink(state);
});
Link.displayName = 'Link';
