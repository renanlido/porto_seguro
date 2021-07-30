import { AppProps } from 'next/dist/next-server/lib/router/router';
import { BreakPointProvider } from '../contexts/BreakPointContext';
import { DropProvider } from '../contexts/DropContext';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DropProvider>
      <BreakPointProvider>
        <Component {...pageProps} />
      </BreakPointProvider>
    </DropProvider>
  );
}

export default MyApp;
