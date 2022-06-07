import type { NextPage } from 'next';
// import LineChart from '../components/LineChart';
// import ConditionallyRender from '../components/ConditionallyRender';
// import SensorsSelect from '../components/SensorsSelect';
// import DateRange from '../components/DateRange';

const MeasurementsForSensorForNode: NextPage = () => {
  const sensorName = 'sensor';
  const nodeName = 'node';

  return (
    <div>
      <h1>
        <span>Nexa Tracker</span>
        <span>{sensorName}</span>
        &nbsp;
        <span>{nodeName}</span>
      </h1>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  console.log('context');

  return {
    props: {},
  };
};

export default MeasurementsForSensorForNode;
