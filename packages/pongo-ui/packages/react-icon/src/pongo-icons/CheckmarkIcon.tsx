import * as React from 'react';
import { createIcon } from '../utils/createIcon';

const CheckmarkContent = () => {
  return (
    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.83332 11.2941L12.3837 18.5619L10.5504 20.3265L3 13.0588L4.83332 11.2941ZM25 7.7647L11.25 21L9.41664 19.2353L23.1666 6L25 7.7647Z" />
    </svg>
  );
};

export const CheckmarkIcon = createIcon(
  {
    children: <CheckmarkContent />,
    'aria-label': 'Checkmark',
  },
  'Checkmark',
);
