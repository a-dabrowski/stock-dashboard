import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/counter/counterSlice';
import displayNameReducer from './components/UserPanel/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: displayNameReducer,
  },
});
