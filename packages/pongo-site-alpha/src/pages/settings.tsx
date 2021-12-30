import type { NextPage } from 'next';
import { Header, Sidebar, Content } from '../components';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';
import * as React from 'react';
import { WelcomeMessage, AuthenticationPopup } from '../components';
import UserStore from '../stores/UserStore';

export const Settings: NextPage = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [isShowingAuthPopup, setIsShowingAuthPopup] = React.useState(false);

  React.useEffect(() => {
    console.log('joe');
    console.log(UserStore);
    //TO ADD LOGIN CHECK ENDPOINT HERE
    //Get username,
  }, []);

  const logout = async () => {
    console.log('logging out');
    try {
      let res = await fetch('ENDPOINT/logout', { method: 'post', headers: { 'Content-type': 'application/json' } });
      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <Header setIsShowingAuthPopup={setIsShowingAuthPopup} setIsLogin={setIsLogin} isLoggedIn={UserStore.isLoggedIn} />
      {isShowingAuthPopup ? (
        <AuthenticationPopup
          isLogin={isLogin}
          setIsShowingAuthPopup={setIsShowingAuthPopup}
          isShowingAuthPopup={isShowingAuthPopup}
          setIsLogin={setIsLogin}
        />
      ) : (
        <div></div>
      )}
      {UserStore.isLoggedIn ? <Sidebar activePage="home" /> : <div></div>}
      <Content>
        {UserStore.isLoggedIn ? (
          'Settings'
        ) : (
          <WelcomeMessage setIsShowingAuthPopup={setIsShowingAuthPopup} setIsLogin={setIsLogin} />
        )}
      </Content>
    </FluentProvider>
  );
};

export default Settings;
