import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

ReactDOM.render(
  React.createElement(
    "button",
    {},
    "I am a butto, Hello World!"
  ),
  root
);