import type { AppProps } from 'next/app';
import React from 'react';
import AppNavigation from '../components/AppNavigation';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppNavigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
