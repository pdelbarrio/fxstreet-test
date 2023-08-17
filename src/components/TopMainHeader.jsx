import { useState, useContext } from "react";
import { AllButton, LatestButton, PopularButton } from "./Buttons";
import { FilterIcon, LeftArrowIcon } from "./Icons";
import { FilterContext } from "../context/filter.context";

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
        {dropdown && (
          <div className="absolute ml-[-260px] mt-[30px] md:ml-[30px] md:mt-[30px] bg-white border border-gray-300 shadow-lg">
            <div className="flex items-center bg-gray-200 p-2">
              <LeftArrowIcon />
              <span className="ml-2">Tell us why:</span>
            </div>
            <div className="flex items-center p-2 mt-2">
              <input type="radio" className="mr-2 ml-2" />
              <span className="text-sm">
                I&apos;m not interested in this author
              </span>
            </div>
            <div className="flex items-center p-2">
              <input type="radio" className="mr-2 ml-2" />
              <span className="text-sm">
                I&apos;m not interested in this topic
              </span>
            </div>
            <div className="flex items-center p-2">
              <input type="radio" className="mr-2 ml-2" />
              <span className="text-sm">
                I&apos;ve seen too many posts on this topic
              </span>
            </div>
            <div className="flex items-center p-2">
              <input type="radio" className="mr-2 ml-2" />
              <span className="text-sm">The information is incorrect</span>
            </div>
            <div className="flex items-center p-2">
              <input type="radio" className="mr-2 ml-2" />
              <span className="text-sm">I&apos;ve seen this post before</span>
            </div>
            <div className="flex items-center p-2">
              <input type="radio" className="mr-2 ml-2" />
              <span className="text-sm">Other reasons</span>
            </div>

            <div className="p-4 flex items-center justify-center">
              <span className="text-xs text-gray-400 border border-b-gray-400 px-20 py-2">
                Hide content
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
