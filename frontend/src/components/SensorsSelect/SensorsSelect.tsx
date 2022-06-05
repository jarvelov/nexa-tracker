import { MultiSelect } from '@mantine/core';
import { useData, useOnChange } from './Hooks';

const SensorsSelect = () => {
  const data = useData();
  const onChange = useOnChange();

  return <MultiSelect data={data} label="Sensors" onChange={onChange} />;
};

export default SensorsSelect;
