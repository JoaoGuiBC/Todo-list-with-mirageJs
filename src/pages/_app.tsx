import Head from 'next/head'

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet" />
        
        <link rel="icon" href="/favicon.ico" />

        <title>TODO - web</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
