import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  MeasurementsResponse,
  MeasurementsRequest,
  NodesResponse,
  NodesRequest,
  SensorsResponse,
  SensorsRequest,
} from './types';

const protocol = process.env.NEXT_PUBLIC_API_SERVER_PROTOCOL;
const hostname = process.env.NEXT_PUBLIC_API_SERVER_HOSTNAME;
const port = process.env.NEXT_PUBLIC_API_SERVER_PORT;
const path = process.env.NEXT_PUBLIC_API_SERVER_PATH;

const baseUrl = `${protocol}://${hostname}:${port}${path}`;

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getMeasurements: builder.query<MeasurementsResponse, MeasurementsRequest>({
      query: ({ body }) => {
        return {
          url: '/measurements',
          method: 'POST',
          body,
        };
      },
    }),
    getSensors: builder.query<SensorsResponse, SensorsRequest>({
      query: () => {
        return {
          url: '/sensors',
          method: 'POST',
        };
      },
    }),
    getNodes: builder.query<NodesResponse, NodesRequest>({
      query: () => {
        return {
          url: '/nodes',
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useGetMeasurementsQuery, useGetNodesQuery, useGetSensorsQuery } =
  apiSlice;

export default apiSlice;
