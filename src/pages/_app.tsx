import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';

import '~/styles/globals.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  console.log(Component.getLayout);
  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
