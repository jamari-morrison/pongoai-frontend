import * as React from 'react';

type ContentProps = {
  children: JSX.Element | String;
};

const contentStyles: React.CSSProperties = {
  position: 'relative',
  paddingLeft: '88px',
  paddingTop: '88px',
  paddingRight: '44px',
  paddingBottom: '44px',
};

export const Content = (props: ContentProps) => {
  const { children } = props;

  return <div style={contentStyles}>{children}</div>;
};
