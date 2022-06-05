import { DatePicker } from '@mantine/dates';
import { useOnChange, useValue } from './Hooks';

const DateTo = () => {
  const onChange = useOnChange();
  const value = useValue();

  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      required
      value={value}
      onChange={onChange}
    />
  );
};

export default DateTo;
