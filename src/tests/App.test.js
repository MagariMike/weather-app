import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

test("renders app component correctly", () => {
  render(<App location={forecast.location} forecasts={forecast.forecasts} />);
  const h1Element = screen.getByText(/Manchester, UK/i);
  expect(h1Element).toBeInTheDocument();
});
