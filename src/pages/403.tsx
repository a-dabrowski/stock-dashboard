import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

const Forbidden = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid
        className={classes.root}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h1" component="h1">
          403
        </Typography>
        <Typography variant="body1">Whoa, hold it right there</Typography>
        <img
          src="https://media0.giphy.com/media/3ohjURfioZGTPqrD56/giphy.gif?cid=ecf05e47ad036355fb07e8926d89fb9f0643494511a7cb7e&rid=giphy.gif"
          alt="gif"
        />
        <Typography variant="body1">
          The page you are looking for is not for your eyes, because you do not have sufficient permissions. Hey, it happens
        </Typography>
        <Button variant="contained" color="primary" href="/listing">
          Let's go see some stocks
        </Button>
      </Grid>
    </Container>
  );
};
export default Forbidden;
