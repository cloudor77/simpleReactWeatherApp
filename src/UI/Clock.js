import { useState, useEffect } from "react";
import { clockApp } from "../tools/clock";
const Clock = () => {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      setClock(clockApp);
    }, 1000);
  }, []);

  return <li>{clock}</li>;
};

export default Clock;
