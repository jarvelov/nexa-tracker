import { useMemo } from 'react';
import { useAppSelector } from '../../../store/store';
import type { DateTuple } from '../types';

const useValue = () => {
  const dateFrom = useAppSelector((state) => state.app.dateFrom);
  const dateTo = useAppSelector((state) => state.app.dateTo);

  const value = useMemo(
    () => [new Date(dateFrom), new Date(dateTo)],
    [dateFrom, dateTo],
  );

  return value as DateTuple;
};

export default useValue;
