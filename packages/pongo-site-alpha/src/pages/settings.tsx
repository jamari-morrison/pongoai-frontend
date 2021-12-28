import type { NextPage } from 'next';
import { Header, Sidebar } from '../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

export const Settings: NextPage = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Sidebar activePage="settings" />
    </FluentProvider>
  );
};

export default Settings;
