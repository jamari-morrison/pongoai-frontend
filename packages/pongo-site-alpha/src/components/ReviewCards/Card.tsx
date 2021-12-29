import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { Text } from '@pongoai/react-text';

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
    gap: '10px',
    background: 'white',
    padding: '20px 30px',
    width: '230px',
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

  small: {
    width: '230px',
    height: '140px',
  },

  medium: {
    width: '530px',
    height: '400px',
  },

  large: {
    width: '270px',
    height: '150px',
  },
});

export const Card = (props: CardProps) => {
  const { headerText, children, size = 'small' } = props;
  const styles = useStyles();

  const cardWrapperStyles = mergeClasses(styles.card, styles[size!]);

  return (
    <div className={cardWrapperStyles}>
      <Text size={600} weight="bold">
        {headerText}
      </Text>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};
