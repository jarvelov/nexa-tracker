import { useAppSelector } from '../../../store/store';

const useNodesSelected = () => {
  const nodesSelected = useAppSelector((state) => state.app.nodesSelected);

  return nodesSelected;
};

export default useNodesSelected;
