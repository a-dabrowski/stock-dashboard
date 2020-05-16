import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: 300,
      borderRadius: 16,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      margin: "16px 8px",
      padding: "16px 32px"
    },
    rootSmall: {
      minWidth: 150,
      borderRadius: 16,
      backgroundColor: "#FFF",
      margin: "16px 8px",
      padding: "16px 32px"
    }
  })
);

export default function RoundedContainer(props: any) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:400px)');

  return (
    <div className={matches ? classes.root : classes.rootSmall}>
      {props.children}
    </div>
  );
}
