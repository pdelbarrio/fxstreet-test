import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPublicationTime } from "../utils/utils";
import { ClockIcon, FileSearchIcon } from "./Icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import parse, { domToReact } from "html-react-parser";

/* eslint-disable react/prop-types */
export default function Post({ posts }) {
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
          <div>
            <p>{post.author.name}</p>
            <p>{post.author.companyName}</p>
          </div>
          <div>
            <img src={post.author.imageUrl} alt="" />
            <p>{post.title}</p>
          </div>
          <div>
            <div>{parse(post.content, { replace: replaceFunction })}</div>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
          </div>
          <div>
            <div>Like</div>
            <div>Save</div>
            <div>· · ·</div>
          </div>
        </div>
      ))}
    </div>
  );
}
