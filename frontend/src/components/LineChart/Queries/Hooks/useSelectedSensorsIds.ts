import { useAppSelector } from '../../../../store/store';

const useSensorsSelectedIds = () => {
  const sensorsSelected = useAppSelector((state) => state.app.sensorsSelected);
  const sensorsSelectedIds = sensorsSelected.map((sensor) => sensor.id);

  return sensorsSelectedIds;
};

export default useSensorsSelectedIds;
