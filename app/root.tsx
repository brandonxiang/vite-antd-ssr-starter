import React from 'react';
import { isRouteErrorResponse, Links, LinksFunction, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';
import Body from './layouts/Body';
import globalStyles from '~/style/global.scss?url';
import { Button, Result } from 'antd';
import type { Route } from './+types/root';

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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const _error = error as RouterError;

  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  // let stack: string | undefined;

  if (isRouteErrorResponse(_error)) {
    message = _error.status === 404 ? '404' : 'Error';
    details =
      _error.status === 404
        ? 'The requested page could not be found.'
        : _error.statusText || details;
  } else if (import.meta.env.DEV && _error && _error instanceof Error) {
    details = _error.message;
    // stack = _error.stack;
  }


  return (
    <main>
      <Result
        status={_error!.status === 404 ? 404 : 500}
        title={message}
        subTitle={`Sorry, something went wrong.(${details})`}
        extra={<Button type="primary" onClick={() => window.location.replace('/')}>Back Home</Button>}
      />
    </main>
  );
}