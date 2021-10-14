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
        <TextField label="Password" />
        <TextField disabled />
        <TextField error label="Error" />
      </div>
      <Header2>Outlined Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="outlined" />
        <TextField appearance="outlined" disabled />
        <TextField error appearance="outlined" label="Error" />
      </div>
      <Header2>Filled Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="filled" placeholder="hello" label="test" />
        <TextField appearance="filled" disabled />
        <TextField error appearance="filled" label="Error" />
      </div>
      <Header2>Password Text Field</Header2>
      <div className={styles.row}>
        <TextField appearance="standard" placeholder="Enter your password" label="Password" password />
        <TextField appearance="outlined" placeholder="Enter your password" label="Password" password />
        <TextField appearance="filled" placeholder="Enter your password" label="Password" password />
      </div>
    </div>
  );
};

export default {
  title: 'Components/TextField',
  component: TextField,
};
