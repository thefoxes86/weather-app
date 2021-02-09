import { makeStyles } from "@material-ui/core";
import React from "react";
import SearchField from "./components/SearchField";

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
}));

export default function App() {
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <div className={classes.root}>
        <SearchField />
      </div>
    </div>
  );
}
