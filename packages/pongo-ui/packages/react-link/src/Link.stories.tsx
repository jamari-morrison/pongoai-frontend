import * as React from 'react';
import { Link } from './index';
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
    flexDirection: 'column',
    gap: '10px',
  },
});
export const BasicLinkExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Basic Example</Header2>
      <div className={styles.row}>
        <Link>Basic</Link>
        <Link disabled>Basic</Link>
        <Link disabled>Basic</Link>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Link',
  component: Link,
};
