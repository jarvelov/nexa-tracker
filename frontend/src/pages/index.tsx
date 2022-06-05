import type { NextPage } from 'next';
import LineChart from '../components/LineChart';
import ConditionallyRender from '../components/ConditionallyRender';
import SensorsSelect from '../components/SensorsSelect';
import NodesSelect from '../components/NodesSelect';
import DateFrom from '../components/DateFrom';
import DateTo from '../components/DateTo';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Nexa Tracker</h1>
      <SensorsSelect />
      <NodesSelect />
      <DateFrom />
      <DateTo />
      <ConditionallyRender client>
        <LineChart />
      </ConditionallyRender>
    </div>
  );
};

export default Home;
