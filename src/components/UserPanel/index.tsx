import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import { useSelector, useDispatch } from "react-redux";
import {
  changeDisplayName,
  removeTickerSubscription,
  addFavouriteTicker,
  fetchFavouriteTickers,
  selectDisplayName,
  selectUserName,
  selectFavouriteTickers
} from "./userSlice";

export default function ClientPanel() {
  const displayName = useSelector(selectDisplayName);
  const userName = useSelector(selectUserName);
  const favouriteTickers = useSelector(selectFavouriteTickers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavouriteTickers());
  }, [dispatch]);

  const setNameAsUsername = () => {
      dispatch(changeDisplayName({ newDisplayName: userName }));
  };

  return (
    <React.Fragment>
      {favouriteTickers && (
        <div>
          <h4>Username: {userName}</h4>
          <p>Stock subscriptions:</p>
          {favouriteTickers.map((tickerName, index) => {
            return (
              <Chip
                key={index}
                label={tickerName}
                variant="outlined"
                color="primary"
                onDelete={() => dispatch(removeTickerSubscription(tickerName))}
                onClick={() => dispatch(addFavouriteTicker("PLAY"))}
              />
            );
          })}
          <h6>Display name: {displayName}</h6>
          <p>Set name as username</p>
          <button onClick={setNameAsUsername}>
            Set Display Name to Username
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
