import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ScoreBoard = () => {
  const classes = useStyles();
  return <div className={classes.root}>Hello world</div>;
};

export default ScoreBoard;
