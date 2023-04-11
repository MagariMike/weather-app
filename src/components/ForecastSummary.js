import React from "react";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, description, icon, temperature, onMoreDetailsClick } = props;
  const weatherCode = `${icon.slice(0, 1)}00`;
  const formattedDate = new Date(date).toDateString();

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
      <button onClick={onMoreDetailsClick} type="button">
        More Details
      </button>
    </div>
  );
}

export default ForecastSummary;
