import * as React from 'react';
import { Select } from './index';
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

export const BasicSelectExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Basic Select</Header2>
      <div className={styles.row}>
        <Select
          appearance="standard"
          placeholder="Enter your password"
          label="Select"
          options={[
            { value: 'USD', label: '$' },
            { value: 'EUR', label: '€' },
            { value: 'BTC', label: '฿' },
            { value: 'JPY', label: '¥' },
          ]}
        />
        <Select
          appearance="outlined"
          label="Select"
          options={[
            { value: 'USD', label: '$' },
            { value: 'EUR', label: '€' },
            { value: 'BTC', label: '฿' },
            { value: 'JPY', label: '¥' },
          ]}
        />
        <Select
          appearance="filled"
          label="Select"
          options={[
            { value: 'USD', label: '$' },
            { value: 'EUR', label: '€' },
            { value: 'BTC', label: '฿' },
            { value: 'JPY', label: '¥' },
          ]}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Select',
  component: Select,
};
