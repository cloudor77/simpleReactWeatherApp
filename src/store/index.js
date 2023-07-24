import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { uiToggle: "toggle", weather: "weather" },
});

export default store;
