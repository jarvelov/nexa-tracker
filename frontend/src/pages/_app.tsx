import { AppShell } from '@mantine/core';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import store from '../store';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Nexa Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell header={<Header />} navbar={<Navbar />}>
        <Component {...pageProps} />
      </AppShell>
    </Provider>
  );
};

export default App;
