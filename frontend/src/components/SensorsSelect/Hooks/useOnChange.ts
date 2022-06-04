import { useCallback } from 'react';
import { useAppDispatch } from '../../../store/store';
import { setSensorsSelected } from '../../../store/slices/app';
import useSensors from './useSensors';

const useOnChange = () => {
  const dispatch = useAppDispatch();
  const sensors = useSensors();

  const onChange = useCallback(
    (sensorIds: Array<string>) => {
      const sensorsSelected = sensors.filter((sensor) => {
        return sensorIds.includes(sensor.id);
      });

      dispatch(setSensorsSelected(sensorsSelected));
    },
    [dispatch, sensors],
  );

  return onChange;
};

export default useOnChange;
