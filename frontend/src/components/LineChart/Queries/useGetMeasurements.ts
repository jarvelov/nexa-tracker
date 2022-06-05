import moment from 'moment';
import { useGetMeasurementsQuery } from '../../../api';
import { useAppSelector } from '../../../store/store';
import { useSelectedNodesIds, useSelectedSensorsIds } from './Hooks';

const useGetMeasurements = () => {
  const sensors = useSelectedSensorsIds();
  const nodes = useSelectedNodesIds();

  const dateFrom = useAppSelector((state) => state.app.dateFrom);
  const dateTo = useAppSelector((state) => state.app.dateTo);

  const query = useGetMeasurementsQuery({
    body: {
      dateFrom: moment(dateFrom).toISOString(),
      dateTo: moment(dateTo).toISOString(),
      nodes,
      sensors,
    },
  });

  return query;
};

export default useGetMeasurements;
