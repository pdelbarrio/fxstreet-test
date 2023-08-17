import { useState, useEffect } from "react";
import { AllButton, LatestButton, PopularButton } from "./Buttons";
import Post from "./Post";
import { FilterIcon, LeftArrowIcon } from "./Icons";

function MainContainer() {
  const [isLatestClicked, setIsLatestClicked] = useState(true);
  const [isPopularClicked, setIsPopularClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const APIurl = "https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7";

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(APIurl);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (isPopularClicked) {
      return post.isPopular === true;
    } else if (isLatestClicked) {
      return post.isPopular === false;
    }
    return true;
  });

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <main className="flex-grow flex flex-col min-h-screen justify-start mr-2 pr-4 py-2 md:pr-0">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div
            className="ml-2 mr-8 hover:cursor-pointer"
            onClick={() => {
              setIsLatestClicked(true), setIsPopularClicked(false);
            }}
          >
            <LatestButton isClicked={isLatestClicked} />
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              setIsLatestClicked(false), setIsPopularClicked(true);
            }}
          >
            <PopularButton isClicked={isPopularClicked} />
          </div>
        </div>
        <div className="flex">
          <div className="hidden md:block">Show:</div>
          <div
            className="hover:bg-fx-gray cursor-pointer"
            onClick={() => handleDropdown()}
          >
            <div className="hidden md:block space-x-4 mr-2">
              <div className="flex mr-2">
                <AllButton />
              </div>
            </div>
            <div className="mr-4 md:hidden">
              <FilterIcon />
            </div>
          </div>
          {dropdown && (
            <div className="absolute ml-[-260px] mt-[30px] md:ml-[30px] md:mt-[30px] bg-white border border-gray-300 shadow-lg">
              <div className="flex items-center bg-gray-200 p-2">
                <LeftArrowIcon />
                <span className="ml-2">Tell us why:</span>
              </div>
              <div className="flex items-center p-2 mt-2">
                <input type="radio" className="mr-2 ml-2" />
                <span className="text-sm">
                  I&apos;m not interested in this author
                </span>
              </div>
              <div className="flex items-center p-2">
                <input type="radio" className="mr-2 ml-2" />
                <span className="text-sm">
                  I&apos;m not interested in this topic
                </span>
              </div>
              <div className="flex items-center p-2">
                <input type="radio" className="mr-2 ml-2" />
                <span className="text-sm">
                  I&apos;ve seen too many posts on this topic
                </span>
              </div>
              <div className="flex items-center p-2">
                <input type="radio" className="mr-2 ml-2" />
                <span className="text-sm">The information is incorrect</span>
              </div>
              <div className="flex items-center p-2">
                <input type="radio" className="mr-2 ml-2" />
                <span className="text-sm">I&apos;ve seen this post before</span>
              </div>
              <div className="flex items-center p-2">
                <input type="radio" className="mr-2 ml-2" />
                <span className="text-sm">Other reasons</span>
              </div>

              <div className="p-4 flex items-center justify-center">
                <span className="text-xs text-gray-400 border border-b-gray-400 px-20 py-2">
                  Hide content
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="py-4 mr-2 md:mr-0">
        <Post posts={filteredPosts} isLoading={loading} />
      </div>
    </main>
  );
}

export default MainContainer;
