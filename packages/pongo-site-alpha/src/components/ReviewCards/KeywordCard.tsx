import { SubHeadline, Body } from '@pongoai/react-text';
import { makeStyles } from '@fluentui/react-make-styles';
import { Card } from './Card';

type KeywordCardProps = {
  /**
   * The top keywords collected.
   */
  topKeywords: String[];
};

const useStyles = makeStyles({
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

export const KeywordCard = (props: KeywordCardProps) => {
  const { topKeywords } = props;
  const styles = useStyles();

  const KeywordItems = [];

  for (let i = 0; i < topKeywords.length; i++) {
    KeywordItems.push(<div className={styles.keywordItem}>{topKeywords[i]}</div>);
  }
  return (
    <Card headerText={'Top Keywords'}>
      <div className={styles.keywordContainer}>{KeywordItems}</div>
    </Card>
  );
};
