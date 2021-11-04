import { Multiline } from './Multiline';
import { isConformant } from '../../common/isConformant';
import '@testing-library/react';
import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { resetIdsForTests } from '@fluentui/react-utilities';
import userEvent from '@testing-library/user-event';

describe('Multiline', () => {
  let renderedComponent: RenderResult | undefined;
  let textfieldRef: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

  isConformant({
    Component: Multiline,
    displayName: 'Multiline',
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
    textfieldRef = React.createRef<HTMLTextAreaElement>();
    if (renderedComponent) {
      renderedComponent.unmount();
      renderedComponent = undefined;
    }
  });

  it('respects id prop', () => {
    renderedComponent = render(<Multiline id="testing-id" data-testid="textfield" />);

    expect(renderedComponent.getByTestId('textfield').id).toEqual('testing-id');
  });

  it('defaults to empty', () => {
    render(<Multiline textarea={{ ref: textfieldRef }} />);

    expect(textfieldRef.current?.value).toBe('');
  });

  it('respects defaultValue prop', () => {
    render(<Multiline textarea={{ ref: textfieldRef }} defaultValue="default" />);

    expect(textfieldRef.current?.value).toBe('default');
  });

  it('calls onChange with the correct value', () => {
    const eventHandler = jest.fn();

    render(<Multiline textarea={{ ref: textfieldRef }} onChange={eventHandler} data-testid="textfield" />);
    const input = screen.getByTestId('test-id') as HTMLTextAreaElement;

    expect(eventHandler).toBeCalledTimes(0);

    //userEvent.type(input, 'abcd');
    fireEvent.change(input, { target: { value: 'changed' } });

    expect(eventHandler).toBeCalledTimes(2);

    expect(textfieldRef.current?.value).toBe('changed');
  });

  it('does not call onChange when disabled', () => {
    const eventHandler = jest.fn();

    render(<Multiline disabled textarea={{ ref: textfieldRef }} onChange={eventHandler} data-testid="textfield" />);
    const input = screen.getByTestId('test-id') as HTMLTextAreaElement;
    expect(eventHandler).toBeCalledTimes(0);

    userEvent.type(input, 'abcd');

    expect(eventHandler).toBeCalledTimes(0);

    expect(textfieldRef.current?.value).toBe('');
  });
});
