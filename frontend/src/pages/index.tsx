import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import LineChart from '../components/LineChart';
import ConditionallyRender from '../components/ConditionallyRender';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nexa Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Nexa Tracker</h1>
        <ConditionallyRender client>
          <LineChart />
        </ConditionallyRender>
      </main>
    </div>
  );
};

export default Home;
