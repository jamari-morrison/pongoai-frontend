import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

export const Reviews: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      Reviews
    </FluentProvider>
  );
};

export default Reviews;
