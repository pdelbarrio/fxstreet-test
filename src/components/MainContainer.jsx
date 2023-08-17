import { useState, useEffect } from "react";
import { AllButton, LatestButton, PopularButton } from "./Buttons";
import Post from "./Post";
import { FilterIcon } from "./Icons";

function MainContainer() {
  const [isLatestClicked, setIsLatestClicked] = useState(true);
  const [isPopularClicked, setIsPopularClicked] = useState(false);
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
        <div className="hidden md:block space-x-4 mr-2">
          <div className="flex mr-2">
            <div>Show:</div>
            <AllButton />
          </div>
        </div>
        <div className="mr-4 md:hidden">
          <FilterIcon />
        </div>
      </div>
      <div className="py-4 mr-2 md:mr-0">
        <Post posts={filteredPosts} isLoading={loading} />
      </div>
    </main>
  );
}

export default MainContainer;
