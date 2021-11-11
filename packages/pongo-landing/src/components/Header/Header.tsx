import * as React from 'react';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';

const useStyles = makeStyles({
  header: {
    position: 'relative',
    height: '60px',
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    background: '#2060cf',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    gap: '15px',
  },

  headerLeftOuterContainer: {
    position: 'relative',
    width: '80px',
    height: '100%',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  headerRightOuterContainer: {
    position: 'relative',
    width: '80px',
    height: '100%',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    position: 'relative',
    width: '100px',
    height: '100%',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    lineHeight: '21px',
    userSelect: 'none',
  },
});

export const Header = () => {
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <LogoIcon className={styles.headerLeftOuterContainer} />
      <span className={styles.headerTitle}>
        <Text size={500} weight="bold">
          Pongo AI
        </Text>
      </span>
      <span className={styles.headerRightOuterContainer} />
    </div>
  );
};
