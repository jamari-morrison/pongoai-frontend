import * as React from 'react';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';
import { Checkbox } from '../../../../packages/pongo-ui/packages/react-checkbox/src/index';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '35px',
  },
});

export const BasicCheckboxExample = () => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.row}>
        <Checkbox size="medium" id="medium" />
        <Checkbox size="large" id="large" />
      </div>
      <div className={styles.row}>
        <Checkbox color="brand" id="brand" defaultChecked />
        <Checkbox color="brand" id="brand" />
        <Checkbox color="brand" id="brand" disabled />
        <Checkbox color="brand" id="brand" disabled defaultChecked />
      </div>
      <div className={styles.row}>
        <Checkbox color="inherit" id="inherit" defaultChecked />
        <Checkbox color="inherit" id="inherit" />
        <Checkbox color="inherit" id="inherit" disabled />
        <Checkbox color="inherit" id="inherit" disabled defaultChecked />
      </div>
      <div className={styles.row}>
        <Checkbox color="secondary" id="secondary" defaultChecked />
        <Checkbox color="secondary" id="secondary" />
        <Checkbox color="secondary" id="secondary" disabled />
        <Checkbox color="secondary" id="secondary" disabled defaultChecked />
      </div>
      <div className={styles.row}>
        <Checkbox color="success" id="success" defaultChecked />
        <Checkbox color="success" id="success" />
        <Checkbox color="success" id="success" disabled />
        <Checkbox color="success" id="success" disabled defaultChecked />
      </div>
      <div className={styles.row}>
        <Checkbox color="error" id="error" defaultChecked />
        <Checkbox color="error" id="error" />
        <Checkbox color="error" id="error" disabled />
        <Checkbox color="error" id="error" disabled defaultChecked />
      </div>
      <div className={styles.row}>
        <Checkbox color="warning" id="warning" defaultChecked />
        <Checkbox color="warning" id="warning" />
        <Checkbox color="warning" id="warning" disabled />
        <Checkbox color="warning" id="warning" disabled defaultChecked />
      </div>
      <div className={styles.row}>
        <Checkbox color="info" id="info" defaultChecked />
        <Checkbox color="info" id="info" />
        <Checkbox color="info" id="info" disabled />
        <Checkbox color="info" id="info" disabled defaultChecked />
      </div>
      <div className={styles.row}>
        <Checkbox color="social" id="social" defaultChecked />
        <Checkbox color="social" id="social" />
        <Checkbox color="social" id="social" disabled />
        <Checkbox color="social" id="social" disabled defaultChecked />
      </div>
    </FluentProvider>
  );
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};
