import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';
import Image from 'next/image';
import { Button } from '@pongoai/react-button';
import { TextField } from '@pongoai/react-textfield';
import { EmailSvg } from './sendIcons';
const useStyles = makeStyles({
  pill: {
    position: 'relative',
    height: '15px',
    maxWidth: '310px',
    background: '#636364',
    color: '#e6e6e6',
    borderRadius: '5px',
    padding: '5px 15px 20px 15px',
    margin: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    border: '0px',
    cursor: 'pointer',
    marginRight: '10px',
    marginTop: '10px',
  },

  emailCardContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    paddingBottom: '30px',
    paddingTop: '5px',
  },
  emailCardVerticalFlexbox: {
    marginTop: '20px',
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  emailHeaderContainer: { display: 'flex', width: '100%' },
  emailImageContianer: { width: '30px', height: '30px', position: 'relative', marginRight: '10px', top: '-3px' },
  emailDescriptionContainer: { marginTop: '10px' },
  emailInputContainer: { display: 'flex', marginTop: '20px' },
  emailAddButtonContainer: {
    backgroundColor: '#2060CF',
    border: '0',
    color: 'white',
    padding: '10px',
    top: '-10px',
  },
  emailPillContianer: { display: 'flex', position: 'relative', width: '100%', flexWrap: 'wrap', marginTop: '20px' },
  pillDeleteButton: { color: 'white' },
  emailSendButton: { backgroundColor: '#04A96D', border: '0', color: 'white', padding: '10px', height: '100%' },
  emailSendButtonContainer: { marginTop: '30px' },
  textField: { zIndex: 2, width: '90%' },
  addButtonContainer: { marginTop: 'auto', marginRight: '12px' },
});

export const EmailCard = () => {
  const styles = useStyles();
  const [currEmail, setCurrEmail] = React.useState('');
  const [buttonStates, setButtonStates] = React.useState([{}]);
  const [numEmails, setNumEmails] = React.useState(0);
  const [isEmailError, setIsEmailError] = React.useState(false);

  const updateButton = (str: any, newState: any) => {
    if (str.split('@').length != 2) {
      setIsEmailError(true);
      return;
    }

    const newButtonStates = [{}];

    for (var val in buttonStates) {
      newButtonStates[val] = buttonStates[val];
    }

    newButtonStates[str] = newState;

    setButtonStates(newButtonStates);

    if (newState == true && buttonStates[str] != true) setNumEmails(numEmails + 1);
    else if (newState == false && str in buttonStates) setNumEmails(numEmails - 1);
  };

  const handleAddEmail = () => {
    updateButton(currEmail, true);
  };

  const handleEmailChange = (e: any) => {
    setIsEmailError(false);
    setCurrEmail(e.target.value);
  };

  const handleSend = () => {
    console.log(numEmails);
  };

  return (
    <div className={styles.emailCardContainer}>
      <div className={styles.emailCardVerticalFlexbox}>
        <div className={styles.emailHeaderContainer}>
          <div className={styles.emailImageContianer}>
            <EmailSvg />
          </div>
          <Text weight="bold" size={600}>
            Email
          </Text>
        </div>

        <div className={styles.emailDescriptionContainer}>
          <Text>Email the form to your customers</Text>
        </div>

        <div className={styles.emailInputContainer}>
          <div className={styles.addButtonContainer}>
            <Button onClick={handleAddEmail} className={styles.emailAddButtonContainer}>
              Add
            </Button>
          </div>
          <TextField
            appearance="outlined"
            error={isEmailError}
            onChange={handleEmailChange}
            className={styles.textField}
          ></TextField>
        </div>
        <div className={styles.emailPillContianer}>
          {Object.keys(buttonStates).map((product: any) => {
            if (buttonStates[product] && product != '0')
              return (
                <button
                  className={styles.pill}
                  onClick={
                    () => updateButton(product, false)
                    //Note, this inline function is necessary
                  }
                >
                  {product} <span className={styles.pillDeleteButton}>X</span>
                </button>
              );
          })}
        </div>
        <div className={styles.emailSendButtonContainer} hidden={numEmails == 0}>
          <Button onClick={handleSend} className={styles.emailSendButton}>
            Send!
          </Button>
        </div>
      </div>
    </div>
  );
};
