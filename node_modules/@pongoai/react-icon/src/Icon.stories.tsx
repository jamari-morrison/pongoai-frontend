import * as React from 'react';
import { Header2 } from '@pongoai/react-text';
import { ChatBubbleIcon, HomeIcon, ReviewIcon, SendIcon, LogoIcon } from './index';
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
  darkBackground: {
    background: '#2c2c2c',
  },
});

export const BasicIconExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Basic Example</Header2>
      <div className={styles.row}>
        <ChatBubbleIcon />
        <HomeIcon />
        <SendIcon />
        <ReviewIcon />
        <LogoIcon />
      </div>
      <Header2>Size Example</Header2>
      <div className={styles.row}>
        <ChatBubbleIcon size="small" />
        <ChatBubbleIcon size="medium" />
        <ChatBubbleIcon size="large" />
      </div>
      <Header2>Color Example</Header2>
      <div className={styles.row}>
        <LogoIcon />
        <LogoIcon color="inherit" />
        <LogoIcon color="brand" />
        <LogoIcon color="secondary" />
        <LogoIcon color="success" />
        <LogoIcon color="error" />
        <LogoIcon color="social" />
        <LogoIcon color="warning" />
        <LogoIcon color="info" />
        <div className={styles.darkBackground}>
          <LogoIcon color="neutral" />
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Icon',
  component: ChatBubbleIcon,
};
