/* eslint-disable react/prop-types */
import { ClockIcon, FileSearchIcon } from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { formatPublicationTime } from "../utils/utils";

export default function TypeHeaderPost({ post }) {
  return (
    <div className="flex justify-between bg-fx-gray p-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex md:ml-3">
          <FileSearchIcon />
          <p className="font-bold antialiased text-fx-blue-clear text-sm md:text-base">
            {post.feed}
          </p>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="hidden md:block mx-2 mt-1 text-fx-blue-light"
          />
          <p className="font-bold antialiased text-fx-blue-light text-base">
            {post.subFeed}
          </p>
        </div>
      </div>
      <div className="flex mt-3 md:mt-0">
        <div className="mt-[2px] mr-3">
          <ClockIcon />
        </div>
        <p className="text-sm">{formatPublicationTime(post.publicationTime)}</p>
      </div>
    </div>
  );
}
