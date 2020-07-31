import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import RoundedContainer from "components/RoundedContainer";
import Portal from "component/Portal";
import {pushToPortal} from "redux-slices/portalSlice";
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
      <RoundedContainer>
        <Typography variant="h5" component="h5">
          Username: {userName}
        </Typography>
        <Typography variant="h6" component="h6">
          Display name: {displayName}
        </Typography>
        <Typography variant="body1">Set name as username</Typography>
        <Button variant="contained" color="primary" onClick={setNameAsUsername}>
          Set Display Name to Username
        </Button>
      </RoundedContainer>
      {favouriteTickers && (
        <RoundedContainer>
          <Typography variant="body1">Stock subscriptions:</Typography>
          {favouriteTickers.map((tickerName, index) => {
            return (
              <Chip
                key={index}
                label={tickerName}
                variant="outlined"
                component="a"
                clickable
                color="primary"
                onDelete={() => dispatch(removeTickerSubscription(tickerName))}
                onClick={() => {
                  console.log('open');
                  dispatch(pushToPortal(<RiskSlider/>));
                  // dispatch open modal
                }}
                href={`/listing/${tickerName}`}
              />
            );
          })}
          <Portal />
        </RoundedContainer>
      )}
    </React.Fragment>
  );
}
