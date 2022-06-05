import { useAppSelector } from '../../../../store/store';

const useSelectedNodesIds = () => {
  const nodesSelected = useAppSelector((state) => state.app.nodesSelected);
  const nodesSelectedIds = nodesSelected.map((sensor) => sensor.id);

  return nodesSelectedIds;
};

export default useSelectedNodesIds;
