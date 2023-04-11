import React from "react";
import "../styles/DetailedRow.css";

function DetailedRow(props) {
  const { label, value } = props;
  return (
    <div className="detailed-row">
      <div className="detailed-row__label">{label}</div>
      <div>{value}</div>
    </div>
  );
}

export default DetailedRow;
