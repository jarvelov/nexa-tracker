import { useMemo } from 'react';
import moment from 'moment';
import useSensorsSelected from './useSensorsSelected';
import { useGetMeasurements } from '../Queries';

export type Data = Array<{
  [key: string]: string | number;
}>;

const useLineChartData = () => {
  const { data } = useGetMeasurements();
  const sensorsSelected = useSensorsSelected();

  const lineChartData = useMemo(() => {
    if (data && data.status === 'success') {
      const { results } = data;

      return results.reduce((chartData, { createdAt, sensor, value }) => {
        const matchedSensor = sensorsSelected.find(({ id }) => id === sensor);

        if (matchedSensor) {
          const { name } = matchedSensor;

          return [
            ...chartData,
            {
              name: moment(createdAt).format('YYYY-MM-DD HH:MM:SS'),
              [name]: value,
            },
          ];
        }

        return chartData;
      }, [] as Data);
    }

    return [];
  }, [data, sensorsSelected]);

  return lineChartData;
};

export default useLineChartData;
