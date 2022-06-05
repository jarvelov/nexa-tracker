import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import type { Node, Sensor } from '../../types';

export type AppState = {
  menuOpen: boolean;
  sensorsSelected: Array<Sensor>;
  nodesSelected: Array<Node>;
  dateFrom: string;
  dateTo: string;
};

const initialState: AppState = {
  menuOpen: false,
  sensorsSelected: [],
  nodesSelected: [],
  dateFrom: moment().subtract(1, 'day').startOf('day').toISOString(),
  dateTo: moment().startOf('day').toISOString(),
};

console.log(initialState);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMenuOpen(state, action) {
      state.menuOpen = action.payload;
    },
    setNodesSelected(state, action) {
      state.nodesSelected = action.payload;
    },
    setSensorsSelected(state, action) {
      state.sensorsSelected = action.payload;
    },
    setDateFrom(state, action) {
      state.dateFrom = action.payload;
    },
    setDateTo(state, action) {
      state.dateTo = action.payload;
    },
  },
});

export const {
  setMenuOpen,
  setNodesSelected,
  setSensorsSelected,
  setDateFrom,
  setDateTo,
} = appSlice.actions;

export default appSlice;
