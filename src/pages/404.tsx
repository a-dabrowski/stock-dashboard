import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
        <Typography variant="h1" component="h1">
          404
        </Typography>
        <Typography variant="body1">Well, this is awkward</Typography>
        <img
          src="https://media0.giphy.com/media/26tPoyDhjiJ2g7rEs/giphy.webp"
          alt="gif"
        />
        <Typography variant="body1">Page you were looking for doesn't exist, how about we take a fresh start?</Typography>
        <Button variant="contained" color="primary" href="/">
          Let's go home
        </Button>
      </Grid>
    </Container>
  );
};
export default NotFound;
