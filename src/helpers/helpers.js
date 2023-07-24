export const url =
  "https://api.open-meteo.com/v1/dwd-icon?latitude=50.09&longitude=14.42&current_weather&hourly=temperature_2m,cloudcover,cloudcover_low,rain&daily=temperature_2m_max,temperature_2m_min&timezone=auto&current_weather=true";

const turnIntoArr = (arr) => {
  const deeoCopyArr = Object.values(arr);
  return deeoCopyArr;
};

export const findMax = (maxTemp) => {
  const toArry = Object.values(maxTemp);
  const maxValue = Math.max(...toArry);
  return maxValue;
};

export const findMin = (minTemp) => {
  const toArry = turnIntoArr(minTemp);
  const minValue = Math.min(...toArry);
  return minValue;
};
