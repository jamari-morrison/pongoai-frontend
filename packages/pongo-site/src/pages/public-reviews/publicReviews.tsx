import * as React from 'react';
import type { NextPage } from 'next';
import { Header, Content } from '../../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';
import { Text, Body, SubHeadline } from '@pongoai/react-text';
import { Rating } from '@pongoai/react-rating';
import styles from '../styles/Reviews.module.css';
import { useRouter } from 'next/router';
import { ProductReviewSection } from '../../components';
import { makeStyles } from '@fluentui/react-make-styles';
import { Popup } from '../../components/ProductReviews/Popup';

const REVIEW_LIST = [
  {
    customerName: 'George',
    starRating: 4,
    storeImg: '/9-store.png',
    profileImg: '/profile-img.png',
    isVerified: true,
    location: 'United States',
    timestamp: '2 hours ago',
    reviewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    productName: 'Jenas 1',
    NPS: 9,
    id: 'rev1',
  },
  {
    customerName: 'Jamari',
    starRating: 2,
    storeImg: '/9-store.png',
    profileImg: '/profile-img.png',
    isVerified: true,
    location: 'United States',
    timestamp: '2 hours ago',
    reviewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    productName: 'Shirt ver. 10',
    NPS: 9,
    id: 'rev2',
  },
  {
    customerName: 'Tim',
    starRating: 5,
    storeImg: '/9-store.png',
    profileImg: '/profile-img.png',
    isVerified: true,
    location: 'United States',
    timestamp: '2 hours ago',
    reviewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    productName: 'BEANs',
    NPS: 9,
    id: 'rev3',
  },
];

const PRODUCT_INFO = { productName: 'Double Loaded Taco', nps: 5, numReviews: 3, starRating: 2 };

const useStyles = makeStyles({
  publicReviewsContainer: {
    width: '70vw',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
  },
});

export const PublicReviews: NextPage = () => {
  const router = useRouter();
  const styles = useStyles();

  //when backend is done this should make an api call
  const getReviewInfo = () => {
    return REVIEW_LIST.find(o => o.id == router.query['reviewID']);
  };

  //when backend is done this should make an api call
  const getAllReviews = () => {
    return REVIEW_LIST;
  };

  //When backend is done this should make an api call
  const getProductInfo = () => {
    return PRODUCT_INFO;
  };

  const popupReview = getReviewInfo();
  console.log(popupReview);
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Content>
        <div>
          {popupReview ? (
            <Popup
              customerName={popupReview.customerName}
              starRating={popupReview.starRating}
              profileImg={popupReview.profileImg}
              isVerified={popupReview.isVerified}
              location={popupReview.location}
              timestamp={popupReview.timestamp}
              reviewText={popupReview.reviewText}
              id={popupReview.id}
            />
          ) : (
            <div></div>
          )}
          <ProductReviewSection />
        </div>
      </Content>
    </FluentProvider>
  );
};

export default PublicReviews;
