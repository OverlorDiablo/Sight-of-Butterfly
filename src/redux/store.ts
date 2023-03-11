import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from './types';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './slices';

const store = configureStore({
  reducer: reducers,
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
