import { createSlice } from "@reduxjs/toolkit";

interface iPortal {
  portalChild: any;
}

export const initialStatePortal: iPortal = {
  portalChild: null,
};

export const slice = createSlice({
  name: "portal",
  initialState: initialStatePortal,
  reducers: {
    clearPortal: (state) => {
      state.portalChild = null;
    },
    pushToPortal: (state, action) => {
      if(action.payload) {
        state.portalChild = action.payload;
      }
    },
  }
});

export const selectPortalContent = (state: any): any => state.portal.portalChild;

export const {
  clearPortal,
  pushToPortal
} = slice.actions;

export default slice.reducer;
