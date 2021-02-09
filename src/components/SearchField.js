import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { loadCityApi } from "../model/loadCityApi";
import loadWeatherApi from "../model/loadWeatherApi";

const useStyle = makeStyles((theme) => ({
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

const allCities = [];

export default function SearchField(props) {
  const classes = useStyle();

  const [value, setValue] = useState(null);

  const defaultProps = {
    options: allCities,
    getOptionLabel: (option) => option.name,
  };

  !value &&
    loadCityApi()
      .then((res) => {
        res.json().then((city) => {
          city.results.map((option) => allCities.push(option));
        });
      })
      .catch((err) => console.log(err));

  const searchWeather = () => {
    loadWeatherApi(value)
      .then((res) => {
        res.json().then((results) => console.log(results));
      })
      .catch((error) => error.then((err) => console.log(err)));
  };

  return (
    <Grid container spacing={3}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <div style={{ width: 300 }}>
            <Autocomplete
              {...defaultProps}
              id="debug"
              debug
              renderInput={(params) => (
                <TextField {...params} label="City" margin="normal" />
              )}
              onInputChange={(event) => setValue(event.target.outerText)}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={searchWeather}
          >
            View
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
