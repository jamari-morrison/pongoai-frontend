import * as React from 'react';
import { Select } from './index';
import { Header2 } from '@pongoai/react-text';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '35px',
  },
  smallSelect: {
    width: '180px',
    height: '50px',
  },
});

const CalendarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.5 18C11.3284 18 12 17.3284 12 16.5C12 15.6716 11.3284 15 10.5 15C9.67157 15 9 15.6716 9 16.5C9 17.3284 9.67157 18 10.5 18ZM12 21.5C12 22.3284 11.3284 23 10.5 23C9.67157 23 9 22.3284 9 21.5C9 20.6716 9.67157 20 10.5 20C11.3284 20 12 20.6716 12 21.5ZM16 23C16.8284 23 17.5 22.3284 17.5 21.5C17.5 20.6716 16.8284 20 16 20C15.1716 20 14.5 20.6716 14.5 21.5C14.5 22.3284 15.1716 23 16 23ZM17.5 16.5C17.5 17.3284 16.8284 18 16 18C15.1716 18 14.5 17.3284 14.5 16.5C14.5 15.6716 15.1716 15 16 15C16.8284 15 17.5 15.6716 17.5 16.5ZM21.5 18C22.3284 18 23 17.3284 23 16.5C23 15.6716 22.3284 15 21.5 15C20.6716 15 20 15.6716 20 16.5C20 17.3284 20.6716 18 21.5 18ZM4 9C4 6.23858 6.23858 4 9 4H23C25.7614 4 28 6.23858 28 9V23C28 25.7614 25.7614 28 23 28H9C6.23858 28 4 25.7614 4 23V9ZM9 6C7.34315 6 6 7.34315 6 9V10H26V9C26 7.34315 24.6569 6 23 6H9ZM6 23C6 24.6569 7.34315 26 9 26H23C24.6569 26 26 24.6569 26 23V12H6V23Z"
      fill="#636364"
    />
  </svg>
);

const moneyOptions = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
];

const dateOptions = [
  { value: 'Jan', label: 'January' },
  { value: 'Feb', label: 'February' },
  { value: 'Mar', label: 'March' },
  { value: 'Apr', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'Jun', label: 'June' },
  { value: 'Jul', label: 'July' },
  { value: 'Aug', label: 'August' },
  { value: 'Sept', label: 'September' },
  { value: 'Oct', label: 'October' },
  { value: 'Nov', label: 'November' },
  { value: 'Dec', label: 'December' },
];

export const BasicSelectExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Basic Select</Header2>
      <div className={styles.row}>
        <Select appearance="standard" label="Select" options={moneyOptions} />
        <Select appearance="outlined" label="Select" options={moneyOptions} />
        <Select appearance="filled" label="Select" options={moneyOptions} />
      </div>
      <Header2>Suffix</Header2>
      <div className={styles.row}>
        <Select appearance="standard" label="Choose a date" options={dateOptions} suffix={<CalendarIcon />} />
        <Select appearance="outlined" label="Choose a date" options={dateOptions} suffix={<CalendarIcon />} />
        <Select appearance="filled" label="Choose a date" options={dateOptions} suffix={<CalendarIcon />} />
      </div>
      <Header2>Reduced size</Header2>
      <div className={styles.row}>
        <Select
          className={styles.smallSelect}
          appearance="standard"
          label="Choose a date"
          options={dateOptions}
          prefix={<CalendarIcon />}
        />
        <Select
          className={styles.smallSelect}
          appearance="outlined"
          label="Choose a date"
          options={dateOptions}
          prefix={<CalendarIcon />}
        />
        <Select
          className={styles.smallSelect}
          appearance="filled"
          label="Choose a date"
          options={dateOptions}
          prefix={<CalendarIcon />}
        />
      </div>
      <Header2>Disabled</Header2>
      <div className={styles.row}>
        <Select appearance="standard" disabled options={dateOptions} />
        <Select appearance="outlined" disabled options={dateOptions} />
        <Select appearance="filled" disabled options={dateOptions} />
      </div>
      <Header2>Error</Header2>
      <div className={styles.row}>
        <Select appearance="standard" label="Choose a date" helperText="Error" error options={dateOptions} />
        <Select appearance="outlined" label="Choose a date" helperText="Error" error options={dateOptions} />
        <Select appearance="filled" label="Choose a date" helperText="Error" error options={dateOptions} />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Select',
  component: Select,
};
