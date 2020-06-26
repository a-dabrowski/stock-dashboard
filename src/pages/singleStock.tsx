import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import RoundedContainer from "components/RoundedContainer";
import StockChart from "components/StockChart";

import { pushAdditionalData } from 'components/StockChart/stockChartSlice';

// TODO transfer components from page
import {
  selectFavouriteTickers,
  removeTickerSubscription,
  addFavouriteTicker
} from "components/UserPanel/userSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1)
    },
    background: {
      padding: "12px 0",
      background:
        "url('https://images.unsplash.com/photo-1472235008642-bb3ce23994ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: "cover"
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

const SingleStock = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const favouriteTickers = useSelector(selectFavouriteTickers);
  const allTickers = favouriteTickers; // TEMP copy

  const [compareTo, setValue] = useState<string | null>(allTickers[0]);
  const [inputValue, setInputValue] = React.useState('');

  const isStockSubscribed = !!favouriteTickers.find(
    el => el === id.toUpperCase()
  );
  const handleAddToSubscription = () => {
    dispatch(addFavouriteTicker(id.toUpperCase()));
  };
  const handleRemoveSubscription = () => {
    dispatch(removeTickerSubscription(id.toUpperCase()));
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCompareClick = () => {
    // TODO push additional data on stock chart
    dispatch(pushAdditionalData(compareTo));
    handleClose();
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
          <Typography variant="h6" component="p">
            About
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </RoundedContainer>
        <RoundedContainer>
          <Typography variant="h6" component="p">
            Stock performance
          </Typography>
          <StockChart />
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Compare
          </Button>
          <Modal
            className={classes.modal}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <div className={classes.paper}>
              <Autocomplete
                value={compareTo}
                onChange={(event: any, newValue: string | null) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={allTickers}
                style={{ width: 300, marginBottom: 16 }}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label="Controllable"
                    variant="outlined"
                  />
                )}
              />
              <Button disabled={!compareTo} variant="contained" color="primary" onClick={handleCompareClick}>Accept</Button>
            </div>
          </Modal>
        </RoundedContainer>
      </Container>
    </div>
  );
};
export default SingleStock;
