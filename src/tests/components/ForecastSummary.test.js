import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
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

    expect(screen.getByText("1111111")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(screen.getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(screen.getByText("stubIcon")).toHaveAttribute(
      "class",
      "forecast-summary__icon"
    );
    expect(screen.getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
  });
});
