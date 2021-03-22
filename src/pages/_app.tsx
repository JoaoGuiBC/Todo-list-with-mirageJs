import Head from 'next/head'

import { TodoProvider } from '../hooks/useTodos';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet" />
        
        <link rel="icon" href="/favicon.ico" />

        <title>TODO - web</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </TodoProvider>
  )
}

export default MyApp
