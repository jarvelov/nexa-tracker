import { useAppSelector } from '../../../store/store';

const useValue = () => {
  const dateTo = useAppSelector((state) => state.app.dateTo);

  return new Date(dateTo);
};

export default useValue;
