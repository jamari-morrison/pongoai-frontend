import * as React from 'react';
import { createIcon } from '../utils/createIcon';

const IconContent = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 14C7.3284 14 8 13.3284 8 12.5C8 11.6716 7.3284 11 6.5 11C5.67157 11 5 11.6716 5 12.5C5 13.3284 5.67157 14 6.5 14ZM8 17.5C8 18.3284 7.3284 19 6.5 19C5.67157 19 5 18.3284 5 17.5C5 16.6716 5.67157 16 6.5 16C7.3284 16 8 16.6716 8 17.5ZM12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19ZM13.5 12.5C13.5 13.3284 12.8284 14 12 14C11.1716 14 10.5 13.3284 10.5 12.5C10.5 11.6716 11.1716 11 12 11C12.8284 11 13.5 11.6716 13.5 12.5ZM17.5 14C18.3284 14 19 13.3284 19 12.5C19 11.6716 18.3284 11 17.5 11C16.6716 11 16 11.6716 16 12.5C16 13.3284 16.6716 14 17.5 14ZM0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5ZM5 2C3.34315 2 2 3.34315 2 5V6H22V5C22 3.34315 20.6569 2 19 2H5ZM2 19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V8H2V19Z" />
    </svg>
  );
};

export const CalendarIcon = createIcon(
  {
    children: <IconContent />,
    'aria-label': 'Calendar',
  },
  'Calendar',
);
