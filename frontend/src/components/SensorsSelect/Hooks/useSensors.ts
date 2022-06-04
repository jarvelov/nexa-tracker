import { useGetSensors } from '../Queries';

const useSensors = () => {
  const { data } = useGetSensors();

  if (data) {
    return data.results;
  }

  return [];
};

export default useSensors;
