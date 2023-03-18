import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

