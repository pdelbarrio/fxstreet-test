import { useState, useContext } from "react";
import { AllButton, LatestButton, PopularButton } from "./Buttons";
import { FilterIcon } from "./Icons";
import { FilterContext } from "../context/filter.context";
import TopDropdown from "./dropdowns/TopDropdown";

export default function TopMainHeader() {
  const [dropdown, setDropdown] = useState(false);

  const {
    isLatestClicked,
    isPopularClicked,
    setIsLatestClicked,
    setIsPopularClicked,
  } = useContext(FilterContext);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="flex justify-between">
      <div className="flex space-x-4">
        <div
          className="ml-2 mr-8 hover:cursor-pointer"
          onClick={() => {
            setIsLatestClicked(true), setIsPopularClicked(false);
          }}
        >
          <LatestButton isClicked={isLatestClicked} />
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            setIsLatestClicked(false), setIsPopularClicked(true);
          }}
        >
          <PopularButton isClicked={isPopularClicked} />
        </div>
      </div>
      <div className="flex">
        <div className="hidden md:block">Show:</div>
        <div
          className="hover:bg-fx-gray cursor-pointer"
          onClick={() => handleDropdown()}
        >
          <div className="hidden md:block space-x-4 mr-2">
            <div className="flex mr-2">
              <AllButton />
            </div>
          </div>
          <div className="mr-4 md:hidden">
            <FilterIcon />
          </div>
        </div>
        {dropdown && <TopDropdown />}
      </div>
    </div>
  );
}
