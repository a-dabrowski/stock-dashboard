import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import RoundedContainer from "components/RoundedContainer";
import StockChart from "components/StockChart";

// TODO transfer components from page
import {
  selectFavouriteTickers,
  removeTickerSubscription,
  addFavouriteTicker
} from "components/UserPanel/userSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    background: {
      padding: "12px 0",
      background: "url('https://images.unsplash.com/photo-1472235008642-bb3ce23994ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: 'cover'
    }
  }),
);

const SingleStock = () => {
  const classes = useStyles();
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
    <div className={classes.background}>
    <Container maxWidth="lg">
      <RoundedContainer>
      <Typography variant="h5" component="h2">
        {id}
      </Typography>
      <Typography variant="h6" component="h6">
        Sector: {sector}
      </Typography>
      <Typography variant="h6" component="h6">
        Index: {index}
      </Typography>
      {isStockSubscribed ? (
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={handleRemoveSubscription}
        >
          Remove from subscriptions
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAddToSubscription}
        >
          Add to subscriptions
        </Button>
      )}
      </RoundedContainer>
      <RoundedContainer>
        <Typography variant="h6" component="p">About</Typography>
        <Typography variant="body1">{description}</Typography>
      </RoundedContainer>
      <RoundedContainer>
        <Typography variant="h6" component="p">Stock performance</Typography>
        <StockChart />
        <Button variant="contained" color="primary">
          Compare
        </Button>
      </RoundedContainer>
    </Container>
    </div>
  );
};
export default SingleStock;
