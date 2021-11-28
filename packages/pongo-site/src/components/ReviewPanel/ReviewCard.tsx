import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';
import { Select } from '@pongoai/react-textfield';
import Image from 'next/image';
import { Rating } from '@pongoai/react-rating';
import { FacebookIcon, TwitterIcon, LinkIcon, VerifiedIcon, HTMLIcon } from './reviewPanelIcons';
import { NPS0, NPS1, NPS10, NPS2, NPS3, NPS4, NPS5, NPS6, NPS7, NPS8, NPS9 } from './npsIcons';
const useStyles = makeStyles({
  reviewCardContianer: { width: '100%', height: 'auto', display: 'flex', flexDirection: 'column' },
  customerInfoContainer: { display: 'flex', marginTop: '5px' },
  customerImageContainer: { width: '54px', height: '54px', position: 'relative' },
  customerNameContainer: { marginTop: '17px', marginLeft: '5px' },
  verifiedContainer: { marginTop: '17px', width: '24px', height: '24px', position: 'relative', marginLeft: '5px' },
  socialsFlexbox: { marginLeft: 'auto', display: 'flex', marginTop: '2px', marginRight: '5px' },
  socialsImage: { width: '25px', height: '25px', position: 'relative', marginLeft: '20px' },
  ratingContainer: { display: 'flex' },
  npsContainer: { width: '30px', height: '30px', marginLeft: '7px', position: 'relative', top: '1px ' },
  reviewInfoText: { color: 'grey', marginTop: '5px', marginBottom: '5px' },
  pointer: { cursor: 'pointer' },
  copyAlertShown: {
    opacity: '1',
    transition: 'all 250ms linear',
    position: 'absolute',
    backgroundColor: 'black',
    left: '-15px',
    width: '60px',
    height: '23px',
    color: 'white',
    top: '-30px',
    textAlign: 'center',
  },
  copyAlertHidden: {
    opacity: '0',
    transition: 'all 250ms linear 1.5s',
    position: 'absolute',
    backgroundColor: 'black',
    left: '-15px',
    width: '0px',
    height: '23px',
    color: 'white',
    top: '-30px',
    textAlign: 'center',
  },
});

interface Props {
  customerName: string;
  starRating: number;
  npsImg: number;
  profileImg: string;
  isVerified: boolean;
  location: string;
  timestamp: string;
  reviewText: string;
  productName: string;
  id: string;
  isLink: boolean;
}

const handleFacebookClick = () => {
  console.log('Facebook clicked');
};

const handleTwitterClick = () => {
  console.log('Twitter clicked');
};

const handleHtmlClick = () => {
  console.log(document.getElementsByClassName('reviewCardContianer')[0]);
};

export const ReviewCard = (props: Props) => {
  const styles = useStyles();

  const [isShowingCopyAlert, setIsShowingCopyAlert] = React.useState(false);

  const handleLinkClick = () => {
    console.log('Link clicked');
    navigator.clipboard.writeText('http://' + props.id);
    setIsShowingCopyAlert(true);
  };

  const hideCopyAlert = () => {
    setIsShowingCopyAlert(false);
  };

  const selectNPS = () => {
    if (props.npsImg == 0) return <NPS0 />;
    else if (props.npsImg == 1) return <NPS1 />;
    else if (props.npsImg == 2) return <NPS2 />;
    else if (props.npsImg == 3) return <NPS3 />;
    else if (props.npsImg == 4) return <NPS4 />;
    else if (props.npsImg == 5) return <NPS5 />;
    else if (props.npsImg == 6) return <NPS6 />;
    else if (props.npsImg == 7) return <NPS7 />;
    else if (props.npsImg == 8) return <NPS8 />;
    else if (props.npsImg == 9) return <NPS9 />;
    else if (props.npsImg == 10) return <NPS10 />;
  };
  return (
    <div className={styles.reviewCardContianer}>
      <Text weight="bold" size={500}>
        {props.productName}
      </Text>
      <div className={styles.customerInfoContainer}>
        <div className={styles.customerImageContainer}>
          <Image src={props.profileImg} alt="profile-image" layout="fill" />
        </div>

        <div className={styles.customerNameContainer}>
          <Text weight="bold" size={500}>
            {props.customerName}
          </Text>
        </div>
        {props.isVerified ? (
          <div className={styles.verifiedContainer}>
            <VerifiedIcon />
          </div>
        ) : (
          <div></div>
        )}

        {props.isLink ? (
          <div></div>
        ) : (
          <div className={styles.socialsFlexbox}>
            <div className={styles.socialsImage}>
              <FacebookIcon />
            </div>
            <div className={styles.socialsImage}>
              <TwitterIcon />
            </div>
            <div className={styles.socialsImage}>
              <div
                className={isShowingCopyAlert ? styles.copyAlertShown : styles.copyAlertHidden}
                onTransitionEnd={hideCopyAlert}
              >
                <Text>Copied!</Text>
              </div>
              <a onClick={handleLinkClick} className={styles.pointer}>
                <LinkIcon />
              </a>
            </div>
            <div className={styles.socialsImage}>
              <HTMLIcon />
            </div>
          </div>
        )}
      </div>

      <div className={styles.ratingContainer}>
        <Rating value={props.starRating} />
        <div className={styles.npsContainer}>{selectNPS()}</div>
      </div>

      <Text weight="light" className={styles.reviewInfoText}>
        Reviewed in {props.location} {props.timestamp}
      </Text>

      <Text size={400}>{props.reviewText}</Text>
    </div>
  );
};
