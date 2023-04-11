import React from "react";
import "../styles/ForecastSummaries.css";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts, setSelectedDate }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
          onMoreDetailsClick={() => setSelectedDate(forecast)}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
