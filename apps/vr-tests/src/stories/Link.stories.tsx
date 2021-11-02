import * as React from 'react';
import { Link } from '../../../../packages/pongo-ui/packages/react-link/src/index';
import { makeStyles } from '@fluentui/react-make-styles';
import { webLightTheme } from '@pongoai/react-theme';
import { FluentProvider } from '@fluentui/react-provider';

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
    <FluentProvider theme={webLightTheme}>
      <div className={styles.root}>
        <div className={styles.row}>
          <Link>Basic Link</Link>
        </div>
        <div className={styles.row}>
          <Link disabled>Link Disabled</Link>
        </div>
      </div>
    </FluentProvider>
  );
};

export default {
  title: 'Components/Link',
  component: Link,
};
