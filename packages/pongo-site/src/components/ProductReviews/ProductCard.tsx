import * as React from 'react';
import { makeStyles } from '@fluentui/react-make-styles';
import { Text } from '@pongoai/react-text';
import { Rating } from '@pongoai/react-rating';
import { NPS0, NPS1, NPS10, NPS2, NPS3, NPS4, NPS5, NPS6, NPS7, NPS8, NPS9, selectNps } from '../ReviewPanel/npsIcons';

const useStyles = makeStyles({
  productCardContianer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '25px',
  },
  productTitle: {
    marginBottom: '10px',
  },
  ratingContainer: { display: 'flex', marginBottom: '10px' },
  numReviewText: { color: '#636364', position: 'relative', top: '7px', marginLeft: '10px' },
  npsContainer: { display: 'flex' },
  npsImageContainer: { width: '30px', height: '30px', marginLeft: '10px', position: 'relative', top: '1px ' },
  npsText: { color: '#636364', top: '8px', position: 'relative' },
});

type ProductCardProps = {
  //Name of the product to be displayed
  productName: string;

  //Aggregate Net Promoter score (1-10) of all the reviews on this product
  nps: number;

  //Aggregate Star Ratng (1-10) of all the reivews on this product
  starRating: number;

  //Total number of reviews given for this product
  numReviews: number;
};
export const ProductCard = (props: ProductCardProps) => {
  const styles = useStyles();

  return (
    <div className={styles.productCardContianer}>
      <Text size={600} weight="bold" className={styles.productTitle}>
        {props.productName}
      </Text>
      <div className={styles.ratingContainer}>
        <Rating value={props.starRating} />
        <Text size={500} className={styles.numReviewText}>
          ({props.numReviews})
        </Text>
      </div>

      <div className={styles.npsContainer}>
        <Text className={styles.npsText} size={400}>
          Net promoter score
        </Text>
        <div className={styles.npsImageContainer}>{selectNps(props.nps)}</div>
      </div>
    </div>
  );
};
