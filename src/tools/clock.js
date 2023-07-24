// import { useState, useEffect } from "react";
export const clockApp = () => {
  // const setUseClock = useState()[1];
  const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const date = new Date();
  const time = date.toLocaleTimeString("cz-CZ", options);
  return time;
};
