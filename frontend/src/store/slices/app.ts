import { createSlice } from '@reduxjs/toolkit';
import type { Node, Sensor } from '../../types';

export type AppState = {
  menuOpen: boolean;
  sensorsSelected: Array<Sensor>;
  nodesSelected: Array<Node>;
};

const initialState: AppState = {
  menuOpen: false,
  sensorsSelected: [],
  nodesSelected: [],
};

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
  },
});

export const { setMenuOpen, setNodesSelected, setSensorsSelected } =
  appSlice.actions;

export default appSlice;
