import * as React from 'react';
import { FluentProvider } from '@fluentui/react-provider';
import { Button } from '../../../../packages/pongo-ui/packages/react-button/src/index';
import { webLightTheme } from '@pongoai/react-theme';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '10px',
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'row',
    gap: '10px',
  },
});

export const BasicButtonExample = () => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.root}>
        <div className={styles.row}>
          <Button color="inherit" appearance="outline">
            Inherit
          </Button>
          <Button color="inherit" appearance="primary">
            Inherit
          </Button>
          <Button color="inherit" appearance="subtle">
            Inherit
          </Button>
          <Button color="inherit" appearance="transparent">
            Inherit
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="brand" appearance="outline">
            Brand
          </Button>
          <Button color="brand" appearance="primary">
            Brand
          </Button>
          <Button color="brand" appearance="subtle">
            Brand
          </Button>
          <Button color="brand" appearance="transparent">
            Brand
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="secondary" appearance="outline">
            Secondary
          </Button>
          <Button color="secondary" appearance="primary">
            Secondary
          </Button>
          <Button color="secondary" appearance="subtle">
            Secondary
          </Button>
          <Button color="secondary" appearance="transparent">
            Secondary
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="success" appearance="outline">
            Success
          </Button>
          <Button color="success" appearance="primary">
            Success
          </Button>
          <Button color="success" appearance="subtle">
            Success
          </Button>
          <Button color="success" appearance="transparent">
            Success
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="error" appearance="outline">
            Error
          </Button>
          <Button color="error" appearance="primary">
            Error
          </Button>
          <Button color="error" appearance="subtle">
            Error
          </Button>
          <Button color="error" appearance="transparent">
            Error
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="social" appearance="outline">
            Social
          </Button>
          <Button color="social" appearance="primary">
            Social
          </Button>
          <Button color="social" appearance="subtle">
            Social
          </Button>
          <Button color="social" appearance="transparent">
            Social
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="warning" appearance="outline">
            Warning
          </Button>
          <Button color="warning" appearance="primary">
            Warning
          </Button>
          <Button color="warning" appearance="subtle">
            Warning
          </Button>
          <Button color="warning" appearance="transparent">
            Warning
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="info" appearance="outline">
            Info
          </Button>
          <Button color="info" appearance="primary">
            Info
          </Button>
          <Button color="info" appearance="subtle">
            Info
          </Button>
          <Button color="info" appearance="transparent">
            Info
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="inherit" appearance="outline" disabled>
            Inherit
          </Button>
          <Button color="inherit" appearance="primary" disabled>
            Inherit
          </Button>
          <Button color="inherit" appearance="subtle" disabled>
            Inherit
          </Button>
          <Button color="inherit" appearance="transparent" disabled>
            Inherit
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="brand" appearance="outline" disabled>
            Brand
          </Button>
          <Button color="brand" appearance="primary" disabled>
            Brand
          </Button>
          <Button color="brand" appearance="subtle" disabled>
            Brand
          </Button>
          <Button color="brand" appearance="transparent" disabled>
            Brand
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="secondary" appearance="outline" disabled>
            Secondary
          </Button>
          <Button color="secondary" appearance="primary" disabled>
            Secondary
          </Button>
          <Button color="secondary" appearance="subtle" disabled>
            Secondary
          </Button>
          <Button color="secondary" appearance="transparent" disabled>
            Secondary
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="success" appearance="outline" disabled>
            Success
          </Button>
          <Button color="success" appearance="primary" disabled>
            Success
          </Button>
          <Button color="success" appearance="subtle" disabled>
            Success
          </Button>
          <Button color="success" appearance="transparent" disabled>
            Success
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="error" appearance="outline" disabled>
            Error
          </Button>
          <Button color="error" appearance="primary" disabled>
            Error
          </Button>
          <Button color="error" appearance="subtle" disabled>
            Error
          </Button>
          <Button color="error" appearance="transparent" disabled>
            Error
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="social" appearance="outline" disabled>
            Social
          </Button>
          <Button color="social" appearance="primary" disabled>
            Social
          </Button>
          <Button color="social" appearance="subtle" disabled>
            Social
          </Button>
          <Button color="social" appearance="transparent" disabled>
            Social
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="warning" appearance="outline" disabled>
            Warning
          </Button>
          <Button color="warning" appearance="primary" disabled>
            Warning
          </Button>
          <Button color="warning" appearance="subtle" disabled>
            Warning
          </Button>
          <Button color="warning" appearance="transparent" disabled>
            Warning
          </Button>
        </div>
        <div className={styles.row}>
          <Button color="info" appearance="outline" disabled>
            Info
          </Button>
          <Button color="info" appearance="primary" disabled>
            Info
          </Button>
          <Button color="info" appearance="subtle" disabled>
            Info
          </Button>
          <Button color="info" appearance="transparent" disabled>
            Info
          </Button>
        </div>
        <div className={styles.row}>
          <Button shape="rounded">Rounded</Button>
          <Button shape="circular">Circular</Button>
          <Button shape="circle">Circle</Button>
          <Button shape="square">Square</Button>
        </div>
        <div className={styles.row}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>
    </FluentProvider>
  );
};

export default {
  title: 'Components/Button',
  component: Button,
};
