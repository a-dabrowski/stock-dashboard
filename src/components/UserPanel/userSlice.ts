import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    displayName: 'No custom name',
  },
  reducers: {
    changeDisplayName: (state, action) => {
      state.displayName = action.payload.newDisplayName
    }
  }
});

export const selectDisplayName = (state: any) : string => state.displayName;
export const { changeDisplayName } = slice.actions
export default slice.reducer;
