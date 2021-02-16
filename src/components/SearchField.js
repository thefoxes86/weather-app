import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { loadCityApi } from "../model/loadCityApi";
import loadWeatherApi from "../model/loadWeatherApi";
import TableDays from "./TableDays";

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
  const [weatherResults, setWeatherResults] = useState();

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
        res.json().then((results) => setWeatherResults(results));
      })
      .catch((error) => error.then((err) => console.log(err)));
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={6}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Autocomplete
              {...defaultProps}
              id="debug"
              debug
              renderInput={(params) => (
                <TextField {...params} label="City" margin="normal" />
              )}
              onInputChange={(event) => setValue(event.target.value)}
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={searchWeather}
            >
              View
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TableDays weatherResults={weatherResults} />
        </Grid>
      </Grid>
    </Container>
  );
}
