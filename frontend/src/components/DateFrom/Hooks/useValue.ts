import { useAppSelector } from '../../../store/store';

const useValue = () => {
  const dateFrom = useAppSelector((state) => state.app.dateFrom);

  return new Date(dateFrom);
};

export default useValue;
