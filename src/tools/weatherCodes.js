const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Mainly clear and partly cloudy",
  3: "Mainly clear, partly cloudy and overcast",
  45: "Fog",
  48: "Fog and depositing rime fog",
  51: "Drizzle: Light",
  53: "Drizzle: Moderate",
  54: "Drizzle: Dense",
  56: "Freezing Drizzle: Light",
  57: "Freezing Drizzle: Dense",
  61: "Rain: Slight",
  63: "Rain: Moderate",
  65: "Rain: Dense",
  66: "Freezing Rain: Light",
  67: "Freezing Rain: Heavy",
  71: "Snow fall: Slight",
  73: "Snow fall: Moderate",
  75: "Snow fall: Dense",
  77: "Snow Grains",
  80: "Rain Showers: Slight",
  81: "Rain Showers: Moderate",
  82: "Rain Showers: Dense",
  95: "Thunderstorm: Slight",
  96: "Thunderstorm: Moderate",
  99: "Thunderstorm: Heavy hail",
};

export const pickTheRighWeatherCode = (code) => {
  let weatherCode = "";
  Object.keys(weatherCodes).map((c, i) => {
    if (code === Number(c)) {
      weatherCode = weatherCodes[c];
      console.log(weatherCode.length > 15);
      return weatherCode;
    }
    return null;
  });

  return weatherCode;
};
