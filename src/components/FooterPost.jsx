/* eslint-disable react/prop-types */
import { useState } from "react";
import { BookmarkButton, LikeButton, MoreButton } from "./Buttons";
import DotsDropdown from "./dropdowns/DotsDropdown";

export default function FooterPost({ posts, index }) {
  const [likes, setLikes] = useState(posts.map(() => false));
  const [saved, setSaved] = useState(posts.map(() => false));
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdown = (postId) => {
    setOpenDropdownIndex(openDropdownIndex === postId ? null : postId);
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
    <div className="flex items-center p-4">
      <div className="fixed-width-div mr-10 ml-2">
        <div className="hover:cursor-pointer" onClick={() => handleLike(index)}>
          <LikeButton isLiked={likes[index]} />
        </div>
      </div>
      <div className="fixed-width-div mr-10">
        <div className="hover:cursor-pointer" onClick={() => handleSave(index)}>
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
        {openDropdownIndex === index && <DotsDropdown />}
      </div>
    </div>
  );
}
