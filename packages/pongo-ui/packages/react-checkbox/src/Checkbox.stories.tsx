import * as React from 'react';
import { Label } from '@pongoai/react-label';
import { Checkbox } from './index';
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

export const BasicCheckboxExample = () => {
  return (
    <>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox defaultChecked disabled />
    </>
  );
};

export const CheckboxSizeExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor="medium">Medium</Label>
      <Checkbox size="medium" id="medium" />
      <Label htmlFor="large">Large</Label>
      <Checkbox size="large" id="large" />
    </div>
  );
};

export const CheckboxColorExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor="brand">Brand</Label>
      <div className={styles.row}>
        <Checkbox color="brand" id="brand" defaultChecked />
        <Checkbox color="brand" id="brand" />
        <Checkbox color="brand" id="brand" disabled />
        <Checkbox color="brand" id="brand" disabled defaultChecked />
      </div>
      <Label htmlFor="inherit">Inherit</Label>
      <div className={styles.row}>
        <Checkbox color="inherit" id="inherit" defaultChecked />
        <Checkbox color="inherit" id="inherit" />
        <Checkbox color="inherit" id="inherit" disabled />
        <Checkbox color="inherit" id="inherit" disabled defaultChecked />
      </div>
      <Label htmlFor="secondary">Secondary</Label>
      <div className={styles.row}>
        <Checkbox color="secondary" id="secondary" defaultChecked />
        <Checkbox color="secondary" id="secondary" />
        <Checkbox color="secondary" id="secondary" disabled />
        <Checkbox color="secondary" id="secondary" disabled defaultChecked />
      </div>
      <Label htmlFor="success">Success</Label>
      <div className={styles.row}>
        <Checkbox color="success" id="success" defaultChecked />
        <Checkbox color="success" id="success" />
        <Checkbox color="success" id="success" disabled />
        <Checkbox color="success" id="success" disabled defaultChecked />
      </div>
      <Label htmlFor="error">Error</Label>
      <div className={styles.row}>
        <Checkbox color="error" id="error" defaultChecked />
        <Checkbox color="error" id="error" />
        <Checkbox color="error" id="error" disabled />
        <Checkbox color="error" id="error" disabled defaultChecked />
      </div>
      <Label htmlFor="warning">Warning</Label>
      <div className={styles.row}>
        <Checkbox color="warning" id="warning" defaultChecked />
        <Checkbox color="warning" id="warning" />
        <Checkbox color="warning" id="warning" disabled />
        <Checkbox color="warning" id="warning" disabled defaultChecked />
      </div>
      <Label htmlFor="info">Info</Label>
      <div className={styles.row}>
        <Checkbox color="info" id="info" defaultChecked />
        <Checkbox color="info" id="info" />
        <Checkbox color="info" id="info" disabled />
        <Checkbox color="info" id="info" disabled defaultChecked />
      </div>
      <Label htmlFor="social">Social</Label>
      <div className={styles.row}>
        <Checkbox color="social" id="social" defaultChecked />
        <Checkbox color="social" id="social" />
        <Checkbox color="social" id="social" disabled />
        <Checkbox color="social" id="social" disabled defaultChecked />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};
