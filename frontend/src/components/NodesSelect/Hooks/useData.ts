import useNodes from './useNodes';

const useData = () => {
  const nodes = useNodes();

  const data = nodes.map((node) => ({
    value: node.id,
    label: node.name,
  }));

  return data;
};

export default useData;
