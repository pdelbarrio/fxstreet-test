import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPublicationTime } from "../utils/utils";
import { ClockIcon, FileSearchIcon } from "./Icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import parse, { domToReact } from "html-react-parser";
import { BookmarkButton, LikeButton, MoreButton } from "./Buttons";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Post({ posts }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const CustomLink = ({ children, ...props }) => (
    <a className="font-bold text-fx-orange" {...props}>
      {children}
    </a>
  );

  const replaceFunction = (domNode) => {
    if (domNode.name === "a") {
      return (
        <CustomLink {...domNode.attribs}>
          {domToReact(domNode.children)}
        </CustomLink>
      );
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-fx-white border rounded-md border-fx-gray-dot mb-4"
        >
          <div className="flex justify-between bg-fx-gray p-2">
            <div className="flex flex-col md:flex-row">
              <div className="flex">
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
              <p className="text-sm">
                {formatPublicationTime(post.publicationTime)}
              </p>
            </div>
          </div>
          {/* Header post mobile */}
          <div className="p-4 border border-t-0 border-l-0 border-r-0 border-b-1 border-fx-gray md:hidden">
            <div className="flex">
              <p className="font-semibold text-fx-gray-post mr-3">
                {post.author.name}
              </p>
              <p className="font-semibold text-fx-gray-post">|</p>
              <p className="font-semibold text-fx-gray-post ml-3">
                {post.author.companyName}
              </p>
            </div>
            <div className="flex mt-2">
              <img
                src={post.author.imageUrl}
                alt=""
                className="w-[35px] h-[35px] rounded-full mr-2"
              />
              <p className="ml-2 font-semibold leading-5 text-lg text-fx-text-post">
                {post.title}
              </p>
            </div>
          </div>
          {/* Header post desktop */}
          <div className="hidden md:block p-6 border border-t-0 border-l-0 border-r-0 border-b-1 border-fx-gray">
            <div className="flex">
              <img
                src={post.author.imageUrl}
                alt=""
                className="w-[50px] h-[50px] rounded-full mr-5"
              />

              <div>
                <div className="flex">
                  <p className="font-semibold text-fx-gray-post mr-2">
                    {post.author.name}
                  </p>
                  <p className="font-semibold text-fx-gray-post">|</p>
                  <p className="font-semibold text-fx-gray-post ml-2">
                    {post.author.companyName}
                  </p>
                </div>
                <div>
                  <p className="font-semibold  text-[22px] text-fx-text-post">
                    {post.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div>{parse(post.content, { replace: replaceFunction })}</div>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
          </div>
          <div className="flex p-5">
            <div className="hover:cursor-pointer mr-10" onClick={handleLike}>
              <LikeButton isLiked={isLiked} />
            </div>
            <div className="hover:cursor-pointer mr-10" onClick={handleSave}>
              <BookmarkButton isSaved={isSaved} />
            </div>
            <div>
              <MoreButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
