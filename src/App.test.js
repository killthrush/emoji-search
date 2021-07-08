import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("should render a div with class component-search-input", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  const inputContainer = document.getElementsByClassName("component-search-input");
  expect(inputContainer).toBeTruthy();
});