import { useEffect, useState } from 'react';
import { isServer } from '../../../helpers';

const useShowChart = () => {
  const [showChart, setShowCart] = useState(!isServer());

  useEffect(() => {
    setShowCart(true);
  }, [setShowCart]);

  return showChart;
};

export default useShowChart;
