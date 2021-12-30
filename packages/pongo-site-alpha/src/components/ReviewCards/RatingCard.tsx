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

const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });

export const RatingCard = (props: RatingCardProps) => {
  const { totalRating, monthlyRating } = props;

  return (
    <Card headerText={'Average Rating'}>
      <Rating value={totalRating} readOnly size="large" />
      <span>
        <Body>Average Rating: </Body>
        <SubHeadline>{totalRating}</SubHeadline>
      </span>
      <div>
        <SubHeadline color={monthlyRating !== 0 ? (monthlyRating > 0 ? 'success' : 'error') : undefined}>
          {monthlyRating}
        </SubHeadline>
        <Body> increase in {month}</Body>
      </div>
    </Card>
  );
};
