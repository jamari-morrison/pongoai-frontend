import * as React from 'react';
import { TextField } from './index';
import { Header2 } from '@pongoai/react-text';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '5px',
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'row',
    gap: '10px',
  },
});

export const BasicTextFieldExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Standard Text Field</Header2>
      <div className={styles.row}>
        <TextField label="Standard" placeholder="Enter your text" />
        <TextField label="Standard" placeholder="Enter your text" disabled />
        <TextField label="Standard" placeholder="Enter your text" helperText="Error" error />
      </div>
      <Header2>Outlined Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="outlined" placeholder="Enter your text" label="Outlined" />
        <TextField appearance="outlined" placeholder="Enter your text" label="Outlined" disabled />
        <TextField appearance="outlined" label="Standard" placeholder="Enter your text" helperText="Error" error />
      </div>
      <Header2>Filled Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="filled" placeholder="Enter your text" label="Filled" />
        <TextField appearance="filled" placeholder="Enter your text" label="Filled" disabled />
        <TextField appearance="filled" label="Standard" placeholder="Enter your text" helperText="Error" error />
      </div>
      <Header2>Required Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="standard" placeholder="Enter your name" label="Required *" required />
      </div>
    </div>
  );
};

export const TextFieldPasswordExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Password Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="standard" placeholder="Enter your password" label="Password" type="password" />
        <TextField appearance="outlined" placeholder="Enter your password" label="Password" type="password" />
        <TextField appearance="filled" placeholder="Enter your password" label="Password" type="password" />
      </div>
    </div>
  );
};

export const TextFieldSearchExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Search Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="standard" placeholder="Type to find..." label="Search surveys" type="search" />
        <TextField appearance="outlined" placeholder="Type to find..." label="Search surveys" type="search" />
        <TextField appearance="filled" placeholder="Type to find..." label="Search surveys" type="search" />
      </div>
    </div>
  );
};

export const TextFieldNumberExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Number Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="standard" placeholder="Enter your age" label="Age" type="number" />
        <TextField appearance="outlined" placeholder="Enter your age" label="Age" type="number" />
        <TextField appearance="filled" placeholder="Enter your age" label="Age" type="number" />
      </div>
    </div>
  );
};

export default {
  title: 'Components/TextField',
  component: TextField,
};
