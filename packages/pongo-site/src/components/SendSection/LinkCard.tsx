import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';
import Image from 'next/image';
import { Button } from '@pongoai/react-button';
import { TextField } from '@pongoai/react-textfield';
import { LinkSvg } from './sendIcons';

const useStyles = makeStyles({
  linkCardConainter: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    paddingBottom: '30px',
    paddingTop: '5px',
  },
  linkCardVerticalFlexbox: {
    marginTop: '20px',
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  linkHeaderContainer: { display: 'flex', width: '100%' },
  linkImageContainer: { width: '30px', height: '30px', position: 'relative', marginRight: '10px', top: '-3px' },
  linkDescContainer: { marginTop: '10px' },
  linkInputContianer: { display: 'flex', marginTop: '20px' },
  linkButtonContainer: { marginRight: '12px' },
  textFieldContainer: { width: '100%' },
  textField: { zIndex: 2, width: '90%' },
});

//removed noimplicit any, is that ok?
//color property on button doesn't work?

type ReviewCardProps = {
  url: string;
};

export const LinkCard = (props: ReviewCardProps) => {
  const styles = useStyles();
  const [isClicked, setClicked] = React.useState('Copy');

  const handleCopy = () => {
    setClicked('Copied!');
    navigator.clipboard.writeText(props.url);
  };
  return (
    <div className={styles.linkCardConainter}>
      <div className={styles.linkCardVerticalFlexbox}>
        <div className={styles.linkHeaderContainer}>
          <div className={styles.linkImageContainer}>
            <LinkSvg />
          </div>
          <Text weight="bold" size={600}>
            Link
          </Text>
        </div>

        <div className={styles.linkDescContainer}>
          <Text>Collect Product Reviews by sending links to your consumers</Text>
        </div>

        <div className={styles.linkInputContianer}>
          <div className={styles.linkButtonContainer}>
            <Button
              onClick={handleCopy}
              color={isClicked == 'Copied!' ? 'success' : 'inherit'}
              appearance="primary"
              size="large"
            >
              {isClicked}
            </Button>
          </div>
          <TextField value={props.url} appearance="outlined" className={styles.textField}></TextField>
        </div>
      </div>
    </div>
  );
};
