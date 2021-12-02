import * as React from 'react';
import { makeStyles } from '@fluentui/react-make-styles';
import { ReviewCard } from './ReviewCard';
import { Button } from '@pongoai/react-button';
import { TextField, Select } from '@pongoai/react-textfield';
import { Text } from '@pongoai/react-text';
import { Switch } from '@pongoai/react-switch';

const useStyles = makeStyles({
  reviewPanelContainer: {
    backgroundColor: 'white',
    padding: '20px 10px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    width: '47 vw',
    minWidth: '700px',
    height: '817px',
  },
  inputContainer: { display: 'flex', justifyContent: 'space-around', width: 'auto', marginTop: '15px' },
  textField: { width: '180px', zIndex: 2 },
  exportButton: {
    color: 'white',
    borderRadius: '99px',
    padding: '10px',
    marginTop: '9px',
  },
  reviewFlexbox: {
    display: 'flex',
    height: 'auto',
    overflow: 'hidden',
    overflowY: 'scroll',
    width: 'auto',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '20px',
    flexDirection: 'column',
    marginTop: '10px',
  },
  reviewCardContianer: { marginBottom: '40px' },
  directionSwitchContainer: { display: ' flex', flexDirection: 'column', justifyContent: 'space-around' },
  directionSwitch: { margin: 'auto' },
  separator: { height: '2px', backgroundColor: 'black', margin: '30px 10px 10px 10px', opacity: '0.2' },
});
function ReviewsToCSV(inputList: any) {
  const csvString = [
    [
      'Customer Name',
      'Star Rating',
      'Net Promoter Score',
      'Is Verified?',
      'Location',
      'Timestamp',
      'Review Text',
      'Product Name',
    ],
    ...inputList.map((review: any) => [
      review['customerName'],
      review['starRating'],
      review['NPS'],
      review['isVerified'],
      review['location'],
      review['timestamp'],
      review['reviewText'].replaceAll(',', ''),
      review['productName'],
    ]),
  ]
    .map(e => e.join(','))
    .join('\n');
  return 'data:text/csv;charset=utf-8,' + csvString;
}

function searchReviews(searchStr: any, review: any, searchFilter: any) {
  if (searchFilter == 'All') {
    return (
      (
        review['customerName'] +
        review['reviewText'] +
        review['productName'] +
        review['location'] +
        review['timestamp']
      ).indexOf(searchStr) != -1
    );
  } else return review[searchFilter].indexOf(searchStr) != -1;
}

//TODO: export react-switch and use that to change the orderBy direction instead of using a button
export const ReviewPanel = () => {
  const styles = useStyles();
  const [searchStr, setSearchStr] = React.useState('');
  const [searchFilter, setSearchFilter] = React.useState('All');
  const [orderDirection, setOrderDirection] = React.useState('increasing');
  const [orderBy, setOrderBy] = React.useState('None');

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
      productName: 'Jenas 1',
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
      productName: 'Shirt ver. 10',
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
      productName: 'BEANs',
      NPS: 9,
    },
  ]);

  const sortReviewList = () => {
    const newReviewList = REVIEW_LIST.map(a => {
      return { ...a };
    });

    orderDirection == 'increasing'
      ? newReviewList.sort((a: any, b: any) => (a[orderBy] < b[orderBy] ? 1 : -1))
      : newReviewList.sort((a: any, b: any) => (a[orderBy] > b[orderBy] ? 1 : -1));

    setReviewList(newReviewList);
  };
  //TODO: this element's scrollbar will use the same scrollbar as the full page

  const handleSearchStrChange = (e: any) => {
    setSearchStr(e.target.value);
  };

  const handleFilterChange = (e: any) => {
    setSearchFilter(String(e.target.dataset.value));
  };

  const handleOrderChange = (e: any) => {
    let newOrder = String(e.target.dataset.value);
    setOrderBy(newOrder);
    if (newOrder != 'None') {
      sortReviewList();
    }
  };

  const handleExportClick = () => {
    //TODO: fix inconsistent loading in google chrome
    let csvContent = ReviewsToCSV(REVIEW_LIST);
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  };

  const handleDirectionChange = () => {
    setOrderDirection(orderDirection == 'increasing' ? 'decreasing' : 'increasing');
    sortReviewList();
  };

  const filterSearchOptions = [
    { value: 'All', label: 'All Fields' },
    { value: 'customerName', label: 'Customer' },
    { value: 'productName', label: 'Product' },
    { value: 'reviewText', label: 'Review Text' },
    { value: 'location', label: 'Location' },
  ];

  const orderByOptions = [
    { value: 'None', label: 'None' },
    { value: 'timestamp', label: 'Timestamp' },
    { value: 'NPS', label: 'NPS' },
    { value: 'starRating', label: 'Star Rating' },
  ];

  return (
    <div className={styles.reviewPanelContainer}>
      <Text weight="bold" size={600}>
        Reviews
      </Text>
      <div className={styles.inputContainer}>
        <TextField
          label="Search..."
          appearance="outlined"
          onChange={handleSearchStrChange}
          className={styles.textField}
        />
        <Select
          appearance="outlined"
          label="Filter search"
          options={filterSearchOptions}
          onChange={handleFilterChange}
          className={styles.textField}
        />

        <Select
          appearance="outlined"
          label="Order by"
          options={orderByOptions}
          onChange={handleOrderChange}
          className={styles.textField}
        />

        {orderBy != 'None' ? (
          <div className={styles.directionSwitchContainer}>
            <Text size={300}>{orderDirection}</Text>
            <Switch onClick={handleDirectionChange} className={styles.directionSwitch}></Switch>
          </div>
        ) : (
          <div></div>
        )}

        <Button onClick={handleExportClick} className={styles.exportButton} style={{ backgroundColor: '#636364' }}>
          Export
        </Button>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.reviewFlexbox}>
        {REVIEW_LIST.map(review => {
          return searchReviews(searchStr, review, searchFilter) ? (
            <div className={styles.reviewCardContianer} key={review['customerName'] + review['timestamp']}>
              <ReviewCard
                customerName={review['customerName']}
                starRating={review['starRating']}
                npsImg={review['NPS']}
                profileImg={review['profileImg']}
                isVerified={review['isVerified']}
                location={review['location']}
                timestamp={review['timestamp']}
                reviewText={review['reviewText']}
                productName={review['productName']}
                id={review['productName'] + review['customerName'] + review['timestamp']}
                isLink={false}
              />
            </div>
          ) : (
            <div></div>
          );
        })}
      </div>
    </div>
  );
};
