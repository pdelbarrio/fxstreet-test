import { formatPublicationTime } from "../utils/utils";

/* eslint-disable react/prop-types */
export default function Post({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div className="flex">
            <p className="font-bold antialiased text-fx-blue-clear">
              {post.feed}
            </p>
            <p className="font-bold antialiased text-fx-blue-light">
              {post.subFeed}
            </p>
          </div>
          <div className="flex">
            <p>icon clock</p>
            <p>{formatPublicationTime(post.publicationTime)}</p>
          </div>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}
