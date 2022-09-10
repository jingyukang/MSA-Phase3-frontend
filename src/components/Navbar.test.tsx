import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/MSA-JIN/i);
  expect(linkElement).toBeInTheDocument();
});
