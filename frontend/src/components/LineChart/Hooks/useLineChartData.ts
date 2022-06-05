import { useMemo } from 'react';
import moment from 'moment';
import useNodesSelected from './useNodesSelected';
import useSensorsSelected from './useSensorsSelected';
import { useGetMeasurements } from '../Queries';

export type Data = Array<{
  [key: string]: string | number;
}>;

export type ChartData = Data;

const useLineChartData = () => {
  const { data } = useGetMeasurements();
  const sensorsSelected = useSensorsSelected();
  const nodesSelected = useNodesSelected();

  const lineChartData = useMemo(() => {
    if (data && data.status === 'success') {
      const { results: measurements } = data;

      return measurements.reduce(
        (nodeChartData, { createdAt, sensor, node, value }) => {
          const matchedNode = nodesSelected.find(({ id }) => id === node);
          const matchedSensor = sensorsSelected.find(({ id }) => id === sensor);

          if (matchedSensor && matchedNode) {
            const { name: sensorName } = matchedSensor;
            const { id: nodeId, name: nodeName } = matchedNode;

            return [
              ...nodeChartData,
              {
                name: moment(createdAt).format('YYYY-MM-DD HH:MM:ss'),
                time: moment(createdAt).toDate().getTime(),
                value,
                [nodeName]: value,
              },
            ];
          }

          return nodeChartData;
        },
        [] as Data,
      );
    }

    return [];
  }, [data, nodesSelected, sensorsSelected]);

  return lineChartData;
};

export default useLineChartData;
