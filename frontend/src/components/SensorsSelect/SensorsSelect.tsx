import { MultiSelect } from '@mantine/core';
import { useData } from './Hooks';

const SensorsSelect = () => {
  const data = useData();

  return <MultiSelect data={data} label="Sensors" />;
};

export default SensorsSelect;
