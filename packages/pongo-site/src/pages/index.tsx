import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FluentProvider } from '@fluentui/react-provider';
import { Button } from '@pongoai/react-button';
import { Search, Select } from '@pongoai/react-textfield';
import { webLightTheme } from '@pongoai/react-theme';
import { Header, Sidebar, Content, DashboardCard } from '../components';

const cards: any = [
  {
    name: 'Jeans 1',
    rating: 4.5,
    ratingCount: 30,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
  {
    name: 'Jeans 2',
    rating: 3.2,
    ratingCount: 35,
  },
];

const cardWrapperStyles: React.CSSProperties = {
  display: 'grid',
  gridGap: '30px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  justifyItems: 'space-evenly',
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
};

const searchTaskBarStyles: React.CSSProperties = {
  height: '68px',
  display: 'flex',
  flexDirection: 'row',
  background: 'white',
  verticalAlign: 'middle',
  alignItems: 'center',
  paddingLeft: '20px',
  paddingRight: '20px',
  boxShadow: 'inset 0px 0px 25px 1px rgba(0, 0, 0, 0.04)',
  gap: '12px',
};

const selectStyles = {
  width: '175px',
  height: '45px',
  zIndex: '1',
};

const searchBarStyles = {
  zIndex: '1',
  height: '45px',
};

const circularBorder = {
  borderRadius: '999px',
};

const buttonStyles = { marginLeft: 'auto' };

const selectOptions = [
  { value: 'Relevance', label: 'Relevance' },
  { value: 'ratingHigh', label: 'Rating - High' },
  { value: 'ratingLow', label: 'Rating - Low' },
  { value: 'count', label: 'Review Count' },
];

const Home: NextPage = () => {
  const [currentSurveys, setCurrentSurveys] = React.useState(cards);
  const [searchValue, setSearchValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('relevance');

  const onSelectChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>, data: { value: string }) => {
    setSelectValue(data.value);
  }, []);

  const onSearchChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(ev.target.value);
  }, []);

  const onButtonClick = React.useCallback(() => {
    cards.push({ name: 'Test', rating: 5, ratingCount: 305 });
    setCurrentSurveys([...cards]);
  }, []);

  const renderCards = React.useMemo(() => {
    let sortedList = [];
    const renderedSurveys = [];

    switch (selectValue) {
      case 'ratingHigh':
        sortedList = [...currentSurveys];
        sortedList.sort(function (a, b) {
          return a.rating - b.rating;
        });
        break;
      case 'ratingLow':
        sortedList = [...currentSurveys];
        sortedList.sort(function (a, b) {
          return b.rating - a.rating;
        });
        break;
      case 'count':
        sortedList = [...currentSurveys];
        sortedList.sort(function (a, b) {
          return a.ratingCount - b.ratingCount;
        });
        break;
      default:
        sortedList = currentSurveys;
        break;
    }

    for (let i = sortedList.length - 1; i >= 0; i--) {
      const { name, rating, ratingCount } = sortedList[i];

      if (name.toLowerCase().includes(searchValue.toLowerCase())) {
        renderedSurveys.push(<DashboardCard name={name} rating={rating} ratingCount={ratingCount} />);
      }
    }

    return renderedSurveys;
  }, [selectValue, searchValue, currentSurveys]);

  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Sidebar activePage="home" />
      <Head>
        <title>Pongo AI</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Content>
        <>
          <div style={searchTaskBarStyles}>
            <Search
              placeholder="Search your surveys..."
              appearance="outlined"
              value={searchValue}
              onChange={onSearchChange}
              textFieldBorder={{ style: circularBorder }}
              style={searchBarStyles}
            />
            <Select
              value={selectValue}
              onChange={onSelectChange}
              appearance="outlined"
              options={selectOptions}
              style={selectStyles}
              label="Sort by"
            />
            <Button onClick={onButtonClick} appearance="primary" size="large" style={buttonStyles}>
              + New Product
            </Button>
          </div>
          <div style={cardWrapperStyles}>{renderCards}</div>
        </>
      </Content>
    </FluentProvider>
  );
};

export default Home;
