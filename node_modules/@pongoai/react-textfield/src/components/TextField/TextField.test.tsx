import React from 'react';
import { TextField } from './TextField';
import { isConformant } from '../../common/isConformant';
import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { resetIdsForTests } from '@fluentui/react-utilities';

//credit to https://github.com/microsoft/fluentui for being the base of this set of tests
describe('TextField', () => {
  let renderedComponent: RenderResult | undefined;
  let textfieldRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  isConformant({
    Component: TextField,
    displayName: 'TextField',
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
    renderedComponent = render(
      <TextField id="testing-id" data-testid="textfield">
        Default textfield
      </TextField>,
    );

    expect(renderedComponent.getByTestId('textfield').id).toEqual('testing-id');
  });

  it('defaults to empty', () => {
    render(<TextField input={{ ref: textfieldRef }}>Default textfield</TextField>);

    expect(textfieldRef.current?.value).toBe('');
  });

  it('respects defaultValue prop', () => {
    render(
      <TextField input={{ ref: textfieldRef }} defaultValue="default">
        Default textfield
      </TextField>,
    );

    expect(textfieldRef.current?.value).toBe('default');
  });

  it('calls onChange with the correct value', () => {
    const eventHandler = jest.fn();

    render(<TextField input={{ ref: textfieldRef }} onChange={eventHandler} data-testid="textfield" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(eventHandler).toBeCalledTimes(0);

    fireEvent.change(input, { target: { value: 'changed' } });

    expect(eventHandler).toBeCalledTimes(2);

    expect(textfieldRef.current?.value).toBe('changed');
  });

  it('does not call onChange when disabled', () => {
    const eventHandler = jest.fn();

    render(<TextField disabled input={{ ref: textfieldRef }} onChange={eventHandler} data-testid="textfield" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(eventHandler).toBeCalledTimes(0);

    userEvent.type(input, 'changed');

    expect(eventHandler).toBeCalledTimes(0);

    expect(textfieldRef.current?.value).toBe('');
  });

  it('only accepts numbers when configured to number', () => {
    const eventHandler = jest.fn();

    render(<TextField number input={{ ref: textfieldRef }} onChange={eventHandler} data-testid="textfield" />);
    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(eventHandler).toBeCalledTimes(0);

    userEvent.type(input, '123abc123abc');

    expect(eventHandler).toBeCalledTimes(12);

    expect(textfieldRef.current?.value).toBe('123123');
  });
});
