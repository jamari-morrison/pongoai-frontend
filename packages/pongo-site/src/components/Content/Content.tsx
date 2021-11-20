import * as React from 'react';
import { makeStyles } from '@fluentui/react-make-styles';

type ContentProps = {
  children: JSX.Element | String;
};

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: '68px',
    top: '68px',
  },
});

export const Content = (props: ContentProps) => {
  const styles = useStyles();
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
};
