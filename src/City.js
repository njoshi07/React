import React from "react";

export default function City({ state, city, weather }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, state),
    React.createElement("h2", {}, city),
    React.createElement("h2", {}, weather),
  ]);
}
