import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';
import { TextField } from '@pongoai/react-textfield';
import { Button } from '@pongoai/react-button';
import { LinkCard } from './LinkCard';
import { EmailCard } from './EmailCard';

const useStyles = makeStyles({
  removeButton: {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: '0',
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
    width: '100%',
    height: '40px',
    textAlign: 'left',
    borderRadius: '0px',
  },
  pill: {
    position: 'relative',
    height: '15px',
    maxWidth: '310px',
    background: '#636364',
    color: '#e6e6e6',
    borderRadius: '5px',
    padding: '5px 15px 20px 15px',
    margin: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    border: '0px',
    cursor: 'pointer',
    marginRight: '10px',
  },

  searchContainer: { width: '60vw', height: 'auto', margin: 'auto' },
  searchVerticalFlexbox: {
    display: 'flex',
    flexDirection: 'column',
    width: '60vw',
    marginTop: '5px',
  },
  textField: { zIndex: 2, width: '100%' },
  productList: {
    display: 'inline-grid',
    width: '100%',
    gridRowGap: '2px',
    backgroundColor: '#636364',
    border: '2px solid #636364',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '40px',
  },
  productTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    marginLeft: '5px',
  },
  pillContainer: { display: 'flex', marginTop: '30px', flexWrap: 'wrap' },
  generateButtonContainer: { float: 'left', width: '105px', marginTop: '20px', display: 'flex' },
  deletePillX: { color: 'white' },
  generateButton: { border: '0', color: 'white', padding: '10px', whiteSpace: 'nowrap' },
  cardMargin: { marginTop: '100px' },
});

export const ProductSearch = () => {
  const PRODUCT_LIST = [
    'Freedom',
    'Jeans 1',
    'shirt 1',
    'Jeans 2',
    'bath water',
    'boneless pizza',
    'another item',
    'and another',
    'beans',
    'a lot of beans',
    'too much beans',
  ];
  const BASE_URL = 'https://www.pongo-ai.com/Q2Uv5HeOOjUErQtlvHMc04/';
  const styles = useStyles();
  const [foundProducts, setFoundProducts] = React.useState(PRODUCT_LIST);
  const [productName, setProductName] = React.useState('');
  const [buttonStates, setButtonStates] = React.useState([{}]);
  const [url, setUrl] = React.useState(BASE_URL);
  const [isGenerated, setGenerated] = React.useState(false);
  foundProducts.length = 5;

  const filter = (e: any) => {
    const keyword = e.target.value;

    const results = PRODUCT_LIST.filter(name => {
      return name.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
    });
    results.length = 5;
    setFoundProducts(results);
    setProductName(keyword);
  };

  const clickButton = (str: any) => {
    const newButtonStates = [{}];
    var newUrl = BASE_URL;

    for (var val in buttonStates) {
      newButtonStates[val] = buttonStates[val];
    }

    if (newButtonStates[str] == undefined) {
      newButtonStates[str] = true;
    } else {
      newButtonStates[str] = !newButtonStates[str];
    }

    for (var val in newButtonStates) {
      if (newButtonStates[val] && val != '0') {
        newUrl += val.replaceAll(' ', '-') + '+';
      }
    }
    newUrl = newUrl.substring(0, newUrl.length - 1);
    setUrl(newUrl);
    setButtonStates(newButtonStates);
  };

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchVerticalFlexbox}>
        <TextField
          placeholder="Search For Products..."
          appearance="outlined"
          onChange={filter}
          value={productName}
          className={styles.textField}
        />

        <div className={styles.productList}>
          {foundProducts && foundProducts.length > 0 ? (
            foundProducts.map((product: any) => (
              <button
                key={String(product)}
                style={{
                  backgroundColor: buttonStates[product] == true ? '#636364' : '#E5E5E5',
                  color: buttonStates[product] == true ? 'white' : '#636364',
                }}
                className={styles.removeButton}
                onClick={
                  () => clickButton(String(product))
                  //note: this inline function is necessary
                }
              >
                <div className={styles.productTextContainer}>
                  <Text>{String(product)}</Text>
                </div>
              </button>
            ))
          ) : (
            <div></div>
          )}
        </div>

        <div className={styles.pillContainer}>
          {Object.keys(buttonStates).map((product: any) => {
            if (buttonStates[product] && product != '0')
              return (
                <button
                  className={styles.pill}
                  onClick={
                    () => clickButton(product)
                    //note: this inline function is necessary
                  }
                >
                  {product} <span className={styles.deletePillX}>X</span>
                </button>
              );
          })}
        </div>

        <div className={styles.generateButtonContainer}>
          <Button color={isGenerated ? 'success' : 'brand'} appearance="primary" size="large" onClick={handleGenerate}>
            {isGenerated ? 'Created!' : 'Create Form'}
          </Button>
        </div>
      </div>

      <div hidden={!isGenerated} className={styles.cardMargin}>
        <LinkCard url={url} />
      </div>

      <div hidden={!isGenerated} className={styles.cardMargin}>
        <EmailCard />
      </div>
    </div>
  );
};
