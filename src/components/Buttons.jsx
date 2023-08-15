/* eslint-disable react/prop-types */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LatestButton = ({ isClicked }) => {
  return (
    <div
      className={`font-bold antialiased ${
        isClicked ? "text-fx-orange" : "text-fx-gray-dark"
      }`}
    >
      Latest
    </div>
  );
};

export const PopularButton = ({ isClicked }) => {
  return (
    <div
      className={`font-bold antialiased ${
        isClicked ? "text-fx-orange" : "text-fx-gray-dark"
      }`}
    >
      Popular
    </div>
  );
};

export const AllButton = () => {
  return (
    <div className="flex">
      <div className="font-bold px-3">All</div>
      <FontAwesomeIcon className="mt-[4px]" icon={faChevronDown} />
    </div>
  );
};
