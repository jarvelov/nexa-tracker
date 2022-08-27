import { useFormatter, useLineChartData, useNodesSelected } from './Hooks';

const colors = ['#1d1d1d', '#21A101', '#0192aa'];

const LineChart = () => {
  const data = useLineChartData();
  const formatter = useFormatter();
  const nodesSelected = useNodesSelected();

  return <div>{nodesSelected}</div>;
};

export default LineChart;
