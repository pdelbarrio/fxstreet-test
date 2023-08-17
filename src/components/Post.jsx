import Loading from "./Loading";
import TypeHeaderPost from "./TypeHeaderPost";
import HeaderPost from "./HeaderPost";
import ContentPost from "./ContentPost";
import FooterPost from "./FooterPost";

/* eslint-disable react/prop-types */
export default function Post({ posts, isLoading }) {
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
              <TypeHeaderPost post={post} />
              <HeaderPost post={post} />
              <ContentPost post={post} />
              <FooterPost posts={posts} index={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
