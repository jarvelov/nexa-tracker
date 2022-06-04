import { MultiSelect } from '@mantine/core';
import { useData, useOnChange } from './Hooks';

const NodesSelect = () => {
  const data = useData();
  const onChange = useOnChange();

  return <MultiSelect data={data} label="Nodes" onChange={onChange} />;
};

export default NodesSelect;
