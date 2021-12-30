import * as React from 'react';
import { Password } from './index';
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

export const BasicPasswordExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Password Text Field</Header2>
      <div className={styles.row}>
        <Password appearance="standard" placeholder="Enter your password" label="Password" />
        <Password appearance="outlined" placeholder="Enter your password" label="Password" />
        <Password appearance="filled" placeholder="Enter your password" label="Password" />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Password',
  component: Password,
};
