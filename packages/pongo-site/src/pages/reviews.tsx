import * as React from 'react';
import type { NextPage } from 'next';
import {
  Header,
  Sidebar,
  Content,
  ReviewPanel,
  ReviewTimeline,
  SubmissionsCard,
  NpsScoreCard,
  KeywordsCard,
  RatingCard,
} from '../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';
import styles from '../styles/Reviews.module.css';

const data = {
  product1: {
    totalSubmissions: '1,000,000',
    ratingReview: 4.9,
    npsScore: '9',
    keyword: [
      'stinky',
      'cool',
      'awesome',
      'garbage',
      'why did I buy this',
      'amazing',
      'great',
      'awful',
      '?',
      'super cool',
    ],
  },
};

export const Reviews: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Sidebar activePage="reviews" />
      <Content>
        <div className={styles.cardCollection}>
          <div className={styles.horizontalCardCollection}>
            <div>
              <div className={styles.cardContainer}>
                <SubmissionsCard totalSubmissions={data.product1.totalSubmissions} />
                <RatingCard rating={data.product1.ratingReview} />
              </div>
              <div className={styles.cardContainer}>
                <NpsScoreCard npsScore={data.product1.npsScore} />
                <KeywordsCard keywords={data.product1.keyword} />
              </div>
              <div className={styles.cardContainer}>
                <ReviewTimeline />
              </div>
            </div>
            <div className={styles.reviewCardContainer}>
              <ReviewPanel />
            </div>
          </div>
        </div>
      </Content>
    </FluentProvider>
  );
};

export default Reviews;
