import { useGetNodes } from '../Queries';

const useNodes = () => {
  const { data } = useGetNodes();

  if (data) {
    return data.results;
  }

  return [];
};

export default useNodes;
