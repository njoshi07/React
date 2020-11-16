import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "bird", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed","Hello", breeds);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <AnimalDropdown />
          <BreedDropdown />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
