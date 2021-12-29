import { Text } from '@pongoai/react-text';
import { Search, Select } from '@pongoai/react-textfield';
import { Rating } from '@pongoai/react-rating';
import { makeStyles } from '@fluentui/react-make-styles';
import { Theme } from '@pongoai/react-theme';
import { UserIcon } from '../UserIcon';
import { Card } from './Card';

type userReviewProps = {
  /**
   * The user's name
   */
  name: string;

  /**
   * The item purchased
   */
  item: string;

  /**
   * The location of the user during the review.
   */
  location: string;

  /**
   * The time the review was created.
   */
  time: string;

  /**
   * The rating of the review.
   */
  rating: number;

  /**
   * The written review created by the user.
   */
  writtenReview: string;
};

type SubmissionsCardProps = {
  /**
   * The total number of survey submissions.
   */
  reviews: userReviewProps[];
};

const useStyles = makeStyles({
  divider: (theme: Theme) => ({
    width: '100%',
    background: theme.palette.inheritBackground,
    height: '2px',
    borderRadius: '999px',
  }),
});

const searchStyles: React.CSSProperties = { zIndex: '10', height: '45px', borderRadius: '100%' };
const selectStyles: React.CSSProperties = { zIndex: '10', width: '140px', height: '45px' };
const textFieldBorderStyles: React.CSSProperties = { borderRadius: '999px' };
const searchWrapperStyles: React.CSSProperties = { display: 'flex', flexDirection: 'row', gap: '10px' };
const contentWrapperStyles: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '10px' };
const overflowStyles: React.CSSProperties = { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' };
const overflowTextStyles: React.CSSProperties = { whiteSpace: 'nowrap' };
const reviewWrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  overflow: 'auto',
  overflowX: 'hidden',
  height: '680px',
};
const userReviewWrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
};
const userNameWrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  verticalAlign: 'middle',
  alignItems: 'center',
  width: '100%',
  gap: '20px',
};
const titleWrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

/**
 *
 * Truncates the given string if it exceeds a given sum of characters.
 *
 * @param stringToTruncate
 * @param maxCount
 */
const truncateString = (stringToTruncate: string, maxCount: number) =>
  stringToTruncate.length < maxCount ? stringToTruncate : stringToTruncate.substring(0, Math.abs(maxCount)) + '...';

const UserReview = (props: userReviewProps) => {
  const { name, item, location, time, writtenReview, rating } = props;
  const maxUserNameLength = 50;
  const maxItemLength = 80;
  const maxReviewLength = 200;

  return (
    <div style={userReviewWrapperStyles}>
      <div style={userNameWrapperStyles}>
        <UserIcon userName={name} />
        <Text size={400} weight="bold">
          {truncateString(name, maxUserNameLength)}
        </Text>
      </div>
      <div style={titleWrapperStyles}>
        <Rating value={rating} readOnly size="medium" />
        <Text size={400} weight="bold">
          {truncateString(item, maxItemLength)}
        </Text>
      </div>
      <div>
        <Text size={300} weight="thin" italic>
          Reviewed in {location}, {time}
        </Text>
      </div>
      <div>
        <Text size={400}>{truncateString(writtenReview, maxReviewLength)}</Text>
      </div>
    </div>
  );
};

const generateReviews = (reviews: userReviewProps[]) => {
  const renderedReviews = [];

  for (let i = 0; i < reviews.length; i++) {
    renderedReviews.push(
      <UserReview
        name={reviews[i].name}
        rating={reviews[i].rating}
        item={reviews[i].item}
        location={reviews[i].location}
        time={reviews[i].time}
        writtenReview={reviews[i].writtenReview}
      />,
    );
  }
  return renderedReviews;
};

export const ReviewCard = (props: SubmissionsCardProps) => {
  const { reviews } = props;

  const styles = useStyles();

  return (
    <Card headerText={'Reviews'} size="large">
      <div style={contentWrapperStyles}>
        <div style={searchWrapperStyles}>
          <Search
            placeholder={'Search your reviews'}
            style={searchStyles}
            textFieldBorder={{ style: textFieldBorderStyles }}
            appearance="outlined"
          />
          <Select appearance="outlined" style={selectStyles} />
        </div>
        <div className={styles.divider} />
        <div style={reviewWrapperStyles}>{generateReviews(reviews)}</div>
      </div>
    </Card>
  );
};
