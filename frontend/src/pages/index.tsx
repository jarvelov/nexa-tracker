import Head from 'next/head';
import type { NextPage } from 'next';
import LineChart from '../components/LineChart';
import ConditionallyRender from '../components/ConditionallyRender';
import SensorsSelect from '../components/SensorsSelect';
import NodesSelect from '../components/NodesSelect';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nexa Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Nexa Tracker</h1>
        <SensorsSelect />
        <NodesSelect />
        <ConditionallyRender client>
          <LineChart />
        </ConditionallyRender>
      </main>
    </div>
  );
};

export default Home;
