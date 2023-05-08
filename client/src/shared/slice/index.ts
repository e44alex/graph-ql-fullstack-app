import { AppState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';


export const initialState: AppState = {};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showError: (state, action: PayloadAction<string | any>) => {
      toast.error(action.payload);
    },
    showSuccess: (state, action: PayloadAction<string | any>) => {
      toast.success(action.payload);
    },
    showInfo:(state,action: PayloadAction<string | any>) => {
      toast.info(action.payload);
    },
    showAlert:(state,action: PayloadAction<string | any>) => {
      toast.warning(action.payload);
    },
  },
});

export const { actions: appActions } = appSlice;

