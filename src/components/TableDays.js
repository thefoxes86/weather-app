import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DataTable from "./DataTable";
import { Grid } from "@material-ui/core";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  gridWeather: {
    display: "flex",
    alignItems: "center",
  },
}));

const getWindName = (deg) => {
  if (deg > 213.75 && deg <= 258.75) return "Libeccio (SW)";
  if (deg > 258.75 && deg <= 303.75) return "Ponente (W)";
  if (deg > 303.75 && deg <= 348.75) return "Maestrale (NW)";
  if (deg > 348.75 && deg <= 33.75) return "Tramontana (N)";
  if (deg > 33.75 && deg <= 78.75) return "Grecale (NE)";
  if (deg > 78.75 && deg <= 123.75) return "Levante (E)";
  if (deg > 123.75 && deg <= 168.75) return "Scirocco (SE)";
  if (deg > 168.75 && deg <= 213.75) return "Mezzogiorno (S)";
};

export default function TableDays({ weatherResults }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {weatherResults &&
            weatherResults.list.map((data, index) => {
              let date = new Date(data.dt * 1000);

              return (
                <Tab
                  key={index}
                  label={
                    days[date.getDay()] +
                    " - " +
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    date.getSeconds()
                  }
                  {...a11yProps(index)}
                />
              );
            })}
        </Tabs>
      </AppBar>
      {weatherResults &&
        weatherResults.list.map((data, index) => (
          <TabPanel key={index} value={value} index={index}>
            <Grid container spacing={6} className={classes.gridWeather}>
              <Grid item xs={2}>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    data.weather[0].icon +
                    "@2x.png"
                  }
                />
              </Grid>
              <Grid item xs={2}>
                {data.weather[0].main}
              </Grid>
              <Grid item xs={2}>
                {(data.main.temp - 273.15).toFixed(0)} C°
              </Grid>
              <Grid item xs={2}>
                {data.main.humidity} %
              </Grid>
              <Grid item xs={2}>
                {(data.wind.speed * 3.6).toFixed(0)} Km/h
              </Grid>
              <Grid item xs={2}>
                {getWindName(data.wind.deg)}
              </Grid>
            </Grid>
          </TabPanel>
        ))}
    </div>
  );
}
