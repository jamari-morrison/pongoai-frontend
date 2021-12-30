import * as React from 'react';
import { makeStyles } from '@fluentui/react-make-styles';
import { RSA_PSS_SALTLEN_AUTO } from 'constants';
import { LoginContent } from './loginContent';
import { SignupContent } from './signupContent';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';

const useStyles = makeStyles({
  popupBackground_ACTIVE: {
    width: '100vw',
    height: '100vh',
    overflowY: 'hidden',
    position: 'absolute',
    top: '0%',
    left: '0%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 2002,
    border: 'none',
  },
  popupBackground_DISABLED: {
    width: '0px',
    height: '0px',
    padding: '0px',
    position: 'absolute',
    top: '-1000px',
    zIndex: -1,
  },
  popupCardHolder: {
    width: '500px',
    height: '600px',
    zIndex: 2003,
    backgroundColor: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid black',
    borderRadius: '4px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logoTextContainer: {
    marginTop: '4px',
    marginLeft: '10px',
  },
  authLogoContainer: {
    display: 'flex',
    float: 'left',
  },
  closePopup: { marginLeft: 'auto', top: '-10px', left: '10px', position: 'relative', cursor: 'pointer' },
});

type AuthenticationPopupProps = {
  /*
    Boolean indicating wether this popup is for logging a user in (TRUE) or for signing a user up (FALSE)
  */
  isLogin: boolean;

  /*
    Function that enables the popup to dispose of itself
  */
  setIsShowingAuthPopup: Function;

  /*
    Boolean indicating wether this popup should currently be visible
  */
  isShowingAuthPopup: boolean;

  /*
    Function to change wether the login or sign up view should be shown
  */

  setIsLogin: Function;
};

//TODO: fix the scrolling not re-enabling after removing the popup
export const AuthenticationPopup = (props: AuthenticationPopupProps) => {
  const styles = useStyles();

  //document.body.style.overflow = 'hidden';

  const deactivatePopup = () => {
    //setIsActive(false);
    //document.body.style.overflow = 'scroll';
    props.setIsShowingAuthPopup(false);
  };

  const swapToLoginView = () => {
    props.setIsLogin(true);
  };
  return (
    <button className={styles.popupBackground_ACTIVE}>
      <div className={styles.popupCardHolder}>
        <div className={styles.authLogoContainer}>
          <LogoIcon />
          <div className={styles.logoTextContainer}>
            <Text weight="bold" size={500}>
              Pongo AI
            </Text>
          </div>

          <div onClick={deactivatePopup} className={styles.closePopup}>
            <Text weight="bold" size={700}>
              &#10060;
            </Text>
          </div>
        </div>
        {props.isLogin ? <LoginContent /> : <SignupContent swapToLoginView={swapToLoginView} />}
      </div>
    </button>
  );
};
