/* eslint-disable react/prop-types */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EmptyBookmark,
  EmptyHeart,
  FullBookmark,
  FullHeart,
  MoreIcon,
} from "./Icons";

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

export const LikeButton = ({ isLiked }) => {
  return (
    <div className="flex">
      {isLiked ? (
        <>
          <FullHeart /> <span className="ml-2 text-[#D25746]">Liked!</span>
        </>
      ) : (
        <>
          <EmptyHeart />
          <span className="ml-2">Like</span>
        </>
      )}
    </div>
  );
};

export const BookmarkButton = ({ isSaved }) => {
  return (
    <div className="flex">
      {isSaved ? (
        <>
          <FullBookmark />
          <span className="ml-2 text-[#338473]">Saved!</span>
        </>
      ) : (
        <>
          <EmptyBookmark />
          <span className="ml-2">Save</span>
        </>
      )}
    </div>
  );
};

export const MoreButton = () => {
  return (
    <div>
      <MoreIcon />
    </div>
  );
};
