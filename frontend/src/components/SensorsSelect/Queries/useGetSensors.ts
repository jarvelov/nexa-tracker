import { useGetSensorsQuery } from '../../../api';

const useGetSensors = () => {
  const query = useGetSensorsQuery({});

  return query;
};

export default useGetSensors;
