import * as React from 'react';
import type { NextPage } from 'next';
import { Header, Sidebar, Content, SubmissionsCard, RatingCard, NpsCard, KeywordCard } from '../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

const data = {
  totalReviews: '18',
  monthlySubmissions: '1',
  totalRating: 4.3,
  monthlyRating: '10%',
  totalNps: 9.7,
  monthlyNps: '18%',
  topKeywords: [
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
  itemName: {
    '12321312': {
      userName: 'steve',
      nps: 9,
      rating: 5,
      writtenReview: 'Hello world!',
      date: 'Dec 24th, 2021',
      keywords: ['hello', 'world'],
    },
    '3223131': {
      userName: 'bill',
      nps: 9,
      rating: 5,
      writtenReview: '!world hello',
      date: 'Dec 24th, 2021',
      keywords: ['hello', 'world'],
    },
  },
};

const Home: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Sidebar activePage="home" />
      <Content>
        <>
          <SubmissionsCard totalSubmissions={data.totalReviews} monthlySubmissions={data.monthlySubmissions} />
          <RatingCard totalRating={data.totalRating} monthlyRating={data.monthlyRating} />
          <NpsCard totalNps={data.totalNps} monthlyNps={data.monthlyNps} />
          <KeywordCard topKeywords={data.topKeywords} />
        </>
      </Content>
    </FluentProvider>
  );
};

export default Home;
