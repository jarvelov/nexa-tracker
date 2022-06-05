import {
  Tooltip,
  XAxis,
  YAxis,
  LineChart as RechartsLineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { useFormatter, useLineChartData, useNodesSelected } from './Hooks';

const colors = ['#1d1d1d', '#21A101', '#0192aa'];

const LineChart = () => {
  const data = useLineChartData();
  const formatter = useFormatter();
  const nodesSelected = useNodesSelected();

  return (
    <RechartsLineChart width={800} height={400} data={data}>
      {nodesSelected.map(({ id, name }, index) => (
        <Line connectNulls key={id} dataKey={name} stroke={colors[index]} />
      ))}
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tickCount={0} dataKey="name" tickFormatter={formatter} />
      <YAxis />
      <Tooltip />
    </RechartsLineChart>
  );
};

export default LineChart;
