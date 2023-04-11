import React, { useState } from "react";
import iconData from "../data/iconData.json";
import ForecastDetails from "./ForecastDetails";
// import Forecast from "../data/forecast.json";

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;
  const weatherCode = `${icon.slice(0, 1)}00`;
  const formattedDate = new Date(date).toDateString();
  const [selectedDate, setSelectedDate] = useState();

  const handleClick = () => {
    setSelectedDate(date);
  };
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img
          src={iconData[weatherCode]}
          alt="icon showing the current weather"
        />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <button onClick={handleClick} type="submit">
        More Details
      </button>
      {selectedDate ? <ForecastDetails /> : null}
    </div>
  );
}

export default ForecastSummary;
