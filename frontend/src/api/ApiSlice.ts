import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MeasurementsResponse, MeasurementsRequest } from './types';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9008/api',
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
  }),
});

export const { useGetMeasurementsQuery } = apiSlice;

export default apiSlice;
