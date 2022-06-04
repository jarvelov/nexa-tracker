import { useCallback } from 'react';
import { useAppDispatch } from '../../../store/store';
import { setNodesSelected } from '../../../store/slices/app';
import useNodes from './useNodes';

const useOnChange = () => {
  const dispatch = useAppDispatch();
  const nodes = useNodes();

  const onChange = useCallback(
    (nodeIds: Array<string>) => {
      const nodesSelected = nodes.filter((node) => nodeIds.includes(node.id));

      dispatch(setNodesSelected(nodesSelected));
    },
    [dispatch, nodes],
  );

  return onChange;
};

export default useOnChange;
