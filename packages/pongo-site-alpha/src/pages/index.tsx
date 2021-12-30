import * as React from 'react';
import type { NextPage } from 'next';
import {
  Header,
  Sidebar,
  Content,
  SubmissionsCard,
  RatingCard,
  NpsCard,
  KeywordCard,
  TimelineCard,
  ReviewCard,
} from '../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

const data = {
  totalReviews: 18,
  monthlySubmissions: 10,
  totalRating: 4.3,
  monthlyRating: 0.1,
  totalNps: 80,
  monthlyNps: -18,
  dailyData: [
    {
      name: '3:57 PM',
      rating: 3.4,
      nps: 3,
      submissions: 2400,
    },
    {
      name: '8:18 PM',
      rating: 4.4,
      nps: 3.3,
      submissions: 2402,
    },
    {
      name: '12:38 AM',
      rating: 4.4,
      nps: 3.3,
      submissions: 2402,
    },
    {
      name: '4:59 AM',
      rating: 4.4,
      nps: 3.3,
      submissions: 2402,
    },
    {
      name: '9:19 AM',
      rating: 4.3,
      nps: 3.2,
      submissions: 2405,
    },
    {
      name: '1:40 PM',
      rating: 4.3,
      nps: 3.2,
      submissions: 2405,
    },
  ],
  weeklyData: [
    {
      name: 'DEC 21',
      rating: 3.4,
      nps: 3,
      submissions: 2400,
    },
    {
      name: 'DEC 22',
      rating: 5,
      nps: 4,
      submissions: 2210,
    },
    {
      name: 'DEC 23',
      rating: 1,
      nps: 7,
      submissions: 2290,
    },
    {
      name: 'DEC 24',
      rating: 3,
      nps: 8,
      submissions: 2000,
    },
    {
      name: 'DEC 25',
      rating: 2,
      nps: 9,
      submissions: 2181,
    },
    {
      name: 'DEC 27',
      rating: 5,
      nps: 10,
      submissions: 2500,
    },
    {
      name: 'DEC 28',
      rating: 4,
      nps: 10,
      submissions: 2100,
    },
  ],
  monthlyData: [
    {
      name: 'NOV 30',
      rating: 3.4,
      nps: 3,
      submissions: 2400,
    },
    {
      name: 'DEC 25',
      rating: 5,
      nps: 4,
      submissions: 2210,
    },
    {
      name: 'DEC 10',
      rating: 1,
      nps: 7,
      submissions: 2290,
    },
    {
      name: 'DEC 16',
      rating: 3,
      nps: 8,
      submissions: 2000,
    },
    {
      name: 'DEC 21',
      rating: 2,
      nps: 9,
      submissions: 2181,
    },
    {
      name: 'DEC 27',
      rating: 5,
      nps: 10,
      submissions: 2500,
    },
  ],
  yearlyData: [
    {
      name: 'MAY',
      rating: 0,
      nps: 0,
      submissions: 0,
    },
    {
      name: 'JUN',
      rating: 5,
      nps: 4,
      submissions: 10,
    },
    {
      name: 'AUG',
      rating: 1,
      nps: 7,
      submissions: 290,
    },
    {
      name: 'SEP',
      rating: 3,
      nps: 8,
      submissions: 1000,
    },
    {
      name: 'NOV',
      rating: 2,
      nps: 9,
      submissions: 1801,
    },
    {
      name: 'DEC',
      rating: 5,
      nps: 10,
      submissions: 2500,
    },
  ],
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
  reviews: [
    {
      name: 'Fred',
      item: 'Air Jordan XI',
      nps: 9,
      rating: 5,
      writtenReview: 'The shoes are pretty good. I wish that they were slightly larger though.',
      time: 'Dec 24th, 2021 11:11 AM',
      location: 'Seattle, Washington',
      keywords: ['hello', 'world'],
    },
    {
      name: 'bill',
      item: 'Air Jordan XI',
      nps: 9,
      rating: 5,
      writtenReview: '!world hello',
      time: 'Dec 24th, 2021 11:11 AM',
      location: 'Redmond, Washington',
      keywords: ['hello', 'world'],
    },
    {
      name: 'bill',
      item: 'Air Jordan XI',
      nps: 9,
      rating: 5,
      writtenReview: '!world hello',
      time: 'Dec 24th, 2021 11:11 AM',
      location: 'Redmond, Washington',
      keywords: ['hello', 'world'],
    },
    {
      name: 'bill',
      item: 'Air Jordan XI',
      nps: 9,
      rating: 5,
      writtenReview: '!world hello',
      time: 'Dec 24th, 2021 11:11 AM',
      location: 'Redmond, Washington',
      keywords: ['hello', 'world'],
    },
    {
      name: 'FredFredFredFredFredFredFredFredFredFredFredFredFred',
      item: 'Air Jordan XI overflowTextStyles asdjknad asdkbhad bk asdkhjadsjkh  adsjhkasd ad',
      nps: 9,
      rating: 5,
      writtenReview:
        'The shoes are pretty good. I wish that they were slightly larger though. he shoes are pretty good. I wish that they were slightly larger though.he shoes are pretty good. I wish that they were slightly larger though.he shoes are pretty good. I wish that they were slightly larger though.he shoes are pretty good. I wish that they were slightly larger though.',
      time: 'Dec 24th, 2021 11:11 AM Dec 24th, 2021 11:11 AM Dec 24th, 2021 11:11 AM',
      location: 'Seattle, Washington',
      keywords: ['hello', 'world'],
    },
    {
      name: 'Fred',
      item: 'Air Jordan XI',
      nps: 9,
      rating: 5,
      writtenReview:
        'The shoes are pretty good. I wish that they were slightly larger though. he shoes are pretty good. I wish that they were slightly larger though.he shoes are pretty good. I wish that they were slightly larger though.he shoes are pretty good. I wish that they were slightly larger though.he shoes are pretty good. I wish that they were slightly larger though.',
      time: 'Dec 24th, 2021 11:11 AM',
      location: 'Seattle, Washington',
      keywords: ['hello', 'world'],
    },
  ],
};

const cardWrapperStyles: React.CSSProperties = { display: 'flex', flexDirection: 'row', gap: '10px' };

const wrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const cardContainerStyles: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '10px' };

const Home: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Sidebar activePage="home" />
      <Content>
        <div style={wrapperStyles}>
          <div style={cardContainerStyles}>
            <div style={cardWrapperStyles}>
              <SubmissionsCard totalSubmissions={data.totalReviews} monthlySubmissions={data.monthlySubmissions} />
              <RatingCard totalRating={data.totalRating} monthlyRating={data.monthlyRating} />
            </div>
            <div style={cardWrapperStyles}>
              <NpsCard totalNps={data.totalNps} monthlyNps={data.monthlyNps} />
              <KeywordCard topKeywords={data.topKeywords} />
            </div>
            <TimelineCard
              dailyData={data.dailyData}
              weeklyData={data.weeklyData}
              monthlyData={data.monthlyData}
              yearlyData={data.yearlyData}
            />
          </div>
          <ReviewCard reviews={data.reviews} />
        </div>
      </Content>
    </FluentProvider>
  );
};

export default Home;
