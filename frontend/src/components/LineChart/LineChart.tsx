import { Tooltip, XAxis, LineChart as RechartsLineChart, Line } from 'recharts';
import { useFormatter, useLineChartData, useSensorsSelected } from './Hooks';

const LineChart = () => {
  const data = useLineChartData();
  const formatter = useFormatter();
  const sensorsSelected = useSensorsSelected();

  return (
    <RechartsLineChart width={400} height={400} data={data}>
      {sensorsSelected.map(({ id, name }) => (
        <Line key={id} dataKey={name} />
      ))}
      <XAxis tickCount={0} dataKey="name" tickFormatter={formatter} />
      <Tooltip />
    </RechartsLineChart>
  );
};

export default LineChart;
