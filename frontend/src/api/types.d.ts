import type { Measurement } from '../types';

export type MeasurementsRequestBody = {
  dateFrom: string;
  dateTo: string;
  sensors: Array<string>;
  nodes: Array<string>;
}

export type MeasurementsRequest = {
  body: MeasurementsRequestBody;
}

export type MeasurementsResponse = {
  status: 'success';
  results: Array<Measurement>;
}
