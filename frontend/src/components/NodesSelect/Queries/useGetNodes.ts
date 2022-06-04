import { useGetNodesQuery } from '../../../api';

const useGetNodes = () => {
  const query = useGetNodesQuery({});

  return query;
};

export default useGetNodes;
