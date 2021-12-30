import * as React from 'react';
import { makeStyles } from '@fluentui/react-make-styles';
import { RSA_PSS_SALTLEN_AUTO } from 'constants';
import { Text } from '@pongoai/react-text';
import { TextField, Password } from '@pongoai/react-textfield';
import { MicrosoftLogo, GoogleLogo, FacebookLogo } from './AuthenticationIcons';
import { Button } from '@pongoai/react-button';
const useStyles = makeStyles({
  loginContentContainer: {
    display: 'flex',
    margin: 'auto',
    width: '90%',
    color: 'black',
    flexDirection: 'column',
    height: '85%',
    justifyContent: 'space-around',
  },
  loginTitleContainer: {
    marginTop: '10px',
    marginBottom: '10px',
    top: '-50px',
    position: 'relative',
  },
  loginButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  forgotText: {
    color: '#3172E0',
  },
  microsoftLogin: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#2F2F2F',
    width: '100%',
    height: '44px',
    color: 'white',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '2px solid black',
    cursor: 'pointer',
  },
  googleLogin: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    height: '44px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '2px solid grey',
    cursor: 'pointer',
  },
  facebookLogin: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#3B5998',
    width: '100%',
    height: '44px',
    color: 'white',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '2px solid black',
    cursor: 'pointer',
  },
  loginEmailTextfield: { marginBottom: '15px' },
  loginPassTextfield: { marginBottom: '15px' },
  integrationText: { marginTop: '14px', marginRight: '120px' },
  googleIntegrationText: { marginTop: '14px', marginRight: '132px' },

  microsoftLogo: { marginTop: '8.5px' },
  googleLogo: { marginTop: '9px' },
  facebookLogo: { marginTop: '7px' },

  integrationLogo: { marginLeft: '100px' },
  forgotContainer: { cursor: 'pointer', marginTop: '15px' },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  loginBodyContainer: { textAlign: 'center', width: '100%', marginBottom: '50px' },
});

//TODO: fix the scrolling not re-enabling after removing the popup
export const LoginContent = () => {
  const styles = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const [currentView, setCurrentView] = React.useState(0);
  const [hasSent, setHasSent] = React.useState(false);
  const updateEmail = (e: any) => {
    setEmail(e.target.value);
    setIsError(false);
  };

  const updatePassword = (e: any) => {
    setPassword(e.target.value);
    setIsError(false);
  };

  const circularBorder = {
    borderRadius: '10px',
  };
  const searchBarStyles = {
    zIndex: '1',
    height: '45px',
    width: '100%',
  };

  const handleSubmitClick = () => {
    console.log('submit clicked');
    setIsError(true);
  };

  const handleSwapView = () => {
    console.log('forgot clicked');
    setIsError(false);
    currentView == 0 ? setCurrentView(1) : setCurrentView(0);
  };

  const handleFacebookClick = () => {
    console.log('facebook clicked');
  };
  const handleGoogleClick = () => {
    console.log('google clicked');
  };
  const handleMicrosoftClick = () => {
    console.log('microsoft clicked');
  };

  const handleSendClick = () => {
    if (!hasSent) {
      setHasSent(true);
    }
  };

  const handleGoBackClick = () => {
    setCurrentView(0);
  };
  return (
    <div className={styles.loginContentContainer}>
      {currentView == 0 ? (
        <div>
          <div className={styles.loginTitleContainer}>
            <Text size={700}>Log In</Text>
          </div>
          <div className={styles.loginEmailTextfield}>
            <TextField
              placeholder="Email"
              appearance="outlined"
              error={isError}
              textFieldBorder={{ style: circularBorder }}
              style={searchBarStyles}
              label="Email"
              onChange={updateEmail}
            />
          </div>

          <div className={styles.loginPassTextfield}>
            <Password
              placeholder="Password"
              appearance="outlined"
              label="Password"
              textFieldBorder={{ style: circularBorder }}
              style={searchBarStyles}
              onChange={updatePassword}
              error={isError}
              helperText={isError ? 'Email or password is incorrect' : ' '}
            />
          </div>

          <div className={styles.loginButtonsContainer}>
            <div className={styles.forgotContainer} onClick={handleSwapView}>
              <Text className={styles.forgotText} underline={true} weight="bold">
                Forgot password?
              </Text>
            </div>
            <Button onClick={handleSubmitClick} size="large" color="brand" appearance="primary">
              Submit
            </Button>
          </div>
          {
            // <div className={styles.microsoftLogin} onClick={handleMicrosoftClick}>
            //   <div className={styles.integrationLogo}>
            //     <div className={styles.microsoftLogo}>
            //       <MicrosoftLogo />
            //     </div>
            //   </div>
            //   <div className={styles.integrationText}>
            //     <Text>Log in with Microsoft</Text>
            //   </div>
            // </div>
            // <div className={styles.googleLogin} onClick={handleGoogleClick}>
            //   <div className={styles.integrationLogo}>
            //     <div className={styles.googleLogo}>
            //       <GoogleLogo />
            //     </div>
            //   </div>
            //   <div className={styles.googleIntegrationText}>
            //     <Text>Log in with Google</Text>
            //   </div>
            // </div>
            // <div className={styles.facebookLogin} onClick={handleFacebookClick}>
            //   <div className={styles.integrationLogo}>
            //     <div className={styles.facebookLogo}>
            //       <FacebookLogo />
            //     </div>
            //   </div>
            //   <div className={styles.integrationText}>
            //     <Text>Log in with Facebook</Text>
            //   </div>
            // </div>
          }
        </div>
      ) : (
        <div>
          <div className={styles.loginTitleContainer}>
            <Text size={700}>Reset Password</Text>
          </div>
          <div className={styles.loginBodyContainer}>
            <Text size={400}>
              Enter the email associated with your PongoAI account and we'll sned you a link to reset your password
            </Text>
          </div>
          <TextField
            placeholder="Email"
            appearance="outlined"
            error={isError}
            textFieldBorder={{ style: circularBorder }}
            style={searchBarStyles}
            label="Email"
            onChange={updateEmail}
          />
          <div className={styles.buttonContainer}>
            <Button onClick={handleGoBackClick} size="large" appearance="primary">
              Go Back
            </Button>
            <Button onClick={handleSendClick} size="large" color="brand" appearance="primary">
              {hasSent ? 'Sent!' : 'Send'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
