import * as React from 'react';
import { Link } from './Link';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('Link', () => {
  isConformant({
    Component: Link as any,
    displayName: 'Link',
  });

  it('renders as a button', () => {
    const { container } = render(<Link className="root" as="button" />);
    const link = container.querySelector('.root');
    expect(link?.tagName).toEqual('BUTTON');
  });

  it('renders as an anchor', () => {
    const { container } = render(<Link className="root" as="a" />);
    const link = container.querySelector('.root');
    expect(link?.tagName).toEqual('A');
  });
});
