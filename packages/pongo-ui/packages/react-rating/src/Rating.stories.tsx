import * as React from 'react';
import { Rating } from './index';
import { Header3 } from '@pongoai/react-text';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '10px',
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '10px',
  },
});

export const BasicRatingExample = () => {
  const [ratingValue, setRatingValue] = React.useState(3);
  const styles = useStyles();

  const onRatingChange = (
    _ev: React.ChangeEvent<HTMLInputElement> | React.PointerEvent<HTMLDivElement>,
    data: { value: number },
  ) => {
    setRatingValue(data.value);
  };

  return (
    <div className={styles.root}>
      <Header3>Basic Example</Header3>
      <div className={styles.row}>
        <Rating />
      </div>
      <Header3>Controlled Example {ratingValue}</Header3>
      <div className={styles.row}>
        <Rating value={ratingValue} onChange={onRatingChange} />
      </div>
      <Header3>Read Only</Header3>
      <div className={styles.row}>
        <Rating defaultValue={2} readOnly />
      </div>
      <Header3>Size</Header3>
      <div className={styles.row}>
        <Rating size="small" />
        <Rating size="medium" />
        <Rating size="large" />
      </div>
      <Header3>Multiple Stars</Header3>
      <div className={styles.row}>
        <Rating defaultValue={10} max={10} />
      </div>
      <Header3>Disabled</Header3>
      <div className={styles.row}>
        <Rating defaultValue={3} disabled />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Rating',
  component: Rating,
};
