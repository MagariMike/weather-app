import React from "react";
import "../styles/app.css";

function LocationDetails(props) {
  const { city, country } = props;
  return <h1>{`${city}, ${country}`}</h1>;
}
export default LocationDetails;
