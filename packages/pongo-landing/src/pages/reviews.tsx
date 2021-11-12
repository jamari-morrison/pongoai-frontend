import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';
import { Text, Body, SubHeadline } from '@pongoai/react-text';
import { Rating } from '@pongoai/react-rating';
import '../styles/Home.module.css';

const data = {
  product1: {
    totalSubmissions: '1,000,000',
    ratingReview: 4,
  },
};

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  background: 'white',
  padding: '20px 30px',
  borderRadius: '6px',
  flexShrink: '0',
};

const cardContentStyles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px',
};

const SurveyAnalyticsCard = () => (
  <div className="pongo-ai-card" style={cardStyles as any}>
    <Text size={600} weight="bold">
      Survey analytics
    </Text>
    <div className="pongo-ai-card-content" style={cardContentStyles as any}>
      <Body style={{ lineHeight: '0' }}>Total submissions</Body>
      <Text size={700} weight="bold">
        {data.product1.totalSubmissions}
      </Text>
      <Body style={{ color: '#278536', lineHeight: '0' }}>+1000 in September</Body>
    </div>
  </div>
);

const RatingCard = () => (
  <div className="pongo-ai-card" style={cardStyles as any}>
    <Text size={600} weight="bold">
      Survey analytics
    </Text>
    <div className="pongo-ai-card-content" style={cardContentStyles as any}>
      <Rating value={data.product1.ratingReview} />
      <span>
        <Body style={{ lineHeight: '0' }}>Average - </Body>
        <SubHeadline style={{ lineHeight: '0' }}>5</SubHeadline>
      </span>
      <Body style={{ color: '#278536', lineHeight: '0' }}>+50% in September</Body>
    </div>
  </div>
);

export const Reviews: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <div
        className="pongo-ai-card-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          padding: '20px',
        }}
      >
        <SurveyAnalyticsCard />
        <RatingCard />
      </div>
    </FluentProvider>
  );
};

export default Reviews;
