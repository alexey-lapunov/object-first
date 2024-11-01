import { configureStore } from '@reduxjs/toolkit';

import virtualMachinesReducer from './virtualMachinesSlice';

export const store = configureStore({
  reducer: {
    virtualMachines: virtualMachinesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
