// import Card from "../UI/Card";
import classes from "./Weather.module.css";

const WeatherSegment = (props) => {
  const shortV = props.weatherData;
  return (
    // <Card className="app">
    //   <div className="app">
    //     <div className="weather--header">
    //       <h4>
    //         {props.weatherData.city
    //           ? props.weatherData.city
    //           : "Location Not Found"}
    //       </h4>
    //       <p>Current Temperate</p>
    //     </div>
    //     <div className="weather--content">
    //       <ul>
    //         <li>{`${props.weatherData.maxTemperature}°C`}</li>
    //         <li>{`${props.weatherData.minTemperature}°C`}</li>
    //         <li>hehe</li>
    //         <li>Rain </li>
    //       </ul>
    //     </div>
    //     <div className="weather--footer">
    //       <button>Suggested Activity</button>
    //     </div>
    //   </div>
    // </Card>

    <div className={classes.app}>
      <div className={classes.location}>
        <h4>{shortV.city ? shortV.city : "Location Not Found"}</h4>
        {shortV.currentTemp !== undefined ? (
          <p>Current Temperature: {shortV.currentTemp}°C</p>
        ) : (
          <p>Current temperature unavailable</p>
        )}
      </div>
      <div className={classes.weathercode}>
        {shortV.weatherCode && <p>{shortV.weatherCode}</p>}
      </div>
      <div className={classes.temperatures}>
        <div className={classes.max}>
          {shortV.maxTemperature ? (
            <p className={classes.temps}>{shortV.maxTemperature.toFixed()}°C</p>
          ) : null}
          <p className={classes.tempsdesc}>Max Temperature</p>
        </div>
        <div className={classes.max}>
          {shortV.windSpeed ? (
            <p className={classes.temps}>{shortV.windSpeed.toFixed()}km/h</p>
          ) : null}
          <p className={classes.tempsdesc}>Windspeed</p>
        </div>
        <div className={classes.max}>
          {shortV.minTemperature ? (
            <p className={classes.temps}>{shortV.minTemperature.toFixed()}°C</p>
          ) : null}
          <p className={classes.tempsdesc}>Min Temperature</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherSegment;
