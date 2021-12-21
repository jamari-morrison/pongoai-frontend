import * as React from 'react';
import { Rating } from '@pongoai/react-rating';
import { Text, Body } from '@pongoai/react-text';
import { DeleteSvg } from './defaultIcons';

type DashboardCardProps = {
  /**
   * The name of the review card
   */
  name: String;

  /**
   * The rating of the review card
   */
  rating: number;

  /**
   * The total number of ratings for the review card
   */
  ratingCount: number;
};

const cardStyle: React.CSSProperties = {
  width: '200px',
  height: '70px',
  background: 'white',
  borderRadius: '6px',
  cursor: 'pointer',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
};

const headerWrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  verticalAlign: 'baseline',
};

const ratingStyles: React.CSSProperties = {
  verticalAlign: 'bottom',
  paddingTop: '5px',
};

export const DashboardCard = (props: DashboardCardProps) => {
  const { name, rating, ratingCount } = props;

  return (
    <div style={cardStyle}>
      <span style={headerWrapper}>
        <Text size={500}>{name}</Text>
        <DeleteSvg />
      </span>
      <span>
        <Rating value={rating} readOnly size="medium" style={ratingStyles} />
      </span>
      <span>
        <Body> ( {ratingCount} ) </Body>
      </span>
    </div>
  );
};
