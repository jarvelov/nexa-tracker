import type { Measurement, Node, Sensor } from '../types';

export type MeasurementsRequestBody = {
  dateFrom: string;
  dateTo: string;
  sensors: Array<string>;
  nodes: Array<string>;
};

export type MeasurementsRequest = {
  body: MeasurementsRequestBody;
};

export type ApiResponse<T = unknown> = {
  status: 'success';
  results: Array<T>;
};

export type MeasurementsResponse = ApiResponse<Measurement>;

export type SensorsRequestBody = null;

export type SensorsRequest = {
  body?: SensorsRequestBody;
};

export type SensorsResponse = ApiResponse<Sensor>;

export type NodesRequestBody = null;

export type NodesRequest = {
  body?: NodesRequestBody;
};

export type NodesResponse = ApiResponse<Node>;
