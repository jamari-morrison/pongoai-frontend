import { Rating } from '@pongoai/react-rating';
import { SubHeadline, Body } from '@pongoai/react-text';
import { Card } from './Card';

type RatingCardProps = {
  /**
   * The total rating collected from survey submissions.
   */
  totalRating: number;

  /**
   * The monthly change in rating.
   */
  monthlyRating: number;
};

const ratingPadding = { padding: '0px 0px 10px 0px' };

export const RatingCard = (props: RatingCardProps) => {
  const { totalRating, monthlyRating } = props;

  return (
    <Card headerText={'Average Rating'}>
      <Rating value={totalRating} readOnly size="large" style={ratingPadding} />
      <span>
        <Body>Average - </Body>
        <SubHeadline>{totalRating}</SubHeadline>
      </span>
      <Body color={monthlyRating !== 0 ? (monthlyRating > 0 ? 'success' : 'error') : undefined}>
        {monthlyRating}% change in September
      </Body>
    </Card>
  );
};
