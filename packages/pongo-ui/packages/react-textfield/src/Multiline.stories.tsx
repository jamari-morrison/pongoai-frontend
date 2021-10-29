import * as React from 'react';
import { Multiline, TextField } from './index';
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

export const BasicMultilineExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Standard Multiline Text Field</Header2>
      <div className={styles.row}>
        <Multiline label="Standard" placeholder="Enter your text" />
        <Multiline label="Standard" placeholder="Enter your text" disabled />
        <Multiline label="Standard" placeholder="Enter your text" helperText="Error" error />
      </div>
      <Header2>Outlined Multiline Text Field</Header2>
      <div className={styles.row}>
        <Multiline appearance="outlined" placeholder="Enter your text" label="Outlined" />
        <TextField appearance="outlined" label="Outlined" placeholder="Enter your text" />
        <Multiline appearance="outlined" placeholder="Enter your text" label="Outlined" disabled />
        <Multiline appearance="outlined" label="Standard" placeholder="Enter your text" helperText="Error" error />
      </div>
      <Header2>Filled Multiline Text Field</Header2>
      <div className={styles.row}>
        <Multiline appearance="filled" placeholder="Enter your text" label="Filled" />
        <Multiline appearance="filled" placeholder="Enter your text" label="Filled" disabled />
        <Multiline appearance="filled" label="Standard" placeholder="Enter your text" helperText="Error" error />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Multiline',
  component: Multiline,
};
