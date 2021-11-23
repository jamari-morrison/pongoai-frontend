import type { NextPage } from 'next';
import { Header, Sidebar, Content } from '../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

export const Share: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Sidebar activePage="send" />
      <Content>Share</Content>
    </FluentProvider>
  );
};

export default Share;