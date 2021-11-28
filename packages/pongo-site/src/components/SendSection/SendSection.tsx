import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';
import { LinkCard } from './LinkCard';
import { ProductSearch } from './ProductSearch';
import { Select } from '@pongoai/react-textfield';

const useStyles = makeStyles({
  searchContainer: {
    display: 'flex',
    width: '80vw',
    justifyContent: 'space-between',
    margin: 'auto',
    marginTop: '50px ',
    flexWrap: 'wrap',
  },
  sendContainer: { textAlign: 'center' },
});

export const SendSection = () => {
  const styles = useStyles();

  return (
    <div className={styles.sendContainer}>
      <Text weight="bold" size={900}>
        Collect Reviews from your clients
      </Text>
      <div className={styles.searchContainer}>
        <ProductSearch />
      </div>
    </div>
  );
};
