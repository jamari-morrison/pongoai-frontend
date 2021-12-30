import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';
import type { Theme } from '@pongoai/react-theme';
import { Button } from '@pongoai/react-button';

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
  authButtonsContainer: {
    marginLeft: 'auto',
    marginRight: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  loggedOutButtons: {
    display: 'flex',
    width: '100%',
  },

  signUpButton: {
    marginLeft: '10px',
  },
});

type HeaderProps = {
  /*
    Function used to change wether a user is currently logged in or not
  */

  setIsShowingAuthPopup: Function;

  /*
    Function used to determine wether the login or signup button was pressed
  */
  setIsLogin: Function;

  /*
    Boolean indicating wether or not the user is logged in
  */

  isLoggedIn: Boolean;
};

export const Header = (props: HeaderProps) => {
  const styles = useStyles();

  //use callback function so the child doesn't edit the state
  const handleLogin = () => {
    props.setIsLogin(true);
    props.setIsShowingAuthPopup(true);
  };

  const handleSignUp = () => {
    props.setIsLogin(false);
    props.setIsShowingAuthPopup(true);
  };

  const handleSignOut = () => {
    props.setIsShowingAuthPopup(false);
  };
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <LogoIcon color="neutral" size="large" className={styles.headerLeftOuterContainer} />
      </Link>
      <span className={styles.headerTitle}>
        <Link href="/" passHref>
          <Text size={500} weight="bold" color="neutral">
            Pongo AI
          </Text>
        </Link>
      </span>
      <span className={styles.headerRightOuterContainer} />
      <div className={styles.authButtonsContainer}>
        {props.isLoggedIn ? (
          <Button appearance="subtle" color="brand">
            Sign Out
          </Button>
        ) : (
          <div className={styles.loggedOutButtons}>
            <Button onClick={handleLogin} appearance="subtle" color="brand">
              Login
            </Button>
            <div className={styles.signUpButton}>
              <Button onClick={handleSignUp} appearance="subtle" color="brand">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
