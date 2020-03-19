import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    displayName: 'No custom name',
    isLoggedIn: true,
  },
  reducers: {
    changeDisplayName: (state, action) => {
      state.displayName = action.payload.newDisplayName
    }
  }
});

export const selectDisplayName = (state: any) : string => state.user.displayName;
export const selectIsLoggedIn = (state: any) : boolean => state.user.isLoggedIn;
export const { changeDisplayName } = slice.actions
export default slice.reducer;
