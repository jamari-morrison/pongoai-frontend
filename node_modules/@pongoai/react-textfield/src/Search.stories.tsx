import * as React from 'react';
import { Search } from './index';
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

export const BasicSearchExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Search Text Field</Header2>
      <div className={styles.row}>
        <Search appearance="standard" placeholder="Type to find..." label="Search surveys" />
        <Search appearance="outlined" placeholder="Type to find..." label="Search surveys" />
        <Search appearance="filled" placeholder="Type to find..." label="Search surveys" />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Search',
  component: Search,
};
