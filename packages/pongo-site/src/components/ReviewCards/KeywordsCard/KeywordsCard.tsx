import { makeStyles } from '@fluentui/react-make-styles';
import { Text } from '@pongoai/react-text';

type KeywordsCardProps = {
  /**
   * The set of keywords for the survey submissions.
   */
  keywords: String[];
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

  keywordContainer: {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    flexShrink: 0,
    height: '120px',
    width: '250px',
    gap: '10px',
    overflow: 'auto',
    overflowX: 'hidden',
  },

  keywordItem: {
    position: 'relative',
    maxWidth: '200px',
    flexShrink: 0,
    background: '#e6e6e6',
    color: '#2e2e2e',
    borderRadius: '999px',
    padding: '6px 10px',
    margin: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
});

export const KeywordsCard = (props: KeywordsCardProps) => {
  const { keywords } = props;
  const styles = useStyles();

  const KeywordItems = [];

  for (let i = 0; i < keywords.length; i++) {
    KeywordItems.push(<div className={styles.keywordItem}>{keywords[i]}</div>);
  }

  return (
    <div className={styles.card}>
      <Text size={600} weight="bold">
        Keywords
      </Text>
      <div className={styles.keywordContainer}>{KeywordItems}</div>
    </div>
  );
};
