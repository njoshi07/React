import React from "react";

export default function City({ state, city, weather }) {
  return (
    <div>
      <h1>StateName: {state}</h1>
      <h2>{city}</h2>
      <h2>{weather}</h2>
    </div>
  );
}
