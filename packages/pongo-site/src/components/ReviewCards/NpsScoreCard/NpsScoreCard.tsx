import { makeStyles } from '@fluentui/react-make-styles';
import { Text, Body, SubHeadline } from '@pongoai/react-text';

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

  scoreCardWrapper: {
    margin: '10px 0px 0px 0px',
  },

  scoreAverageText: {
    margin: '0px 10px',
  },
});

type NpsScoreCardProps = {
  /**
   * The total net promoter score of the survey submissions.
   */
  npsScore: String;
};

const ScoreIcon = () => (
  <svg
    width="28"
    height="30"
    viewBox="0 0 28 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: 'middle' }}
  >
    <path
      d="M13.9187 -8.2016e-05C15.7266 -8.2016e-05 17.5167 0.377127 19.187 1.11001C20.8572 1.84289 22.3749 2.91709 23.6532 4.27128C24.9316 5.62547 25.9456 7.23312 26.6374 9.00245C27.3293 10.7718 27.6854 12.6681 27.6854 14.5833C27.6854 18.451 26.235 22.1603 23.6532 24.8952C21.0715 27.6301 17.5698 29.1666 13.9187 29.1666C12.1108 29.1666 10.3207 28.7894 8.65042 28.0565C6.98018 27.3236 5.46255 26.2494 4.1842 24.8952C1.60245 22.1603 0.152034 18.451 0.152034 14.5833C0.152034 10.7155 1.60245 7.00618 4.1842 4.27128C6.76595 1.53637 10.2676 -8.2016e-05 13.9187 -8.2016e-05ZM15.2954 21.8749C16.0256 21.8749 16.7259 21.5676 17.2423 21.0206C17.7586 20.4737 18.0487 19.7318 18.0487 18.9583V10.2083C18.0487 9.4347 17.7586 8.69284 17.2423 8.14586C16.7259 7.59888 16.0256 7.29158 15.2954 7.29158H12.542C11.8118 7.29158 11.1115 7.59888 10.5951 8.14586C10.0788 8.69284 9.7887 9.4347 9.7887 10.2083V13.1249C9.7887 13.8985 10.0788 14.6403 10.5951 15.1873C11.1115 15.7343 11.8118 16.0416 12.542 16.0416H15.2954V18.9583H9.7887V21.8749H15.2954ZM15.2954 13.1249H12.542V10.2083H15.2954V13.1249Z"
      fill="#278536"
    />
  </svg>
);

export const NpsScoreCard = (props: NpsScoreCardProps) => {
  const { npsScore } = props;

  const styles = useStyles();

  return (
    <div className={styles.card}>
      <Text size={600} weight="bold">
        Score
      </Text>
      <div className={styles.cardContent}>
        <div className={styles.scoreCardWrapper}>
          <ScoreIcon />
          <span className={styles.scoreAverageText}>
            <Body>Average - </Body>
            <SubHeadline>{npsScore}</SubHeadline>
          </span>
        </div>
        <Body className={styles.successBodyText}>+18% in September</Body>
      </div>
    </div>
  );
};
