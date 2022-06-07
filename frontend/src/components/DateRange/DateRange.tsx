import { DateRangePicker } from '@mantine/dates';
import { useOnChange, useValue } from './Hooks';

const DateFrom = () => {
  const onChange = useOnChange();
  const value = useValue();

  return (
    <DateRangePicker
      placeholder="Pick date"
      label="Event date"
      required
      value={value}
      onChange={onChange}
    />
  );
};

export default DateFrom;
