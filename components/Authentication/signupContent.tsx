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
  },
  loginButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
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
  loginEmailTextfield: { marginBottom: '10px' },
  loginPassTextfield: { marginBottom: '10px' },
  integrationText: { marginTop: '14px', marginRight: '120px' },
  googleIntegrationText: { marginTop: '14px', marginRight: '132px' },

  microsoftLogo: { marginTop: '8.5px' },
  googleLogo: { marginTop: '9px' },
  facebookLogo: { marginTop: '7px' },

  integrationLogo: { marginLeft: '100px' },
  pointer: { cursor: 'pointer', marginTop: '12px' },
  loginBodyContainer: { textAlign: 'center', width: '100%', marginBottom: '50px' },
  EmailLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#D3D3D3',
    width: '100%',
    height: '44px',
    color: 'black',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '2px solid black',
    cursor: 'pointer',
    textAlign: 'center',
  },
  emailText: { marginTop: '14px' },
  signUpFooterContainer: {
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative',
    top: '40px',
    cursor: 'pointer  ',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '50px',
  },
  backButton: {},
  nextButton: {},
});

type SingupContentProps = {
  /*
    Function that switches from the "sign up" view to the "log in" view
  */
  swapToLoginView: Function;
};

export const SignupContent = (props: SingupContentProps) => {
  const styles = useStyles();

  const [currentView, setCurrentView] = React.useState(1);
  const [companyName, setCompanyName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const updateCompanyName = (e: any) => {
    setCompanyName(e.target.value);
  };

  const updateEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const updatePassword1 = (e: any) => {
    setPassword1(e.target.value);
  };

  const updatePassword2 = (e: any) => {
    setPassword2(e.target.value);
  };

  const circularBorder = {
    borderRadius: '10px',
  };
  const searchBarStyles = {
    zIndex: '1',
    height: '45px',
    width: '100%',
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

  const handleEmailClick = () => {
    console.log('email clicked');
    setCurrentView(1);
  };

  const handleNextClick = () => {
    if (password1 == password2) {
      // if(password1.in)
    }

    if (true) {
      let client_id = 0;
      let response_type = 'code';
      let redirect_uri = 'http://localhost:3000';
      //move client id into env var and test this once hosted
      //get("https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_KOldxF7kVpj4ImPi8W6gbwssXMs6Y1qq&scope=read_write&redirect_uri=http://localhost:3000")
    }
  };

  const handleGoBackClick = () => {
    setCurrentView(0);
  };

  const handleFooterClick = () => {
    console.log('footer clicked');
  };

  const handleSwapToLogin = () => {
    props.swapToLoginView();
  };
  return (
    <div className={styles.loginContentContainer}>
      <div className={styles.loginTitleContainer}>
        <Text size={700}>Sign Up</Text>
      </div>
      {currentView == 0 ? (
        <div>
          <div className={styles.loginBodyContainer}>
            <Text size={400}>Grow your company through feedback</Text>
          </div>
          <div className={styles.microsoftLogin} onClick={handleMicrosoftClick}>
            <div className={styles.integrationLogo}>
              <div className={styles.microsoftLogo}>
                <MicrosoftLogo />
              </div>
            </div>
            <div className={styles.integrationText}>
              <Text>Sign Up with microsoft</Text>
            </div>
          </div>
          <div className={styles.googleLogin} onClick={handleGoogleClick}>
            <div className={styles.integrationLogo}>
              <div className={styles.googleLogo}>
                <GoogleLogo />
              </div>
            </div>
            <div className={styles.googleIntegrationText}>
              <Text>Sign Up with Google</Text>
            </div>
          </div>
          <div className={styles.facebookLogin} onClick={handleFacebookClick}>
            <div className={styles.integrationLogo}>
              <div className={styles.facebookLogo}>
                <FacebookLogo />
              </div>
            </div>
            <div className={styles.integrationText}>
              <Text>Sign Up with Facebook</Text>
            </div>
          </div>
          <div className={styles.EmailLogin} onClick={handleEmailClick}>
            <div className={styles.emailText}>
              <Text>Sign Up with Email</Text>
            </div>
          </div>
          <div className={styles.signUpFooterContainer} onClick={handleSwapToLogin}>
            <Text size={400}>Already have an account?</Text>
            <Text underline={true} weight="bold" size={400}>
              Log In
            </Text>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.loginBodyContainer}>
            <Text size={400}>Create new account</Text>
          </div>

          <div className={styles.emailText}>
            <TextField
              placeholder="Email"
              appearance="outlined"
              textFieldBorder={{ style: circularBorder }}
              style={searchBarStyles}
              label="Email"
              onChange={updateEmail}
            />
          </div>

          <div className={styles.emailText}>
            <TextField
              placeholder="Company Name"
              appearance="outlined"
              textFieldBorder={{ style: circularBorder }}
              style={searchBarStyles}
              label="Company Name"
              onChange={updateCompanyName}
            />
          </div>

          <div className={styles.emailText}>
            <Password
              placeholder="Password"
              appearance="outlined"
              textFieldBorder={{ style: circularBorder }}
              style={searchBarStyles}
              label="Password"
              onChange={updatePassword1}
            />
          </div>

          <div className={styles.emailText}>
            <Password
              placeholder="Confirm Password"
              appearance="outlined"
              textFieldBorder={{ style: circularBorder }}
              style={searchBarStyles}
              label="Confirm Password"
              onChange={updatePassword2}
            />
          </div>

          <div className={styles.buttonContainer}>
            {
              //<Button onClick={handleGoBackClick}>Go Back</Button>
            }
            <div></div>
            <Button onClick={handleNextClick} size="large" color="brand" appearance="primary">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
