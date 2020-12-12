import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from '../components/AppNavigation';
import store from '../store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <AppNavigation />
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

export default MyApp;
