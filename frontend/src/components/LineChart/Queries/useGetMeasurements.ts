import { useGetMeasurementsQuery } from '../../../api';
import { useSelectedSensorsIds } from './Hooks';

const dateFrom = new Date('2022-04-16 02:00').toISOString();
const dateTo = new Date('2022-04-16 18:00').toISOString();
const nodes = ['e7907978-88a1-4296-829a-f16d6ade0546'];

const useGetMeasurements = () => {
  const sensors = useSelectedSensorsIds();

  const query = useGetMeasurementsQuery({
    body: {
      dateFrom,
      dateTo,
      nodes,
      sensors,
    },
  });

  return query;
};

export default useGetMeasurements;
