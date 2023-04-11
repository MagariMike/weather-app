import React from "react";
import DetailedRow from "./DetailedRow";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;

  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details__center">
      <div>
        <div className="formatted-date">{formattedDate}</div>
        <DetailedRow label="Max Temperature:" value={temperature.max} />
        <DetailedRow label="Min Temperature:" value={temperature.min} />
        <DetailedRow label="Wind Speed:" value={wind.speed} />
        <DetailedRow label="Humidity:" value={humidity} />
      </div>
    </div>
  );
}

export default ForecastDetails;
