import React from "react";
import { render } from "react-dom";
import City from "./City";

const App = () => {
  return (
    <div>
      <h1 id="someting-important">Cities By there Weather</h1>
      <City state="Nebraska" city="Omaha" weather="Cold" />
      <City state="California" city="San Francisco" weather="Warm" />
      <City state="Illinois" city="Chicago" weather="Windy" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
