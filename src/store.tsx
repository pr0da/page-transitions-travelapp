import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { rootReducer } from './slices';
import preloadedState from './preloadedState';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
