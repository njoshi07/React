import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <p id="someting-important">Animals and their Breeds</p>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
