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
      <Header2>Standard TextField</Header2>
      <div className={styles.row}>
        <TextField label="Password" />
        <TextField disabled />
        <TextField error label="Error" defaultValue="Hello World" />
      </div>
      <Header2>Outlined TextField</Header2>
      <div className={styles.row}>
        <TextField appearance="outlined" />
        <TextField appearance="outlined" disabled />
        <TextField error appearance="outlined" label="Error" defaultValue="Hello World" />
      </div>
      <Header2>Filled TextField</Header2>
      <div className={styles.row}>
        <TextField appearance="filled" placeholder="hello" />
        <TextField appearance="filled" disabled />
        <TextField error appearance="filled" label="Error" defaultValue="Hello World" />
      </div>
    </div>
  );
};

export default {
  title: 'Components/TextField',
  component: TextField,
};
