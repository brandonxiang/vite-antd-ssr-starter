import React from 'react';
import { Links, LinksFunction, Meta, Outlet, Scripts, ScrollRestoration, useNavigate, useRouteError } from 'react-router';
import Body from './layouts/Body';
import globalStyles from '~/style/global.scss?url';
import { Button, Result } from 'antd';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyles },
];

const isBrowser = () => {
  return typeof window !== 'undefined' && window.document && window.document.createElement;
};

interface RouterError {
  status?: number;
  data?: string;
  message?: string;
}

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
  const error = useRouteError() as RouterError;
  const navigate = useNavigate();

  if (error.status === 404) {
    return (
      <Result
        status="404"
        title="404"
        subTitle={`Sorry, something went wrong.(${error.data})`}
        extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
      />
    );
  }
  return (
    <Result
      status="500"
      title="500"
      subTitle={`Sorry, something went wrong.(${error.data})`}
      extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
    />
  );
}