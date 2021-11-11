import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

export const Share: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      Share
    </FluentProvider>
  );
};

export default Share;
