import { makeStyles } from '@fluentui/react-make-styles';
import { Text, Body, SubHeadline } from '@pongoai/react-text';
import { Rating } from '@pongoai/react-rating';

type RatingCardProps = {
  /**
   * The rating of the survey.
   */
  rating: number;
};

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    background: 'white',
    padding: '20px 30px',
    width: '250px',
    height: '150px',
    borderRadius: '6px',
    flexShrink: 0,
  },

  cardContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px',
  },

  successBodyText: {
    color: '#278536',
    lineHeight: 0,
  },
});

export const RatingCard = (props: RatingCardProps) => {
  const { rating } = props;
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <Text size={600} weight="bold">
        Survey analytics
      </Text>
      <div className={styles.cardContent} style={{ margin: '3px 0 0 0' }}>
        <Rating value={rating} readOnly size="large" />
        <span>
          <Body>Average - </Body>
          <SubHeadline>{rating}</SubHeadline>
        </span>
        <Body className={styles.successBodyText}>+50% in September</Body>
      </div>
    </div>
  );
};
