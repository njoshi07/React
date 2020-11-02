import React from "react";
import { render } from "react-dom";
import City from "./City";

const App = () => {
  return React.createElement("div", { id: "someting-important" }, [
    React.createElement(City, {
      state: "Nebraska",
      city: "Omaha",
      weather: "Cold",
    }),
    React.createElement(City, {
      state: "California",
      city: "San Francisco",
      weather: "Warm",
    }),
    React.createElement(City, {
      state: "Illinois",
      city: "Chicago",
      weather: "Windy",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
