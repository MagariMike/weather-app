import React, { useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App(props) {
  const { location, forecasts } = props;
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        setSelectedDate={setSelectedDate}
        forecasts={forecasts}
      />
      {selectedDate ? <ForecastDetails forecast={selectedDate} /> : null}
    </div>
  );
}

export default App;
