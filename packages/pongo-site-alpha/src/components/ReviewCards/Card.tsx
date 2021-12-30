import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { Header2 } from '@pongoai/react-text';

type CardProps = {
  /**
   * The header text for the card.
   */
  headerText: String;

  /**
   * The content for the Card
   */
  children: any;

  size?: 'small' | 'medium' | 'large';
};

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    padding: '20px',
    borderRadius: '6px',
    flexShrink: 0,
    gap: '10px',
  },

  cardContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    height: '100%',
    padding: '0px',
    overflow: 'auto',
    overflowX: 'hidden',
  },

  small: {
    width: '250px',
    height: '150px',
  },

  medium: {
    width: '550px',
    height: '410px',
  },

  large: {
    minWidth: '540px',
    maxWidth: '540px',
    width: '100%',
    height: '810px',
  },
});

export const Card = (props: CardProps) => {
  const { headerText, children, size = 'small' } = props;
  const styles = useStyles();

  const cardWrapperStyles = mergeClasses(styles.card, styles[size!]);

  return (
    <div className={cardWrapperStyles}>
      <Header2 weight="bold">{headerText}</Header2>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};
