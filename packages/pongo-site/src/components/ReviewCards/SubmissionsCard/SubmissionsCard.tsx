import { makeStyles } from '@fluentui/react-make-styles';
import { Text, Body } from '@pongoai/react-text';

type SubmissionsCardProps = {
  /**
   * The total number of survey submissions.
   */
  totalSubmissions: String;
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

export const SubmissionsCard = (props: SubmissionsCardProps) => {
  const { totalSubmissions } = props;
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <Text size={600} weight="bold">
        Survey analytics
      </Text>
      <div className={styles.cardContent}>
        <Body style={{ lineHeight: '0' }}>Total submissions</Body>
        <Text size={700} weight="bold">
          {totalSubmissions}
        </Text>
        <Body className={styles.successBodyText}>+1000 in September</Body>
      </div>
    </div>
  );
};
