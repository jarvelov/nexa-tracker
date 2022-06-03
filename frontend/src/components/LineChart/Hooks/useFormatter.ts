import { useCallback } from 'react';
import moment from 'moment';

const useFormatter = () => {
  const formatter = useCallback((unixTime: string) => {
    const unixTimeNumber = Number(unixTime);
    const formattedDate = moment.unix(unixTimeNumber).format('HH:MM:SS');

    return formattedDate;
  }, []);

  return formatter;
};

export default useFormatter;
