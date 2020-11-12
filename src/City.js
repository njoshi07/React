import React from "react";

export default function City({ state, city, weather }) {
  return (
    <div>
      <h2>StateName: {state}</h2>
      <h2>{city}</h2>
      <h2>{weather}</h2>
      <hr />
    </div>
  );
}
