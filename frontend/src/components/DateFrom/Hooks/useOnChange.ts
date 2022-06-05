import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setDateFrom } from '../../../store/slices/app';

const useOnChange = () => {
  const dispatch = useDispatch();

  const onChange = useCallback(
    (value: Date) => {
      dispatch(setDateFrom(value.toISOString()));
    },
    [dispatch],
  );

  return onChange;
};

export default useOnChange;
