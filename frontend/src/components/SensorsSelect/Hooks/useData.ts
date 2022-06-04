import useSensors from './useSensors';

const useData = () => {
  const sensors = useSensors();

  const data = sensors.map((sensor) => ({
    value: sensor.id,
    label: sensor.name,
  }));

  return data;
};

export default useData;
