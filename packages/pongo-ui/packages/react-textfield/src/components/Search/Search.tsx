import * as React from 'react';
import { useSearch } from './useSearch';
import { renderSearch } from './renderSearch';
import { useSearchStyles } from './useSearchStyles';
import type { SearchProps } from './Search.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Search Text Field provides tools and quick access to find information.
 */
export const Search: ForwardRefComponent<SearchProps> = React.forwardRef((props, ref) => {
  const state = useSearch(props, ref);

  useSearchStyles(state);

  return renderSearch(state);
});
Search.displayName = 'Search';
