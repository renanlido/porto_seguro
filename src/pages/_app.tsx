import { AppProps } from 'next/dist/next-server/lib/router/router';
import { BreakPointProvider } from '../contexts/BreakPointContext';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BreakPointProvider>
      <Component {...pageProps} />
    </BreakPointProvider>
  );
}

export default MyApp;
