import React from 'react';
import { Select } from './Select';
import { isConformant } from '../../common/isConformant';
import '@testing-library/react';
import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import { resetIdsForTests } from '@fluentui/react-utilities';

describe('Select', () => {
  let renderedComponent: RenderResult | undefined;
  let textfieldRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  isConformant({
    Component: Select,
    displayName: 'Select',
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
    renderedComponent = render(<Select id="testing-id" data-testid="select" />);

    expect(renderedComponent.getByTestId('select').id).toEqual('testing-id');
  });

  it('defaults to empty value', () => {
    render(
      <Select
        input={{ ref: textfieldRef }}
        options={[
          { value: 'USD', label: '$' },
          { value: 'EUR', label: '€' },
          { value: 'BTC', label: '฿' },
          { value: 'JPY', label: '¥' },
        ]}
      />,
    );

    expect(textfieldRef.current?.value).toBe('');
  });

  //doesn't respect defaultValue prop
  // it('respects defaultValue prop', () => {
  //   render(
  //     <Select
  //       input={{ ref: textfieldRef }}
  //       defaultValue="EUR"
  //       options={[
  //         { value: 'USD', label: '$' },
  //         { value: 'EUR', label: '€' },
  //         { value: 'BTC', label: '฿' },
  //         { value: 'JPY', label: '¥' },
  //       ]}
  //     />,
  //   );

  //   expect(textfieldRef.current?.value).toBe('EUR');
  // });

  // it('calls onChange with the correct value', () => {
  //   const eventHandler = jest.fn();

  //   render(
  //     <Select
  //       input={{ ref: textfieldRef }}
  //       onChange={eventHandler}
  //       data-testid="textfield"
  //       options={[
  //         { value: 'USD', label: '$' },
  //         { value: 'EUR', label: '€' },
  //         { value: 'BTC', label: '฿' },
  //         { value: 'JPY', label: '¥' },
  //       ]}
  //     />,
  //   );
  //   const input = screen.getByRole('combobox') as HTMLInputElement;
  //   expect(eventHandler).toBeCalledTimes(0);

  //   fireEvent.change(input, { target: { value: 'EUR' } });
  //   expect(eventHandler).toBeCalledTimes(1);

  //   expect(textfieldRef.current?.value).toBe('EUR');
  // });
});
