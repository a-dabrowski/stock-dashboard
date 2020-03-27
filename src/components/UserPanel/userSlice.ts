import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "store";
import { User, getUserData, updateUserSubscriptions } from "api";

interface iUser {
  id: number;
  name: string;
  subscriptions: string[];
  displayName: string;
  isLoggedIn: boolean;
}

const initialStateUser: iUser = {
  id: 1,
  name: "Skrrt",
  displayName: "No custom name",
  isLoggedIn: true,
  subscriptions: ["ENERGA", "PGE"]
};

export const slice = createSlice({
  name: "user",
  initialState: initialStateUser,
  reducers: {
    changeDisplayName: (state, action) => {
      state.displayName = action.payload.newDisplayName;
    },
    addFavouriteTicker: (state, action) => {
      state.subscriptions.push(action.payload);
    },
    removeFavouriteTicker: (state, action) => {
      const target = state.subscriptions.indexOf(action.payload);
      state.subscriptions = state.subscriptions.splice(target, 1);
    }
  }
});

export const selectDisplayName = (state: any): string => state.user.displayName;
export const selectUserName = (state: any): string => state.user.name;
export const selectFavouriteTickers = (state: any): string[] =>
  state.user.subscriptions;
export const selectIsLoggedIn = (state: any): boolean => state.user.isLoggedIn;
export const {
  changeDisplayName,
  addFavouriteTicker,
  removeFavouriteTicker
} = slice.actions;
export default slice.reducer;

export const fetchFavouriteTickers = (): AppThunk => async dispatch => {
  //dispatch loading
  const fetchedUser = await getUserData(1); //dummy id parameter
  console.log(fetchedUser);
};

export const removeTickerSubscription = (
  tickerToDelete : string
): AppThunk => async (dispatch, getState) => {
  const userId = getState().user.id
  const currentSubscriptions = [...getState().user.subscriptions];
  const target = currentSubscriptions.indexOf(tickerToDelete);
  const newSubscriptions = currentSubscriptions.splice(target, 1);

  const sentPutRequest = await updateUserSubscriptions(userId, newSubscriptions);
  // TODO on error display some feedback to user that it is not possible to delete ticker
  console.log(sentPutRequest);
  if(sentPutRequest.status === 201) {
    dispatch(removeFavouriteTicker(tickerToDelete))
  } else {
    // TODO dispatch error state
  }
};
