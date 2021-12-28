import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';
import type { Theme } from '@pongoai/react-theme';

const useStyles = makeStyles({
  header: (theme: Theme) => ({
    position: 'fixed',
    height: '68px',
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    background: theme.palette.brand,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    gap: '15px',
    zIndex: 100,
  }),

  headerLeftOuterContainer: {
    position: 'relative',
    width: '68px',
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
      <Link href="/" passHref>
        <LogoIcon color="neutral" size="large" className={styles.headerLeftOuterContainer} />
      </Link>
      <span className={styles.headerTitle}>
        <Link href="/" passHref>
          <Text size={500} weight="bold">
            Pongo AI
          </Text>
        </Link>
      </span>
      <span className={styles.headerRightOuterContainer} />
    </div>
  );
};
