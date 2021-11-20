import type { NextPage } from 'next';
import { Header, Sidebar, Content } from '../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

export const Settings: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Sidebar activePage="settings" />
      <Content>Settings</Content>
    </FluentProvider>
  );
};

export default Settings;
