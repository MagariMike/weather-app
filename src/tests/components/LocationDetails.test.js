import React from "react";
import { render, screen } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("Location Details", () => {
  it("renders the correct city and location props", () => {
    render(<LocationDetails city="Manchester" country="UK" />);
    expect(screen.getByText("Manchester, UK")).toBeInstanceOf(
      HTMLHeadingElement
    );
  });
});
