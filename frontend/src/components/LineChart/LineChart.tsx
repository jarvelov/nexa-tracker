import { Tooltip, XAxis, LineChart as RechartsLineChart, Line } from 'recharts';
import { useFormatter, useLineChartData, useSensorsNames } from './Hooks';

const LineChart = () => {
  const data = useLineChartData();
  const formatter = useFormatter();
  const sensorsNames = useSensorsNames();

  return (
    <RechartsLineChart width={400} height={400} data={data}>
      {sensorsNames.map(({ color, id, name }) => (
        <Line key={id} dataKey={name} stroke={color} />
      ))}
      <XAxis tickCount={0} dataKey="name" tickFormatter={formatter} />
      <Tooltip />
    </RechartsLineChart>
  );
};

export default LineChart;
