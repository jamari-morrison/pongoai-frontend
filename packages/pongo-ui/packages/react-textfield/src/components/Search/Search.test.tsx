import { Search } from './Search';
import { isConformant } from '../../common/isConformant';
import '@testing-library/react';
import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { resetIdsForTests } from '@fluentui/react-utilities';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  let renderedComponent: RenderResult | undefined;
  let textfieldRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  isConformant({
    Component: Search,
    displayName: 'Search',
    testOptions: {
      'make-styles-overrides-win': {
        callCount: 1,
      },
    } as any,
  });

  beforeEach(() => {
    resetIdsForTests();
  });

  afterEach(() => {
    textfieldRef = React.createRef<HTMLInputElement>();
    if (renderedComponent) {
      renderedComponent.unmount();
      renderedComponent = undefined;
    }
  });

  it('respects id prop', () => {
    renderedComponent = render(<Search id="testing-id" data-testid="textfield" />);

    expect(renderedComponent.getByTestId('textfield').id).toEqual('testing-id');
  });

  it('defaults to empty', () => {
    render(<Search input={{ ref: textfieldRef }} />);

    expect(textfieldRef.current?.value).toBe('');
  });

  it('respects defaultValue prop', () => {
    render(<Search input={{ ref: textfieldRef }} defaultValue="default" />);

    expect(textfieldRef.current?.value).toBe('default');
  });

  it('calls onChange with the correct value', () => {
    const eventHandler = jest.fn();

    render(<Search input={{ ref: textfieldRef }} onChange={eventHandler} data-testid="textfield" />);
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    expect(eventHandler).toBeCalledTimes(0);

    fireEvent.change(input, { target: { value: 'changed' } });

    expect(eventHandler).toBeCalledTimes(2);

    expect(textfieldRef.current?.value).toBe('changed');
  });

  it('does not call onChange when disabled', () => {
    const eventHandler = jest.fn();

    render(<Search disabled input={{ ref: textfieldRef }} onChange={eventHandler} data-testid="textfield" />);
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    expect(eventHandler).toBeCalledTimes(0);

    userEvent.type(input, 'changed');

    expect(eventHandler).toBeCalledTimes(0);

    expect(textfieldRef.current?.value).toBe('');
  });
});
