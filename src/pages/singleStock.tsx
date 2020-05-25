import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import StockChart from "components/StockChart";

// TODO transfer components from page
import {
  selectFavouriteTickers,
  removeTickerSubscription,
  addFavouriteTicker
} from "components/UserPanel/userSlice";
const SingleStock = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const favouriteTickers = useSelector(selectFavouriteTickers);
  console.log(favouriteTickers);
  const isStockSubscribed = !!favouriteTickers.find(
    el => el === id.toUpperCase()
  );
  const handleAddToSubscription = () => {
    dispatch(addFavouriteTicker(id.toUpperCase()));
  };
  const handleRemoveSubscription = () => {
    dispatch(removeTickerSubscription(id.toUpperCase()));
  };
  const sector = "Energy";
  const index = "WIG20";
  const description =
    "Spółka jest jedną z czterech największych krajowych grup energetycznych. Podstawowa działalność Energa S.A. obejmuje dystrybucję, wytwarzanie oraz obrót energią elektryczną i cieplną. Jest jednym z trzech największych dostawców energii elektrycznej w Polsce.";
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h2">
        {id}
      </Typography>
      <Typography variant="h4" component="h6">
        Sector: {sector}
      </Typography>
      <Typography variant="h4" component="h6">
        Index: {index}
      </Typography>
      {isStockSubscribed ? (
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleRemoveSubscription}
        >
          Remove from subscriptions
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToSubscription}
        >
          Add to subscriptions
        </Button>
      )}
      <Typography variant="body1">{description}</Typography>
      <StockChart />
      <Button variant="contained" color="primary">
        Compare
      </Button>
    </Container>
  );
};
export default SingleStock;
