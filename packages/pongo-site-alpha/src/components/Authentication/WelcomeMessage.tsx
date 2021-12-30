import * as React from 'react';
import { makeStyles } from '@fluentui/react-make-styles';
import { Button } from '@pongoai/react-button';
import { Text } from '@pongoai/react-text';

const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '60px',
    width: '400px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  welcomeText: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '60px',
  },
  welcomeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '-43px',
  },
  buttonColor: {
    backgroundColor: 'blue',
    color: 'white',
  },
});

type AuthenticationPopupProps = {
  /*
    Function that enables the popup to dispose of itself
  */
  setIsShowingAuthPopup: Function;

  /*
    Function to change wether the login or sign up view should be shown
  */

  setIsLogin: Function;
};

//TODO: fix the scrolling not re-enabling after removing the popup
export const WelcomeMessage = (props: AuthenticationPopupProps) => {
  const styles = useStyles();

  //document.body.style.overflow = 'hidden';

  const handleLogin = () => {
    props.setIsLogin(true);
    props.setIsShowingAuthPopup(true);
  };

  const handleSignUp = () => {
    props.setIsLogin(false);
    props.setIsShowingAuthPopup(true);
  };

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeText}>
        <Text size={900} weight="bold">
          Welcome to PongoAI!
        </Text>
      </div>
      <div className={styles.welcomeText}>
        <Text size={500}>Log in or Sign Up to start understanding your customers</Text>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleLogin} appearance="primary" color="brand" size="large">
          Log In
        </Button>
        <Button onClick={handleSignUp} appearance="primary" color="brand" size="large">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
