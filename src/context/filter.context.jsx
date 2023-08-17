/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [isLatestClicked, setIsLatestClicked] = useState(true);
  const [isPopularClicked, setIsPopularClicked] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        isLatestClicked,
        setIsLatestClicked,
        isPopularClicked,
        setIsPopularClicked,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };
