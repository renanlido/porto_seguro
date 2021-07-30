import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="og:url" content="https://www.portoseguro.com.br" />

          <meta name="og:locale" content="pt_BR" />

          <meta
            name="description"
            content="Faça a cotação do Seguro para seu Carro, Casa, Empresa, Soluções Financeiras e diversos outros serviços com vantagens e benefícios exclusivos para você."
          />

          <meta
            name="og:title"
            content="Seguro Auto, Consórcio, Previdência, Crédito | Porto Seguro"
          />

          <meta
            name="og:description"
            content="Faça a cotação do Seguro para seu Carro, Casa, Empresa, Soluções Financeiras e diversos outros serviços com vantagens e benefícios exclusivos para você."
          />

          <meta
            name="twitter:title"
            content="Seguro Auto, Consórcio, Previdência, Crédito | Porto Seguro"
          />

          <meta
            name="twitter:description"
            content="Faça a cotação do Seguro para seu Carro, Casa, Empresa, Soluções Financeiras e diversos outros serviços com vantagens e benefícios exclusivos para você."
          />

          <meta name="og:site_name" content="Novo Institucional" />

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* https://www.portoseguro.com.br/ */}
          <link rel="canonical" href="https://www.portoseguro.com.br/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
