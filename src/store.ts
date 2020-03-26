import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import counterReducer from './components/counter/counterSlice';
import displayNameReducer from './components/UserPanel/userSlice';
import singleStockReducer from './components/StockTable/singleStockSlice';

type RootState = any; // actually it is like the default configured reducer we export here

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: displayNameReducer,
    singleStock: singleStockReducer,
  },
});
