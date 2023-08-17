/* eslint-disable react/prop-types */
import parse, { domToReact } from "html-react-parser";

export default function ContentPost({ post }) {
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

  return (
    <div className="p-4">
      <div>{parse(post.content, { replace: replaceFunction })}</div>
      {post.imageUrl && (
        <img src={post.imageUrl} className="mt-4" alt={post.title} />
      )}
    </div>
  );
}
