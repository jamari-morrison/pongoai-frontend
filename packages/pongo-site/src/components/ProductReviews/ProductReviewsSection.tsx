import * as React from 'react';
import { makeStyles } from '@fluentui/react-make-styles';
import { PublicReviewCard } from './PublicReviewCard';
import { ProductCard } from './ProductCard';
const useStyles = makeStyles({
  productReviewSectionContainer: {
    width: '60vw',
    margin: 'auto',
    marginTop: '50px',
  },
  reviewListContainer: {
    marginTop: '40px',
  },
});

export const ProductReviewSection = () => {
  const styles = useStyles();
  const [REVIEW_LIST, setReviewList] = React.useState([
    {
      customerName: 'George',
      starRating: 4,
      storeImg: '/9-store.png',
      profileImg: '/profile-img.png',
      isVerified: true,
      location: 'United States',
      timestamp: '2 hours ago',
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      NPS: 9,
    },
    {
      customerName: 'Jamari',
      starRating: 2,
      storeImg: '/9-store.png',
      profileImg: '/profile-img.png',
      isVerified: true,
      location: 'United States',
      timestamp: '2 hours ago',
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      NPS: 9,
    },
    {
      customerName: 'Tim',
      starRating: 5,
      storeImg: '/9-store.png',
      profileImg: '/profile-img.png',
      isVerified: true,
      location: 'United States',
      timestamp: '2 hours ago',
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      NPS: 9,
    },
  ]);

  return (
    <div className={styles.productReviewSectionContainer}>
      <ProductCard productName="Double Loaded Taco" nps={5} numReviews={3} starRating={2} />
      <div className={styles.reviewListContainer}>
        {REVIEW_LIST.map(review => {
          return (
            <div key={review['customerName'] + review['timestamp']}>
              <PublicReviewCard
                customerName={review['customerName']}
                starRating={review['starRating']}
                profileImg={review['profileImg']}
                isVerified={review['isVerified']}
                location={review['location']}
                timestamp={review['timestamp']}
                reviewText={review['reviewText']}
                id={review['customerName'] + review['timestamp']}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
