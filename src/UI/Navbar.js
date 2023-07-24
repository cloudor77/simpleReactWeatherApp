import classes from "./Navbar.module.css";

import Clock from "./Clock";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <h1>SimpleReactWeatherApp</h1>
      <ul>
        <li>
          <a
            href="https://www.accuweather.com/en/cz/prague/125594/weather-forecast/125594"
            target="_blank"
            rel="noreferrer"
          >
            More Weather
          </a>
        </li>
        <Clock />
      </ul>
    </nav>
  );
};

export default Navbar;
