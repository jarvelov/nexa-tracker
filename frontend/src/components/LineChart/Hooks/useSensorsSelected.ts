import { useAppSelector } from '../../../store/store';

const useSensorsSelected = () => {
  const sensorsSelected = useAppSelector((state) => state.app.sensorsSelected);

  return sensorsSelected;
};

export default useSensorsSelected;
