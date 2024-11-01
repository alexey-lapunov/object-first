import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { AlertProps } from '@/components/UI/Alert/Alert';

export interface VirtualMachineData {
  id: string;
  state: string;
  hostServer: string;
  cpu: string;
  memory: string;
  uptime: string;
  alerts: { type: AlertProps['type']; count: number; label: string };
}

export interface VirtualMachinesState {
  list: VirtualMachineData[];
}

const initialState: VirtualMachinesState = {
  list: [
    {
      id: uuidv4(),
      state: 'Running',
      hostServer: 'Server-1',
      cpu: '4 CPU',
      memory: '16 GiB',
      uptime: '12:34:56',
      alerts: { type: 'moderate', count: 1, label: 'Moderate' },
    },
    {
      id: uuidv4(),
      state: 'Stopped',
      hostServer: 'Server-2',
      cpu: '8 CPU',
      memory: '32 GiB',
      uptime: '00:00:00',
      alerts: { type: 'critical', count: 3, label: 'Critical' },
    },
    {
      id: uuidv4(),
      state: 'Running',
      hostServer: 'Server-3',
      cpu: '2 CPU',
      memory: '8 GiB',
      uptime: '123:45:00',
      alerts: { type: 'success', count: 0, label: 'All good' },
    },
  ],
};

const virtualMachinesSlice = createSlice({
  name: 'virtualMachines',
  initialState,
  reducers: {
    addVirtualMachine: (state, action: PayloadAction<VirtualMachineData>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addVirtualMachine } = virtualMachinesSlice.actions;
export default virtualMachinesSlice.reducer;
