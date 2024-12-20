import React from 'react';
import { Links, LinksFunction, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import Body from './layouts/Body';
import globalStyles from '~/style/global.scss?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyles },
];

const isBrowser = () => {
  return typeof window !== 'undefined' && window.document && window.document.createElement;
};


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>reactpress</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {!isBrowser() && '__ANTD_STYLE__'}
        {!isBrowser() && '__CSS_IN_JSS__'}
      </head>
      <body>
        <Body>{children}</Body>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {

  return (
    <div>
      <h1>Error</h1>
    </div>
  );
}