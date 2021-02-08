import { makeStyles } from "@material-ui/core";
import React from "react";
import SearchField from "./components/SearchField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) => ({
  app: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url(https://www.offalyexpress.ie/resizer/-1/-1/true/1530458397892.jpg--.jpg?1530458397000)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "0",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "auto",
  },
  button: {
    width: "100%",
    marginTop: "2rem",
  },
}));

export default function App() {
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <SearchField />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                View
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
