import * as React from 'react';
import type { NextPage } from 'next';
import { Header, Sidebar } from '../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

const Home: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Sidebar activePage="home" />
    </FluentProvider>
  );
};

export default Home;
