import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "800",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(screen.getByText("Thu Jan 01 1970")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(screen.getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(screen.getByTestId("forecast-icon")).toHaveClass(
      "forecast-summary__icon"
    );

    expect(screen.getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
  });
});
