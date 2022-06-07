import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setDateFrom, setDateTo } from '../../../store/slices/app';
import type { DateTuple } from '../types';

const useOnChange = () => {
  const dispatch = useDispatch();

  const onChange = useCallback(
    ([dateFrom, dateTo]: DateTuple) => {
      const dateFromString = dateFrom.toISOString();
      const dateToString = dateTo.toISOString();

      dispatch(setDateFrom(dateFromString));
      dispatch(setDateTo(dateToString));
    },
    [dispatch],
  );

  return onChange;
};

export default useOnChange;
