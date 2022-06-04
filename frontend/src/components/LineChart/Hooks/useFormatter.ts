import { useCallback } from 'react';
import moment from 'moment';

const useFormatter = () => {
  const formatter = useCallback((dateTime: string) => {
    const formattedDate = moment(dateTime).format('YY-MM-DD');

    return formattedDate;
  }, []);

  return formatter;
};

export default useFormatter;
