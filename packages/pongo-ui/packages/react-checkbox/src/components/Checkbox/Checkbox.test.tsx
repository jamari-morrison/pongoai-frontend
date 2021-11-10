import React from 'react';
import { Checkbox } from './Checkbox';
import { isConformant } from '../../common/isConformant';
import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import { resetIdsForTests } from '@fluentui/react-utilities';

describe('Checkbox', () => {
  let renderedComponent: RenderResult | undefined;
  let checkboxRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  isConformant({
    Component: Checkbox,
    displayName: 'Checkbox',
  });

  beforeEach(() => {
    resetIdsForTests();
  });

  afterEach(() => {
    checkboxRef = React.createRef<HTMLInputElement>();
    if (renderedComponent) {
      renderedComponent.unmount();
      renderedComponent = undefined;
    }
  });

  it('respects id prop', () => {
    renderedComponent = render(
      <Checkbox id="testing-id" data-testid="checkbox">
        Default Checkbox
      </Checkbox>,
    );

    expect(renderedComponent.getByTestId('checkbox').id).toEqual('testing-id');
  });

  it('defaults to unchecked', () => {
    render(<Checkbox input={{ ref: checkboxRef }}>Default Checkbox</Checkbox>);

    expect(checkboxRef.current?.checked).toBe(false);
  });

  it('respects defaultChecked prop', () => {
    render(
      <Checkbox input={{ ref: checkboxRef }} defaultChecked>
        Default Checkbox
      </Checkbox>,
    );

    expect(checkboxRef.current?.checked).toBe(true);
  });

  it('ignores defaulChecked updates', () => {
    renderedComponent = render(<Checkbox defaultChecked input={{ ref: checkboxRef }} />);
    renderedComponent.rerender(<Checkbox defaultChecked={false} input={{ ref: checkboxRef }} />);

    expect(checkboxRef.current?.checked).toBe(true);
  });

  it('respects checked prop', () => {
    renderedComponent = render(<Checkbox checked input={{ ref: checkboxRef }} />);

    expect(checkboxRef.current?.checked).toBe(true);
  });

  it('respects checked updates', () => {
    renderedComponent = render(<Checkbox checked input={{ ref: checkboxRef }} />);
    renderedComponent.rerender(<Checkbox checked={false} input={{ ref: checkboxRef }} />);

    expect(checkboxRef.current?.checked).toBe(false);
  });

  it('calls onChange with the correct value', () => {
    const eventHandler = jest.fn();

    render(<Checkbox checked onChange={eventHandler} data-testid="checkbox" />);
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    expect(eventHandler).toBeCalledTimes(0);

    fireEvent.click(input);
    fireEvent.click(input);
    fireEvent.click(input);

    expect(eventHandler).toBeCalledTimes(3);
    expect(eventHandler.mock.calls[2][1]).toEqual({ checked: false });
  });
});
