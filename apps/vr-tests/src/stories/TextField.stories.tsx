import * as React from 'react';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';
import { TextField, Password, Search, Select } from '../../../../packages/pongo-ui/packages/react-textfield/src/index';
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
});

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

const TestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.3594 2.18624L27.0189 13.9631C27.5254 15.593 29.0056 16.7592 30.7432 16.7592H42.5856C42.9867 16.7592 43.3071 17.0017 43.445 17.4454C43.5841 17.8931 43.4653 18.3415 43.0946 18.6231L33.5139 25.9016C32.1502 26.9376 31.6099 28.7379 32.1135 30.3583L35.773 42.1352C35.9319 42.6466 35.7416 43.0706 35.4226 43.3129C35.1136 43.5477 34.7509 43.5761 34.4045 43.3129L24.8238 36.0344C23.4429 34.9853 21.5571 34.9853 20.1762 36.0344L10.5955 43.3129C10.2491 43.5761 9.8864 43.5477 9.57739 43.3129C9.25844 43.0706 9.0681 42.6466 9.22701 42.1352L12.8865 30.3583C13.3901 28.7379 12.8498 26.9376 11.4861 25.9016L1.90537 18.6231C1.53466 18.3415 1.41587 17.8931 1.555 17.4454C1.69287 17.0017 2.01329 16.7592 2.41441 16.7592H14.2568C15.9944 16.7592 17.4746 15.593 17.9811 13.9631L21.6406 2.18624C21.9249 1.27125 23.0751 1.27126 23.3594 2.18624Z"
      fill="#FFC83D"
      stroke="black"
      stroke-width="3"
    />
  </svg>
);

export const BasicTextFieldExample = () => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.root}>
        <div className={styles.row}>
          <TextField label="Standard" placeholder="Enter your text" />
          <TextField label="Standard" placeholder="Enter your text" disabled />
          <TextField label="Standard" placeholder="Enter your text" helperText="Error" error />
        </div>
        <div className={styles.row}>
          <TextField appearance="outlined" placeholder="Enter your text" label="Outlined" />
          <TextField appearance="outlined" placeholder="Enter your text" label="Outlined" disabled />
          <TextField appearance="outlined" label="Standard" placeholder="Enter your text" helperText="Error" error />
        </div>
        <div className={styles.row}>
          <TextField appearance="filled" placeholder="Enter your text" label="Filled" />
          <TextField appearance="filled" placeholder="Enter your text" label="Filled" disabled />
          <TextField appearance="filled" label="Standard" placeholder="Enter your text" helperText="Error" error />
        </div>
        <div className={styles.row}>
          <TextField appearance="standard" placeholder="Enter your name" label="Required *" required />
          <TextField appearance="filled" placeholder="Enter your name" label="Required *" required />
          <TextField appearance="outlined" placeholder="Enter your name" label="Required *" required />
        </div>
        <div className={styles.row}>
          <Password appearance="standard" placeholder="Enter your password" label="Password" />
          <Password appearance="outlined" placeholder="Enter your password" label="Password" />
          <Password appearance="filled" placeholder="Enter your password" label="Password" />
        </div>
        <div className={styles.row}>
          <TextField appearance="standard" suffix="https://" prefix=".com" />
          <TextField appearance="outlined" suffix="https://" prefix=".com" />
          <TextField appearance="filled" suffix="https://" prefix=".com" />
        </div>
        <div className={styles.row}>
          <TextField
            appearance="standard"
            label="Currency"
            placeholder="Enter a price"
            suffix="$"
            prefix="total"
            number
          />
          <TextField
            appearance="outlined"
            label="Currency"
            placeholder="Enter a price"
            suffix="$"
            prefix="total"
            number
          />
          <TextField
            appearance="filled"
            label="Currency"
            placeholder="Enter a price"
            suffix="$"
            prefix="total"
            number
          />
        </div>
        <div className={styles.row}>
          <TextField
            appearance="standard"
            label="Stars"
            placeholder="How many stars"
            suffix={<TestIcon />}
            prefix="total"
            helperText="Please enter a number"
            number
          />
          <TextField
            appearance="outlined"
            label="Stars"
            placeholder="How many stars"
            suffix={<TestIcon />}
            prefix="total"
            helperText="Please enter a number"
            number
          />
          <TextField
            appearance="filled"
            label="Stars"
            placeholder="How many stars"
            suffix={<TestIcon />}
            prefix="total"
            helperText="Please enter a number"
            number
          />
        </div>
        <div className={styles.row}>
          <Search appearance="standard" placeholder="Type to find..." label="Search surveys" />
          <Search appearance="outlined" placeholder="Type to find..." label="Search surveys" />
          <Search appearance="filled" placeholder="Type to find..." label="Search surveys" />
        </div>
        <div className={styles.row}>
          <TextField appearance="standard" placeholder="Enter your age" label="Age" number />
          <TextField appearance="outlined" placeholder="Enter your age" label="Age" number />
          <TextField appearance="filled" placeholder="Enter your age" label="Age" number />
        </div>
        <div className={styles.row}>
          <Select appearance="standard" label="Select" options={moneyOptions} />
          <Select appearance="outlined" label="Select" options={moneyOptions} />
          <Select appearance="filled" label="Select" options={moneyOptions} />
        </div>
        <div className={styles.row}>
          <Select appearance="standard" label="Choose a date" options={dateOptions} suffix={<TestIcon />} />
          <Select appearance="outlined" label="Choose a date" options={dateOptions} suffix={<TestIcon />} />
          <Select appearance="filled" label="Choose a date" options={dateOptions} suffix={<TestIcon />} />
        </div>
        <div className={styles.row}>
          <Select appearance="standard" label="Choose a date" options={dateOptions} prefix={<TestIcon />} />
          <Select appearance="outlined" label="Choose a date" options={dateOptions} prefix={<TestIcon />} />
          <Select appearance="filled" label="Choose a date" options={dateOptions} prefix={<TestIcon />} />
        </div>
      </div>
    </FluentProvider>
  );
};

export default {
  title: 'Components/TextField',
  component: TextField,
};
