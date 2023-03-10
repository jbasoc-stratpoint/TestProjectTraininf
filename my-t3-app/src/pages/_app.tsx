import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps, type AppType } from 'next/app';
import { NextPageWithLayout } from './page';

import '~/styles/globals.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  console.log(Component.getLayout);
  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
