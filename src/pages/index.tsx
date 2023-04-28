import Head from 'next/head';

import { TaxCalculator } from '@/containers/TaxCalculator';
import { Main } from '@/components/Layout/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tax Calculator</title>
        <meta name="description" content="Tax calculator assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <TaxCalculator />
      </Main>
    </>
  );
}
