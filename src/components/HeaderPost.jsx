/* eslint-disable react/prop-types */
export default function HeaderPost({ post }) {
  return (
    <>
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
    </>
  );
}
