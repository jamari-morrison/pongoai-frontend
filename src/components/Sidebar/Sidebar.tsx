import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { HomeIcon, SettingIcon, HomeIconActive, SettingIconActive } from './defaultIcons';
import type { Theme } from '@pongoai/react-theme';

const linkClassName = 'pongo-ai-sidebar-link';

const useStyles = makeStyles({
  sidebar: {
    position: 'fixed',
    height: '100%',
    width: '68px',
    top: '68px',
    background: 'white',
    display: 'flex',
    gap: '15px',
    flexDirection: 'column',
    flexShrink: 0,
    textAlign: 'center',
    boxShadow: 'inset 0px 0px 25px 1px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    zIndex: 1000,
  },

  sidebarLink: {
    width: '68px',
    height: '68px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0px',
    flexShrink: 0,
    textAlign: 'center',
    cursor: 'pointer',
  },

  sidebarAnchorLink: (theme: Theme) => ({
    position: 'relative',
    ':after': {
      content: "''",
      position: 'absolute',
      bottom: '-4px',
      left: '0',
      width: '100%',
      height: '2px',
      borderRadius: '999px',
      backgroundColor: theme.palette.inheritBackground,
      transition: 'opacity 150ms, transform 150ms',
      opacity: '0',
      transform: 'scale(0)',
      transformOrigin: 'center',
    },
  }),

  sidebarAnchorLinkActive: (theme: Theme) => ({
    boxShadow: 'inset 0px 0px 3px 0px rgba(0, 0, 0, 0.2)',
    [`& .${linkClassName}`]: {
      ':after': {
        opacity: '1',
        transform: 'scale(1)',
        backgroundColor: theme.palette.brand,
      },
    },
  }),

  sidebarLinkInactive: {
    [`:hover .${linkClassName}`]: {
      ':after': {
        opacity: '1',
        transform: 'scale(1)',
        backgroundColor: '#aaadac',
      },
    },

    [`:active .${linkClassName}`]: {
      ':after': {
        opacity: '1',
        transform: 'scale(1)',
        backgroundColor: '#7f737b',
      },
    },
  },
});

type SidebarProps = {
  activePage: String;
};

export const Sidebar = (props: SidebarProps) => {
  const { activePage } = props;
  const router = useRouter();
  const styles = useStyles();

  const onKeyDown = React.useCallback(
    (ev: any, href: string) => {
      ev.stopPropagation();
      switch (ev.key) {
        case 'Enter':
          router.push(href);
          break;
        case 'Space':
          router.push(href);
          break;
        default:
      }
    },
    [router],
  );

  const onHomeKeydown = React.useCallback((ev: any) => onKeyDown(ev, '/'), [onKeyDown]);
  const onSettingsKeydown = React.useCallback((ev: any) => onKeyDown(ev, '/settings'), [onKeyDown]);

  return (
    <div className={styles.sidebar}>
      <Link href="/" passHref>
        <div
          className={mergeClasses(
            styles.sidebarLink,
            activePage !== 'home' ? styles.sidebarLinkInactive : styles.sidebarAnchorLinkActive,
          )}
          onKeyDown={onHomeKeydown}
          tabIndex={0}
          role="link"
        >
          {activePage !== 'home' ? <HomeIcon /> : <HomeIconActive />}
          <a className={mergeClasses(linkClassName, styles.sidebarAnchorLink)}>Home</a>
        </div>
      </Link>
      <Link href="/settings" passHref>
        <div
          className={mergeClasses(
            styles.sidebarLink,
            activePage !== 'settings' ? styles.sidebarLinkInactive : styles.sidebarAnchorLinkActive,
          )}
          onKeyDown={onSettingsKeydown}
          tabIndex={0}
          role="link"
        >
          {activePage !== 'settings' ? <SettingIcon /> : <SettingIconActive />}
          <a className={mergeClasses(linkClassName, styles.sidebarAnchorLink)}>Settings</a>
        </div>
      </Link>
    </div>
  );
};
