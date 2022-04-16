import { useMemo } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { Tooltip, XAxis, LineChart, Line } from 'recharts';
import moment from 'moment';
import { useGetMeasurementsQuery } from '../api';
import styles from '../styles/Home.module.css'

const dateFrom = new Date('2022-04-16 02:00').toISOString();
const dateTo = new Date('2022-04-16 18:00').toISOString();
const sensors = ['7066393a-8e41-433e-bc47-a96434005260'];
const nodes = ['e7907978-88a1-4296-829a-f16d6ade0546'];

const sensorNames = [{
  id: '7066393a-8e41-433e-bc47-a96434005260',
  name: 'Värmeröret',
  color: '#8884d8',
}];

export type Data = Array<{
  [key: string]: string | number,
}>;

const formatter = (unixTime) => {
  console.log('unixTime', unixTime);

  return moment.unix(unixTime).format('HH:MM:SS');
}

const Home: NextPage = () => {

  const { data: measurementsData } = useGetMeasurementsQuery({
    body: {
      dateFrom,
      dateTo,
      nodes,
      sensors,
    }
  });

  const lineChartData = useMemo(() => {
    if (measurementsData && measurementsData.status === 'success') {
      const { results } = measurementsData;

      return results.reduce((chartData, { createdAt, sensor, value }) => {
        const sensorName = sensorNames.find(({ id }) => id === sensor);

        if (sensorName) {
          const { name } = sensorName;

          return [
            ...chartData,
            {
              name: new Date(createdAt).valueOf(),
              [name]: value,
            }
          ];
        }

        return chartData;
      }, [] as Data);
    }

    return [];
  }, [measurementsData])

  // [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];


  const renderLineChart = (
    <LineChart width={400} height={400} data={lineChartData}>

      {sensorNames.map(({ color, id, name }) => <Line key={id} dataKey={name} stroke={color} />)}
      <XAxis tickCount={0} dataKey="name" tickFormatter={formatter} />
      <Tooltip />
    </LineChart>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Nexa Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nexa Tracker
        </h1>
        {renderLineChart}
      </main>
    </div>
  )
}

export default Home
