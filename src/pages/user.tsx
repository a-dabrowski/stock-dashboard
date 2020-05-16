import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import User from "components/UserPanel";
import RiskSlider from "components/RiskSlider";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: "url('https://images.unsplash.com/photo-1472235008642-bb3ce23994ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: 'cover'
    }
  })
);

const UserPanel = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
      <User />
      <RiskSlider />
    </Grid>
  );
};
export default UserPanel;
