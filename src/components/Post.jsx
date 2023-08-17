import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPublicationTime } from "../utils/utils";
import { ClockIcon, FileSearchIcon, HideIcon, OptionsIcon } from "./Icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import parse, { domToReact } from "html-react-parser";
import { BookmarkButton, LikeButton, MoreButton } from "./Buttons";
import { useState } from "react";
import Loading from "./Loading";

/* eslint-disable react/prop-types */
export default function Post({ posts, isLoading }) {
  const [likes, setLikes] = useState(posts.map(() => false));
  const [saved, setSaved] = useState(posts.map(() => false));
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdown = (postId) => {
    setOpenDropdownIndex(openDropdownIndex === postId ? null : postId);
  };

  const CustomLink = ({ children, ...props }) => (
    <a
      className="font-bold text-fx-orange"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
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

  const handleLike = (postId) => {
    const updatedLikes = [...likes];
    updatedLikes[postId] = !updatedLikes[postId];
    setLikes(updatedLikes);
  };

  const handleSave = (postId) => {
    const updatedSaved = [...saved];
    updatedSaved[postId] = !updatedSaved[postId];
    setSaved(updatedSaved);
  };

  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-fx-white rounded-lg border-fx-gray-dot border-2 mb-4 mr-2"
            >
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
                    alt={post.author.name}
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
                    alt={post.author.name}
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
                {post.imageUrl && (
                  <img src={post.imageUrl} className="mt-4" alt={post.title} />
                )}
              </div>
              <div className="flex items-center p-4">
                <div className="fixed-width-div mr-10 ml-2">
                  <div
                    className="hover:cursor-pointer"
                    onClick={() => handleLike(index)}
                  >
                    <LikeButton isLiked={likes[index]} />
                  </div>
                </div>
                <div className="fixed-width-div mr-10">
                  <div
                    className="hover:cursor-pointer"
                    onClick={() => handleSave(index)}
                  >
                    <BookmarkButton isSaved={saved[index]} />
                  </div>
                </div>
                <div className="mr-10">
                  <div
                    className="hover:bg-fx-gray p-2 cursor-pointer"
                    onClick={() => handleDropdown(index)}
                  >
                    <MoreButton />
                  </div>
                  {openDropdownIndex === index && (
                    <div className="absolute ml-[-131px] mt-[5px] md:ml-[0px] md:mt-[5px] bg-white border border-gray-300 shadow-lg">
                      <div className="flex hover:bg-fx-gray pt-3 px-2 cursor-pointer">
                        <HideIcon />
                        <span className="text-fx-text-post ml-3 mb-2">
                          Hide
                        </span>
                      </div>
                      <div className="flex hover:bg-fx-gray pb-3 px-2 cursor-pointer">
                        <OptionsIcon />
                        <span className="text-fx-text-post ml-3">
                          Improve my feed
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
