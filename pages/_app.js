import React, { useEffect, useState } from 'react';
// import Layout from '@/components/Layout';
import { Layout } from '@/components';
import 'tailwindcss/tailwind.css';
import "@/styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;