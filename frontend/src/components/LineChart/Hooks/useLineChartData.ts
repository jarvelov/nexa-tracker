import { useMemo } from 'react';
import useSensorsNames from './useSensorsNames';
import { useGetMeasurements } from '../Queries';

export type Data = Array<{
  [key: string]: string | number;
}>;

const useLineChartData = () => {
  const { data } = useGetMeasurements();
  const sensorsNames = useSensorsNames();

  const lineChartData = useMemo(() => {
    if (data && data.status === 'success') {
      const { results } = data;

      return results.reduce((chartData, { createdAt, sensor, value }) => {
        const sensorName = sensorsNames.find(({ id }) => id === sensor);

        if (sensorName) {
          const { name } = sensorName;

          return [
            ...chartData,
            {
              name: new Date(createdAt).valueOf(),
              [name]: value,
            },
          ];
        }

        return chartData;
      }, [] as Data);
    }

    return [];
  }, [data]);

  return lineChartData;
};

export default useLineChartData;
